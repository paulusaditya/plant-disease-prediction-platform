from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.prediction_service import predict_tomato, predict_corn, predict_potato, predict_apple

router = APIRouter()

@router.post("/{plant_type}")
async def predict_image(plant_type: str, file: UploadFile = File(...)):
    if plant_type.lower() == "tomat":
        return await predict_tomato(file)
    elif plant_type.lower() == "jagung":
        return await predict_corn(file)
    elif plant_type.lower() == "kentang":
        return await predict_potato(file)
    elif plant_type.lower() == "apple":
        return await predict_apple(file)
    else:
        raise HTTPException(status_code=400, detail=f"Model untuk {plant_type} belum tersedia")
