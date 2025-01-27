import httpStatus from "http-status";
import { TOrder } from "./order.interface";
import mongoose from "mongoose";
import { Product } from "../product/product.model";
import { Order } from "./order.model";
import QueryBuilder from "../../builders/QueryBuilder";

// import Stripe from "stripe";

const createOrderIntoDB = async (order: TOrder) => {
  // let result;
  const { products } = order;

  products.forEach(async (product) => {
    const objId = new mongoose.Types.ObjectId(product?.productId);
    const isAvailable = await Product.findOne({ _id: objId });
    // console.log(isAvailable, "data is available");
    if (!isAvailable) {
      return { message: "Order not found" };
    }
    const stock = isAvailable?.stock;
    console.log(stock, "stock ");
    const remaining = stock - product.quantity;
    if (stock < product.quantity) {
      return {
        message: "Insufficient quantity available in inventory",
        // stock,
      };
    }

    // console.log(result, "result is =<<");
    isAvailable.stock -= product.quantity;
    await isAvailable.save();
  });

  const result = await Order.create(order);
  console.log(result, "result is after order creation");
  return result;

  //   return result;
};

const getAllOrderFromDB = async (query: Record<string, unknown>) => {
  const orderQuery = new QueryBuilder(Order.find({ isDeleted: false }), query)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await orderQuery.modelQuery;
  const meta = await orderQuery.countTotal();
  return { result, meta };
};

const getSingleOrderFromDB = async (id: string) => {
  const result = await Order.findById(id);
  return result;
};
const cancelOrderFromDB = async (id: string) => {
  const result = await Order.findByIdAndUpdate(id, { status: "cancel" });
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrderFromDB,
  getSingleOrderFromDB,
  cancelOrderFromDB,
};
