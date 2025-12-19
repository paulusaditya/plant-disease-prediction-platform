from app.strategies.tomato_strategy import TomatoStrategy
from app.strategies.corn_strategy import CornStrategy
from app.strategies.potato_strategy import PotatoStrategy
from app.strategies.apple_strategy import AppleStrategy

STRATEGY_REGISTRY = {
    "tomat": TomatoStrategy(),
    "jagung": CornStrategy(),
    "kentang": PotatoStrategy(),
    "apple": AppleStrategy(),
}
