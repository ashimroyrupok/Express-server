import { Schema, model } from "mongoose";
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { IOrderModel, TOrder } from "./order.interface";

// Define the TProduct schema
const productSchema = new Schema({
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// Define the TOrder schema
const OrderSchema = new Schema<TOrder, IOrderModel>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
      required: true,
    },
    isDeleted: { type: Boolean, default: false, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    house: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    zipCode: { type: Number, required: true },
    products: { type: [productSchema], required: true },
  },
  { timestamps: true }
);

// statics methods for isOrderExistsById
OrderSchema.statics.isOrderExistsById = async function (_id: string) {
  const result = await Order.findById(_id);
  if (result?.isDeleted) {
    throw new AppError(httpStatus.BAD_REQUEST, "this Order is already deleted");
  }
  return result;
};
export const Order = model<TOrder, IOrderModel>("order", OrderSchema);
