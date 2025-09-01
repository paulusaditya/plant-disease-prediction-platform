from abc import ABC, abstractmethod
import numpy as np

class PredictionStrategy(ABC):
    @abstractmethod
    def predict(self, image: np.ndarray):
        """Melakukan prediksi berdasarkan gambar"""
        pass
