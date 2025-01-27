import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { OrderServices } from "./order.service";
import sendResponse from "../../utils/SendRespose";

// ------------------ create a Booking ------------------
const createOrder = catchAsync(async (req, res) => {
  const order = req.body;
  console.log(order);
  const result = await OrderServices.createOrderIntoDB(order);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Order created  successfully",
    data: result,
  });
});

// ------------------ get all Bookings ------------------
const getAllOrders = catchAsync(async (req, res) => {
  const result = await OrderServices.getAllOrderFromDB(req.query);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "All Orders are retrieved successfully",
    data: result,
  });
});

// ------------------ get single Booking ------------------
const getSingleBooking = catchAsync(async (req, res) => {
  const result = await OrderServices.getSingleOrderFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Order is retrieved successfully",
    data: result,
  });
});
const cancelOrder = catchAsync(async (req, res) => {
  const result = await OrderServices.cancelOrderFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Order is cancel successfully",
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getSingleBooking,
  cancelOrder,
};
