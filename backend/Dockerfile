# Gunakan image Python
FROM python:3.10

# Set working directory
WORKDIR /app

# Copy semua file backend ke container
COPY . /app

# Install dependensi
RUN pip install --no-cache-dir -r requirements.txt

# Expose port default Hugging Face (7860)
EXPOSE 7860

# Jalankan FastAPI dengan uvicorn
CMD ["uvicorn", "app.__init__:app", "--host", "0.0.0.0", "--port", "7860"]
