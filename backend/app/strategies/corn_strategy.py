import numpy as np
import cv2
from tensorflow.keras.models import load_model
from PIL import Image

class CornStrategy:
    def __init__(self):
        self.model = load_model("app/models/maize-leaf-disease-model.h5", compile=False)
        self.class_names = [
            "Common Rust",
            "Gray Leaf Spot",
            "Healthy",
            "Northern Leaf Blight"
        ]

    def preprocess_image(self, file):
        try:
            # Buka file dengan PIL dan convert ke RGB
            image = Image.open(file.file).convert("RGB")
            img = np.array(image)
            
            # Resize sesuai input model
            img = cv2.resize(img, (256, 256))
            
            # Normalisasi sesuai training
            img = img / 255.0
            
            # Tambahkan batch dimension
            img = np.expand_dims(img, axis=0)
            return img
        except Exception as e:
            raise ValueError(f"Gagal memproses gambar: {str(e)}")

    def predict(self, file):
        try:
            img_array = self.preprocess_image(file)
            preds = self.model.predict(img_array, verbose=0)
            class_idx = int(np.argmax(preds, axis=1)[0])
            confidence = float(np.max(preds))

            return {
                "class": self.class_names[class_idx],
                "confidence": confidence
            }
        except Exception as e:
            return {
                "error": str(e)
            }
