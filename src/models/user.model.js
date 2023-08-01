
// Creamos un schema de mongoose para el modelo de usuario

import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});

const userModel = mongoose.model("User", userSchema);

export { userModel };