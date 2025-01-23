import express from "express";
import { AuthValidations } from "./auth.validations";
import { AuthController } from "./auth.controller";
import { ValidateRequest } from "../../middleware/validateRequest";
import auth from "../../middleware/auth";

const router = express.Router();

// login an user
router.post(
  "/login",
  ValidateRequest(AuthValidations.loginUserSchema),
  AuthController.loginUser
);

// change user password
router.post(
  "/change-password",
  auth("user", "admin"),
  ValidateRequest(AuthValidations.changeUserPasswordSchema),
  AuthController.changeUserPassword
);

// forgot password
router.post(
  "/forgot-password",
  ValidateRequest(AuthValidations.forgotPasswordSchema),
  AuthController.forgotPassword
);

// reset password
router.post(
  "/reset-password",
  ValidateRequest(AuthValidations.resetPasswordSchema),
  AuthController.resetPassword
);

// refresh token setup
router.post(
  "/refresh-token",
  ValidateRequest(AuthValidations.refreshTokenSchema),
  AuthController.refreshTokenSetup
);

export const AuthRoutes = router;
