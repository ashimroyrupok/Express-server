import httpStatus from "http-status";
import { model, Schema } from "mongoose";
import { IProductModel, TProduct } from "./product.interface";
import AppError from "../../errors/AppError";

const productSchema = new Schema<TProduct, IProductModel>(
  {
    name: {
      type: String,
      required: [true, "product name is required"],
    },
    category: {
      type: Schema.Types.ObjectId,
      required: [true, "product category is required"],
      ref: "Category",
    },
    description: {
      type: String,
      required: [true, "product description is required"],
    },
    image: {
      type: String,
      required: [true, "product description is required"],
    },
    price: {
      type: Number,
      required: [true, "product price is required"],
    },
    stock: {
      type: Number,
      required: [true, "product stock is required"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.statics.isProductExistsById = async function (_id: string) {
  const result = await Product.findById(_id);
  if (result?.isDeleted) {
    throw new AppError(httpStatus.BAD_REQUEST, "Product is already deleted");
  }

  return result;
};

export const Product = model<TProduct, IProductModel>("product", productSchema);
