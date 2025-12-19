from app.strategies.tomato_strategy import TomatoStrategy
from app.strategies.corn_strategy import CornStrategy
from app.strategies.potato_strategy import PotatoStrategy
from app.strategies.apple_strategy import AppleStrategy

STRATEGY_REGISTRY = {
    "tomat": TomatoStrategy,
    "jagung": CornStrategy,
    "kentang": PotatoStrategy,
    "apple": AppleStrategy,
}

def get_strategy(plant_type: str):
    strategy_class = STRATEGY_REGISTRY.get(plant_type.lower())
    if not strategy_class:
        raise ValueError(f"Model untuk {plant_type} belum tersedia")
    return strategy_class()
