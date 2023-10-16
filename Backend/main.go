package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"sync"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

type Subscriber struct {
	Email string `json:"email"`
}

var subscribers []Subscriber
var mu sync.Mutex

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/subscribe", subscribeHandler).Methods("POST")
	r.HandleFunc("/subscribers", subscribersHandler).Methods("GET")

	c := cors.AllowAll()

	handler := c.Handler(r)

	fmt.Println("Server is running on :8080")
	http.Handle("/", handler)
	http.ListenAndServe(":8080", nil)
}

func subscribeHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	var subscriber Subscriber
	if err := json.NewDecoder(r.Body).Decode(&subscriber); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	// Ensure email is unique
	mu.Lock()
	defer mu.Unlock()

	for _, existingSubscriber := range subscribers {
		if existingSubscriber.Email == subscriber.Email {
			http.Error(w, "Email already subscribed", http.StatusConflict)
			return
		}
	}

	subscribers = append(subscribers, subscriber)
	w.WriteHeader(http.StatusCreated)
}

func subscribersHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	mu.Lock()
	defer mu.Unlock()

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(subscribers); err != nil {
		http.Error(w, "Error encoding JSON", http.StatusInternalServerError)
	}
}
