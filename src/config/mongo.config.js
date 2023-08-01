

// Aquí configuramos la conexión a la base de datos de mongoDB

import mongoose from "mongoose";
import { logger } from "../utils/logger.js";

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/prueba";

const connectMongo = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    logger.error(error.message);
    console.log(error);
  }
}

export { connectMongo };