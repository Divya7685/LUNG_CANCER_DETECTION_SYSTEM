import React, { useState } from "react";
import Upload from "./components/Upload";
import Result from "./components/Result";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Lung Cancer Detection</h1>

      <Upload setResult={setResult} />

      {result && <Result result={result} />}
    </div>
  );
}

export default App;