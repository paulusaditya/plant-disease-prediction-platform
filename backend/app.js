import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

// Serve model folder
app.use(
  "/models/tomato",
  express.static(path.join(__dirname, "../models/tomato/tomato_model_tfjs"))
);

app.get("/", (req, res) => {
  res.send("✅ Backend running, model available at /models/tomato/model.json");
});

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});
