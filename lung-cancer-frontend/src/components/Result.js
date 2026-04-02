import React from "react";

function Result({ result }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Result</h2>
      <p>Prediction: {result.prediction}</p>
      <p>Confidence: {(result.confidence * 100).toFixed(2)}%</p>
    </div>
  );
}

export default Result;