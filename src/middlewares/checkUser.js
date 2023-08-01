
// Middleware que chequea si el usuario está logueado chequeando el token

// import { userModel } from "../dao/models/user.model.js";
import jwt from "jsonwebtoken";

const checkUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decodedToken.id);
    if (!user) {
      throw new Error("No existe el usuario");
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

export { checkUser };