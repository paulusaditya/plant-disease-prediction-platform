from app.strategies.tomato_strategy import TomatoStrategy

async def predict_tomato(file):
    strategy = TomatoStrategy()
    return strategy.predict(file)
