// handle all Booking routes
import express from "express";

import { USER_ROLE } from "../auth/auth.constant";
import auth from "../../middleware/auth";
import { ValidateRequest } from "../../middleware/validateRequest";
import { OrderValidations } from "./order.validation";
import { OrderControllers } from "./order.controller";

const router = express.Router();

// create a Booking
router.post(
  "/create-booking",
  auth(USER_ROLE.user),
  ValidateRequest(OrderValidations.createOrderValidationSchema),
  OrderControllers.createOrder
);

// get all Bookings
router.get("/", auth("admin"), OrderControllers.getAllOrders);

// get single Booking
router.get(
  "/:id",
  auth(USER_ROLE.user, USER_ROLE.admin),
  OrderControllers.getSingleBooking
);
router.patch(
  "/:id",
  auth( USER_ROLE.admin),
  OrderControllers.cancelOrder
);

// export routes
export const OrderRoutes = router;
