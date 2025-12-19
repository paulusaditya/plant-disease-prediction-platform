import cv2
import numpy as np
from PIL import Image
from fastapi import UploadFile
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.efficientnet import preprocess_input

from app.strategies.base_strategy import BaseStrategy


class TomatoStrategy(BaseStrategy):
    def __init__(self):
        self.model = load_model(
            "app/models/efficientnetb3-TomKit-97.94.h5",
            compile=False
        )
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
        self.input_size = (224, 224)  # sesuai EfficientNetB3

    def _preprocess_image(self, file: UploadFile):
        try:
            image = Image.open(file.file).convert("RGB")
            img = np.array(image)
            img = cv2.resize(img, self.input_size)
            img = np.expand_dims(img, axis=0)
            img = preprocess_input(img)
            return img
        except Exception as e:
            raise ValueError(f"Gagal memproses gambar: {str(e)}")

    async def predict(self, file: UploadFile):
        img_array = self._preprocess_image(file)
        preds = self.model.predict(img_array, verbose=0)

        class_idx = int(np.argmax(preds, axis=1)[0])
        confidence = float(np.max(preds))

        return {
            "plant": "Tomato",
            "prediction": self.class_names[class_idx],
            "confidence": confidence
        }
