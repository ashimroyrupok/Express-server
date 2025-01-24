import express from "express";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../auth/auth.constant";
import { ValidateRequest } from "../../middleware/validateRequest";
import { productValidations } from "./product.validation";
import { ProductControllers } from "./product.controller";

const router = express.Router();

// create a product
router.post(
  "/create-product",
//   auth(USER_ROLE.admin),
  ValidateRequest(productValidations.createProductValidationSchema),
  ProductControllers.createProduct
);

// get all products
router.get("/", ProductControllers.getAllProducts);

// get single product
router.get("/:id", ProductControllers.getSingleProduct);

// delete an product
router.delete("/:id", 
  //  auth(USER_ROLE.admin), 
   ProductControllers.deleteProduct);

// update an product
router.patch(
  "/:id",
  // auth(USER_ROLE.admin),
  ValidateRequest(productValidations.productUpdateValidationSchema),
  ProductControllers.updateProduct
);


 export const ProductRoutes = router;
