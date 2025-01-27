import  httpStatus  from 'http-status';
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/SendRespose";
import { CategoryServices } from "./category.service";

// ------------------ create a Service ------------------
const createCategory = catchAsync(async (req, res) => {
  const result = await CategoryServices.createCategoryIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Category created successfully",
    data: result,
  });
});

// ------------------ get all Services ------------------
const getAllCategories = catchAsync(async (req, res) => {
  const { result, meta } = await CategoryServices.getAllCategoryFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Categories are retrieved successfully",
    data: result,
    meta: meta,
  });
});

const getSingleCategory = catchAsync(async (req, res) => {
  const result = await CategoryServices.getSingleCategoryFromDB(req.params?.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Single Category retrieved successfully",
    data: result,
  });
});

// ------------------ delete an Service ------------------
const deleteCategory = catchAsync(async (req, res) => {
  const result = await CategoryServices.deleteCategoryFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Category deleted successfully",
    data: result,
  });
});

// ------------------ update an Service ------------------
const updateCategory = catchAsync(async (req, res) => {
  const result = await CategoryServices.updateCategoryIntoDB(
    req.params.id,
    req.body
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Category  updated successfully",
    data: result,
  });
});

// export all Services controllers
export const CategoryControllers = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  deleteCategory,
  updateCategory,
};
