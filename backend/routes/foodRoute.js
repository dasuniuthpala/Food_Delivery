import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { addFood } from "../controllers/foodControllers.js";

const foodRouter = express.Router();

const uploadDir = path.join(process.cwd(), "backend/uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage });

foodRouter.post("/add", upload.single("image"), addFood);

export default foodRouter;