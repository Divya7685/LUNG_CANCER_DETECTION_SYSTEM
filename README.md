# LUNG_CANCER_DETECTION_SYSTEM

** Project Overview**

The Lung Cancer Detection System is a web-based application that uses Deep Learning to classify lung CT scan images into three categories:

Benign
Malignant
Normal

The system consists of a Flask backend for prediction and a React frontend for user interaction.

 

## Project Structure

```
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
```



# **Technologies Used**

🔹 Backend

Python

Flask

TensorFlow / Keras

NumPy

OpenCV

🔹 Frontend

React.js

HTML, CSS, JavaScript




 #How It Works (Sequence Flow)

User uploads a lung CT scan image via the React frontend.

The image is sent to the Flask backend using an API request.

Backend preprocesses the image (resize, normalization).

The trained deep learning model (model.h5) predicts the class.

Prediction result is sent back to the frontend.

Result is displayed to the user.




#**Model Training**

The model is trained using train.py

Dataset includes:

Benign images


Malignant images

Normal images

Output model is saved as model.h5




#**Setup & Run**

cd "E:\Lung Cancer Detection System"

npx create-react-app lung-cancer-frontend

cd lung-cancer-frontend

npm install axios

npm start



cd "E:\LUNG_CANCER_DETECTION_SYSTEM\lung-cancer-backend"
code .

py -3.10 -m venv venv

venv\Scripts\activate

pip install flask tensorflow keras pillow numpy opencv-python flask-cors

To run Backend command: python app.py

To run frontend command: npm start





#**Output**

Displays prediction result:

Benign

Malignant

Normal

Confidence Score



