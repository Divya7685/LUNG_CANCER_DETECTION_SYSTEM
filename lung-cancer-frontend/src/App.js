import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import bg from "./bg.jpg";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [confidence, setConfidence] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/predict", formData);
      setResult(res.data.prediction);
      setConfidence((res.data.confidence * 100).toFixed(2));
    } catch (err) {
      alert("Backend error");
    }

    setLoading(false);
  };

  const getColor = () => {
    if (result === "malignant") return "red";
    if (result === "benign") return "orange";
    if (result === "normal") return "lightgreen";
    return "white";
  };

  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="card">
        <h1>Lung Cancer Detection</h1>

        <input type="file" onChange={handleUpload} />
        <br /><br />

        <button onClick={handleSubmit}>Predict</button>

        <br /><br />

        {loading && <p>Analyzing image...</p>}

        {result && (
          <div>
            <h2 style={{ color: getColor() }}>
              {result.toUpperCase()}
            </h2>
            <p>Confidence: {confidence}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;