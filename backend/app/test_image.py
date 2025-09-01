import os
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

# Path ke model
MODEL_PATH = os.path.join(os.path.dirname(__file__), "models", "efficientnetb3-TomKit-97.94.h5")

# Load model
model = load_model(MODEL_PATH)

# Daftar label penyakit (sesuai urutan waktu training)
CLASS_NAMES = [
    "Tomato_Bacterial_spot",
    "Tomato_Early_blight",
    "Tomato_Late_blight",
    "Tomato_Leaf_Mold",
    "Tomato_Septoria_leaf_spot",
    "Tomato_Spider_mites",
    "Tomato_Target_Spot",
    "Tomato_Yellow_Leaf_Curl_Virus",
    "Tomato_mosaic_virus",
    "Tomato_healthy"
]

# Path gambar uji (ganti dengan gambar daun kamu)
IMG_PATH = r"C:\Users\Aditya\Documents\SEMESTER 7\skripsi-project\plant-disease-prediction-platform\backend\app\img\a.jpg"

# Preprocessing gambar
img = image.load_img(IMG_PATH, target_size=(256, 256))
img_array = image.img_to_array(img) / 255.0
img_array = np.expand_dims(img_array, axis=0)

# Prediksi
pred = model.predict(img_array)
pred_class = np.argmax(pred, axis=1)[0]
confidence = np.max(pred)

print("Prediksi:", CLASS_NAMES[pred_class])
print("Confidence:", confidence)
