import httpStatus from "http-status";
import QueryBuilder from "../../builders/QueryBuilder";
import AppError from "../../errors/AppError";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(
    Product.find({ isDeleted: false }),
    query
  )
    .search([])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await productQuery.modelQuery;
  const meta = await productQuery.countTotal();

  return { result, meta };
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  // check if the service is exists
  if (!(await Product.isProductExistsById(id))) {
    throw new AppError(httpStatus.NOT_FOUND, "Service is not found");
  }

  const result = await Product.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  deleteProductFromDB,
  updateProductIntoDB,
  getSingleProductFromDB,
};
