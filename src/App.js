import { useState } from "react";
import "./App.css";
import CopyButton from "./UI/CopyButton";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <CopyButton code={inputValue} />
    </div>
  );
}

export default App;
