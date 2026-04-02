import React, { useState } from "react";
import axios from "axios";

function Upload({ setResult }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Upload image first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/predict",
        formData
      );

      setResult(res.data);
    } catch (error) {
      alert("Backend error");
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <br /><br />
      <button onClick={handleUpload}>Predict</button>
    </div>
  );
}

export default Upload;