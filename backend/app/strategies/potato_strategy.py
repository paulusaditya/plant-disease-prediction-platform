import numpy as np
import cv2
import tensorflow as tf
from tensorflow.keras.models import load_model

class PotatoStrategy:
    def __init__(self, model_path="app/models/potatoes.h5"):
        self.model = load_model(model_path, compile=False)
        self.class_names = [
            "Potato___Early_blight",
            "Potato___Late_blight",
            "Potato___healthy"
        ]

    def preprocess_image(self, img_bytes):
        nparr = np.frombuffer(img_bytes, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        if img is None:
            raise ValueError("Gambar tidak valid atau corrupt")
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = cv2.resize(img, (256, 256))
        img = img.astype(np.float32) / 255.0
        img = np.expand_dims(img, axis=0)
        return img

    async def predict(self, file):
        """
        file: UploadFile dari FastAPI
        """
        img_bytes = await file.read()  # <--- gunakan await
        img_array = self.preprocess_image(img_bytes)

        preds = self.model.predict(img_array, verbose=0)
        class_idx = int(np.argmax(preds, axis=1)[0])
        confidence = float(np.max(preds))

        return {
            "class": self.class_names[class_idx],
            "confidence": confidence
        }
