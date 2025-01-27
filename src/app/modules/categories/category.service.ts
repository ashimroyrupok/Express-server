import httpStatus from "http-status";
import QueryBuilder from "../../builders/QueryBuilder";
import AppError from "../../errors/AppError";
import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategoryIntoDB = async (payload: TCategory) => {
  const result = await Category.create(payload);
  return result;
};

const getAllCategoryFromDB = async (query: Record<string, unknown>) => {
  const CategoryQuery = new QueryBuilder(Category.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await CategoryQuery.modelQuery;
  const meta = await CategoryQuery.countTotal();

  return { result, meta };
};

const getSingleCategoryFromDB = async (id: string) => {
  const result = await Category.findById(id);
  return result;
};

const deleteCategoryFromDB = async (id: string) => {
  const result = await Category.findByIdAndDelete(id);
  return result;
};

const updateCategoryIntoDB = async (
  id: string,
  payload: Partial<TCategory>
) => {
  // check if the service is exists
  if (!(await Category.isCategoryExistsById(id))) {
    throw new AppError(httpStatus.NOT_FOUND, "Service is not found");
  }

  const result = await Category.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
  getAllCategoryFromDB,
  deleteCategoryFromDB,
  updateCategoryIntoDB,
  getSingleCategoryFromDB,
};
