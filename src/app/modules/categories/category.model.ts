import httpStatus from "http-status";
import { model, Schema } from "mongoose";
import { ICategoryModel, TCategory } from "./category.interface";
import AppError from "../../errors/AppError";

const categorySchema = new Schema<TCategory, ICategoryModel>(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "category name is required"],
    },

    image: {
      type: String,
      required: [true, "category image is required"],
    },
  },
  {
    timestamps: true,
  }
);

categorySchema.statics.isCategoryExistsById = async function (_id: string) {
  const result = await Category.findById(_id);
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, "Product is already deleted");
  }

  return result;
};

export const Category = model<TCategory, ICategoryModel>(
  "category",
  categorySchema
);
