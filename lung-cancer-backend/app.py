
from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np
from flask_cors import CORS
from PIL import Image

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
model = load_model("model.h5")
classes = ["benign", "malignant", "normal"]

@app.route('/predict', methods=['POST'])
def predict():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file uploaded"}), 400

        file = request.files['file']

        img = Image.open(file.stream)
        img = img.resize((224, 224))
        img = np.array(img)

        if img.shape[-1] == 4:
            img = img[:, :, :3]

        img = np.expand_dims(img, axis=0) / 255.0
        prediction = model.predict(img)
        index = int(np.argmax(prediction))
        confidence = float(np.max(prediction))

        return jsonify({
            "prediction": classes[index],
            "confidence": confidence
        })

    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)

    