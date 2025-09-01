import numpy as np
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
import io
from PIL import Image

class TomatoStrategy:
    def __init__(self):
        self.model = load_model("app/models/efficientnetb3-TomKit-97.94.h5")
        self.class_names = [
            "Tomato_Bacterial_spot",
            "Tomato_Early_blight",
            "Tomato_Late_blight",
            "Tomato_Leaf_Mold",
            "Tomato_Septoria_leaf_spot",
            "Tomato_Spider_mites",
            "Tomato_Target_Spot",
            "Tomato_YellowLeaf_Curl_Virus",
            "Tomato_mosaic_virus",
            "Tomato_healthy"
        ]

    def predict(self, file):
        img_bytes = file.file.read()
        img = Image.open(io.BytesIO(img_bytes)).resize((256, 256))

        img_array = image.img_to_array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        preds = self.model.predict(img_array)
        class_idx = np.argmax(preds)
        confidence = float(np.max(preds))

        return {
            "class": self.class_names[class_idx],
            "confidence": confidence
        }
