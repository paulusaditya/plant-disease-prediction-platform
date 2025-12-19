from abc import ABC, abstractmethod
from fastapi import UploadFile

class BaseStrategy(ABC):
    @abstractmethod
    async def predict(self, file: UploadFile):
        pass
