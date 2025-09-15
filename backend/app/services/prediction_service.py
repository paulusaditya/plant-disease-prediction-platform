from app.strategies.tomato_strategy import TomatoStrategy
from app.strategies.corn_strategy import CornStrategy 

# Fungsi untuk tomat
async def predict_tomato(file):
    strategy = TomatoStrategy()
    return strategy.predict(file)

# Fungsi untuk jagung
async def predict_corn(file):
    strategy = CornStrategy()
    return strategy.predict(file)
