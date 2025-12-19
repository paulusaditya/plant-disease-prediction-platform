import logging
from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.prediction_context import PredictionContext
from app.strategies.strategy_registry import STRATEGY_REGISTRY

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter()

@router.post("/{plant_type}")
async def predict_image(plant_type: str, file: UploadFile = File(...)):
    plant_type = plant_type.lower()

    logger.info(f"Request masuk | plant_type={plant_type} | filename={file.filename}")

    strategy = STRATEGY_REGISTRY.get(plant_type)
    if not strategy:
        logger.warning(f"Strategy tidak ditemukan untuk {plant_type}")
        raise HTTPException(status_code=400, detail="Model belum tersedia")

    context = PredictionContext()
    context.set_strategy(strategy)

    result = await context.execute(file)

    logger.info(f"Hasil prediksi | plant_type={plant_type} | result={result}")

    return result
