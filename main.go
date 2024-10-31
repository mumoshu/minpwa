package main

import (
	"io"
	"log"
	"net/http"
)

// minpwaServer is a HTTP server that serves
// the minpwa web application (index.htlm. *.png, and manifest.json)
// in the current directory.
func minpwaServer() {
	log.Printf("Serving minpwa at http://localhost:8080")
	http.Handle("/tasks", http.HandlerFunc(tasksHandler))
	http.Handle("/", http.FileServer(http.Dir(".")))
	http.ListenAndServe(":8080", nil)
}

func main() {
	minpwaServer()
}

func tasksHandler(w http.ResponseWriter, r *http.Request) {
	// Read body
	body, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	log.Printf("Received task: %s", string(body))

	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"ok": true}`))
}
