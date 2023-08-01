import { Router } from "express";
import { deleteUserController, getAllUsersController, getUserByIdController, postUserController, putUserController } from "../../controllers/user.controllers";
import { checkUser } from "../../middlewares/checkUser";


const userRouter = Router();

userRouter.get("/", getAllUsersController);
userRouter.get("/:id", checkUser,getUserByIdController);
userRouter.post("/", postUserController);
userRouter.put("/:id", checkUser, putUserController);
userRouter.delete("/:id", checkUser,deleteUserController);

export { userRouter };