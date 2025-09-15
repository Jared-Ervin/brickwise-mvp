import { useState } from "react";
import "./App.css";
import { Ping } from "./components/Ping";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Brickwise</h1>
      <p>Vite + React + Apollo</p>
      <Ping />
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </div>
  );
}

export default App;
