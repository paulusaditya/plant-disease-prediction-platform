import os
import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np

# Path model (otomatis relatif terhadap file ini)
MODEL_PATH = os.path.join(os.path.dirname(__file__), "models", "efficientnetb3-TomKit-97.94.h5")

print("Loading model...")
model = load_model(MODEL_PATH)
print("Model loaded sukses!")

# Cek input shape
print("Input shape model:", model.input_shape)

# Dummy image sesuai input model
IMG_SIZE = model.input_shape[1:3]
dummy_image = np.random.rand(1, IMG_SIZE[0], IMG_SIZE[1], 3).astype("float32")

# Prediksi
pred = model.predict(dummy_image)
print("Output prediksi (dummy):", pred)
print("Shape output:", pred.shape)
