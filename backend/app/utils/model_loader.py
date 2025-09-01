from tensorflow.keras.models import load_model
import os

MODEL_PATH = os.path.join("app", "models", "efficientnetb3-TomKit-97.94.h5")
_model_cache = None

def load_tomato_model():
    global _model_cache
    if _model_cache is None:
        print("Loading tomato model...")
        _model_cache = load_model(MODEL_PATH)
    return _model_cache
