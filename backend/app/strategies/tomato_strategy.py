import os
import cv2
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.efficientnet import preprocess_input

class TomatoStrategy:
    def __init__(self):
        self.model = load_model("app/models/efficientnetb3-TomKit-97.94.h5")
        self.class_names = [
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

    def preprocess_image(self, img_bytes):
        # Convert bytes ke numpy array
        nparr = np.frombuffer(img_bytes, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        if img is None:
            raise ValueError("Gambar tidak valid")
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = cv2.resize(img, self.model.input_shape[1:3])
        img = np.expand_dims(img, axis=0)
        img = preprocess_input(img)  # Sesuai EfficientNet
        return img

    def predict(self, file):
        img_bytes = file.file.read()
        img_array = self.preprocess_image(img_bytes)

        preds = self.model.predict(img_array, verbose=0)
        class_idx = np.argmax(preds, axis=1)[0]
        confidence = float(np.max(preds))

        return {
            "class": self.class_names[class_idx],
            "confidence": confidence
        }
