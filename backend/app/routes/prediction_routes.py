from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.prediction_service import predict_tomato

router = APIRouter()

@router.post("/{plant_type}")
async def predict_image(plant_type: str, file: UploadFile = File(...)):
    if plant_type == "tomat":
        return await predict_tomato(file)
    else:
        raise HTTPException(status_code=400, detail=f"Model untuk {plant_type} belum tersedia")
