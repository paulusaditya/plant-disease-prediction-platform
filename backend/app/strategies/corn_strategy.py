import numpy as np
import cv2
from tensorflow.keras.models import load_model
from PIL import Image
from fastapi import UploadFile

from app.strategies.base_strategy import BaseStrategy


class CornStrategy(BaseStrategy):
    def __init__(self):
        self.model = load_model(
            "app/models/maize-leaf-disease-model.h5",
            compile=False
        )
        self.class_names = [
            "Common Rust",
            "Gray Leaf Spot",
            "Healthy",
            "Northern Leaf Blight"
        ]

    def _preprocess_image(self, file: UploadFile):
        try:
            image = Image.open(file.file).convert("RGB")
            img = np.array(image)
            img = cv2.resize(img, (256, 256))
            img = img / 255.0
            img = np.expand_dims(img, axis=0)
            return img
        except Exception as e:
            raise ValueError(f"Gagal memproses gambar: {str(e)}")

    async def predict(self, file: UploadFile):
        img_array = self._preprocess_image(file)
        preds = self.model.predict(img_array, verbose=0)

        class_idx = int(np.argmax(preds, axis=1)[0])
        confidence = float(np.max(preds))

        return {
            "plant": "Corn",
            "prediction": self.class_names[class_idx],
            "confidence": confidence
        }
