```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: input data and click Save
    Note right of browser: Browser gets the user input and send it to the server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa with note data
    activate server
    Note right of server: Server receives the new note data and saves it
    server-->>browser: { "content": "new note", "date": "2025-1-1" }
    deactivate server

    Note right of browser: The browser updates the note list dynamically without reloading the page
    browser->>browser: Rerender the new note in the list without refreshing the page

```
