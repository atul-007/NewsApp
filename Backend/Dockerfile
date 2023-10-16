FROM golang:1.21.0

WORKDIR /app

COPY go.mod go.sum ./


RUN go mod download

COPY . .

COPY entrypoint.sh /

EXPOSE 8080
RUN ["chmod", "+x", "/entrypoint.sh"]
ENTRYPOINT [ "/entrypoint.sh" ]