import { useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let charset = "";
    if (includeUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLower) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumber) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+-={}[]|:;'<>,.?/~";

    // condition for alerting of nothing selected
    if (!includeLower && !includeNumber && !includeSymbols && !includeUpper) {
      alert("Please select any condition");
      return;
    }
    let generatedPassword = "";
    // by running a loop upto length times so that each time we get  a random index so that we can get diff passwords set
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const copyToclipboard = () => {
    navigator.clipboard.writeText(password);
    alert("password copied to clipboard");
  };

  return (
    <>
      <div className="pasword-generator">
        <h2>Strong Password Generator</h2>
        <div className="input-group">
          <label htmlFor="num">Password Length</label>
          <input
            type="number"
            className="num"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="upper"
            checked={includeUpper}
            onChange={(e) => setIncludeUpper(e.target.checked)}
          />
          <label htmlFor="upper">Include Uppercase</label>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="lower"
            checked={includeLower}
            onChange={(e) => setIncludeLower(e.target.checked)}
          />
          <label htmlFor="lower">Include Lowercase</label>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="number"
            checked={includeNumber}
            onChange={(e) => setIncludeNumber(e.target.checked)}
          />
          <label htmlFor="number">Include Numbers</label>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="symbols"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          <label htmlFor="symbols">Include Symbols</label>
        </div>
        <button className="generate-btn" onClick={generatePassword}>
          Generate Password
        </button>
        <div className="generated-password">
          <input type="text" readOnly value={password} />
          <button className="copy-btn" onClick={copyToclipboard}>
            Copy
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
