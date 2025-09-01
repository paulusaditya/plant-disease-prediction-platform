from fastapi import FastAPI
from app.routes import prediction_routes

app = FastAPI(title="Plant Disease Prediction API")

# Register router
app.include_router(prediction_routes.router, prefix="/api", tags=["Prediction"])

@app.get("/")
def root():
    return {"message": "Plant Disease Prediction API is running!"}
