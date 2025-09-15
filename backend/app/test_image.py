import os
import cv2
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.efficientnet import preprocess_input

# --- Path model ---
MODEL_PATH = os.path.join(
    os.path.dirname(__file__),
    "models",
    "efficientnetb3-TomKit-97.94.h5"
)

# --- Load model ---
model = load_model(MODEL_PATH)

# --- Label penyakit tomat ---
CLASS_NAMES = [
    "Bacterial_spot",
    "Early_blight",
    "Healthy",
    "Late_blight",
    "Leaf_mold",
    "Mosaic_virus",
    "Septoria_leaf_spot",
    "Spider_mites",
    "Target_spot",
    "Yellow_leaf_curl_virus",
]

# --- Preprocessing gambar ---
def preprocess_image(img_path):
    img_size = model.input_shape[1:3]  # ambil dari model
    img = cv2.imread(img_path)
    if img is None:
        raise ValueError("Gambar tidak valid")
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    img = cv2.resize(img, img_size)
    img = np.expand_dims(img, axis=0)
    img = preprocess_input(img)  # sesuai EfficientNet
    return img

# --- Prediksi penyakit tomat ---
def predict_tomato_disease(img_path: str):
    img_array = preprocess_image(img_path)
    pred = model.predict(img_array, verbose=0)
    pred_class_idx = np.argmax(pred, axis=1)[0]
    confidence = float(np.max(pred))

    print(f"Prediksi Penyakit: {CLASS_NAMES[pred_class_idx]}")
    print(f"Tingkat Keyakinan: {confidence:.2%}")

    return CLASS_NAMES[pred_class_idx], confidence

# --- Contoh penggunaan ---
if __name__ == "__main__":
    IMG_PATH = r"C:\Users\Aditya\Documents\SEMESTER 7\skripsi-project\plant-disease-prediction-platform\backend\app\img\sehat.jpeg"
    disease, conf = predict_tomato_disease(IMG_PATH)
