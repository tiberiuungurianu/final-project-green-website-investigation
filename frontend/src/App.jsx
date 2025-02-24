import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]); // Stocăm datele venite de la backend
  const [message, setMessage] = useState("Se încarcă...");

  useEffect(() => {
    fetch("http://localhost:8080/api/data") // Cerere către backend
      .then((response) => {
        if (!response.ok) throw new Error("Eroare la fetch!");
        return response.json();
      })
      .then((data) => setData(data)) // Stocăm datele în state
      .catch((error) => setMessage("Eroare la încărcare: " + error.message));
  }, []);

  return (
    <div>
      <h1>Frontend-ul este activ!</h1>
      <h2>Mesaj de la backend:</h2>
      <ul>
        {data.length > 0 ? (
          data.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p>{message}</p>
        )}
      </ul>
    </div>
  );
}

export default App;
