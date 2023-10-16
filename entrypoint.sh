
#!/bin/sh
cd /app
CompileDaemon -command-stop=true -graceful-kill=true -build="go build -o main main.go" -command="dlv debug --headless=true --log=true --listen=:2345 --api-version=2"