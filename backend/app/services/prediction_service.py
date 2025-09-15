from app.strategies.tomato_strategy import TomatoStrategy
from app.strategies.corn_strategy import CornStrategy 
from app.strategies.potato_strategy import PotatoStrategy

# Fungsi untuk tomat
async def predict_tomato(file):
    strategy = TomatoStrategy()
    return await strategy.predict(file)

# Fungsi untuk jagung
async def predict_corn(file):
    strategy = CornStrategy()
    return await strategy.predict(file)

# Fungsi untuk kentang
async def predict_potato(file):
    strategy = PotatoStrategy()
    return await strategy.predict(file)
