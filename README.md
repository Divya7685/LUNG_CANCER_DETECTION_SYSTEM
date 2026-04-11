LUNG_CANCER_DETECTION_SYSTEM
Project Overview

The Lung Cancer Detection System is a web-based application that uses Deep Learning to classify lung CT scan images into three categories:

Benign
Malignant
Normal

The system consists of a Flask backend for prediction and a React frontend for user interaction.

Project Structure
lung-cancer-detection-system/
│
├── lung-cancer-backend/
│   ├── dataset/
│   │   ├── benign/
│   │   ├── malignant/
│   │   └── normal/
│   ├── train.py
│   ├── app.py
│   ├── model.h5
│   └── requirements.txt
│
├── lung-cancer-frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   └── styles/
│   └── README.md
Technologies Used

Backend:
Python
Flask
TensorFlow / Keras
NumPy
OpenCV

Frontend:
React.js
HTML
CSS
JavaScript

How It Works (Sequence Flow)

User uploads a lung CT scan image through the React frontend.
The image is sent to the Flask backend using an API request.
The backend preprocesses the image (resize, normalization).
The trained deep learning model (model.h5) predicts the class along with confidence score.
The prediction result is sent back to the frontend.
The result is displayed to the user.

Model Training

The model is trained using the train.py file.

Dataset includes:
Benign images
Malignant images
Normal images

To generate the model file (model.h5), run the following command:

python train.py

After training is completed, the model will be saved as:

model.h5
Setup and Run

Navigate to the project folder:

cd "E:\Lung Cancer Detection System"
Frontend Setup
npx create-react-app lung-cancer-frontend
cd lung-cancer-frontend
npm install axios
npm start
Backend Setup
cd "E:\LUNG_CANCER_DETECTION_SYSTEM\lung-cancer-backend"
code .

py -3.10 -m venv venv
venv\Scripts\activate

pip install flask tensorflow keras pillow numpy opencv-python flask-cors
Run Application

To run backend:

python app.py

To run frontend:

npm start
Output

The system displays prediction result along with confidence score:

Predicted Class: Benign / Malignant / Normal
Confidence Score: Example 92.45%