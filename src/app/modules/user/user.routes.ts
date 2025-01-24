import httpStatus from "http-status";
import express, { NextFunction, Request, Response } from "express";
import { upload } from "../../utils/upload";
import AppError from "../../errors/AppError";
import { ValidateRequest } from "../../middleware/validateRequest";
import { UserValidations } from "./user.validation";
import { UserControllers } from "./user.controller";
import auth from "../../middleware/auth";

const router = express.Router();

// create an user
router.post(
  "/create-user",
  // upload.single("file"),
  // (req: Request, res: Response, next: NextFunction) => {
  //   if (req.body?.data) {
  //     req.body = JSON.parse(req.body?.data);
  //     next();
  //   } else {
  //     throw new AppError(httpStatus.BAD_REQUEST, "Please provide user data");
  //   }
  // },
  ValidateRequest(UserValidations.createUserValidationsSchema),
  UserControllers.createAnUser
);

// get all users
router.get("/", 
  // auth("admin"),
   UserControllers.getAllUsers);

// get me route
router.get("/getMe", auth("user", "admin"), UserControllers.getMe);

// delete an user
router.delete("/:id", auth("admin"), UserControllers.deleteUser);

// update an user
router.patch(
  "/:id",
  auth("user", "admin"),
  ValidateRequest(UserValidations.updateUserValidationsSchema),
  UserControllers.updateUser
);

// change user status
router.patch(
  "/toggle-user-status/:id",
  auth("admin"),
  ValidateRequest(UserValidations.changeUserStatusSchema),
  UserControllers.changeUserStatus
);

// change user role
router.patch(
  "/toggle-user-role/:id",
  auth("admin"),
  ValidateRequest(UserValidations.changeUserRoleSchema),
  UserControllers.changeUserRole
);

export const UserRoutes = router;
