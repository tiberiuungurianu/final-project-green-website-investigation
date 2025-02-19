import React, { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/hello")
            .then((res) => res.text())
            .then((data) => setMessage(data))
            .catch((error) => console.error("Eroare la conectare:", error));
    }, []);

    return (
        <div>
            <h1>Frontend-ul este activ!</h1>
            <p>Mesaj de la backend: {message}</p>
        </div>
    );
}

export default App;
