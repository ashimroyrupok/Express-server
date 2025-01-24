import  httpStatus  from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/SendRespose";
import { ProductServices } from "./product.service";

// ------------------ create a Service ------------------
const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product created successfully",
    data: result,
  });
});

// ------------------ get all Services ------------------
const getAllProducts = catchAsync(async (req, res) => {
  const { result, meta } = await ProductServices.getAllProductFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Products retrieved successfully",
    data: result,
    meta: meta,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getSingleProductFromDB(req.params?.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Single product retrieved successfully",
    data: result,
  });
});

// ------------------ delete an Service ------------------
const deleteProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.deleteProductFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "product deleted successfully",
    data: result,
  });
});

// ------------------ update an Service ------------------
const updateProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.updateProductIntoDB(
    req.params.id,
    req.body
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product  updated successfully",
    data: result,
  });
});

// export all Services controllers
export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
