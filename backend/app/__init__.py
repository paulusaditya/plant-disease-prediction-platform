from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import prediction_routes

app = FastAPI()

# Middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ganti dengan alamat frontend kamu misal: ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include router dari prediction_routes
app.include_router(prediction_routes.router, prefix="/predict", tags=["Prediction"])
