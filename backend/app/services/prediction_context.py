from fastapi import UploadFile
from app.strategies.base_strategy import BaseStrategy


class PredictionContext:
    def __init__(self):
        self._strategy: BaseStrategy | None = None

    def set_strategy(self, strategy: BaseStrategy):
        self._strategy = strategy

    async def execute(self, file: UploadFile):
        if not self._strategy:
            raise ValueError("Strategy belum ditentukan")
        return await self._strategy.predict(file)
