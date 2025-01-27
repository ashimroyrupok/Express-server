import  express  from 'express';
import { ValidateRequest } from '../../middleware/validateRequest';
import { categoryValidations } from './category.validation';
import { CategoryControllers } from './category.controller';
const router = express.Router();

// create a Category
router.post(
  "/create-category",
//   auth(USER_ROLE.admin),
  ValidateRequest(categoryValidations.createCategoryValidationSchema),
  CategoryControllers.createCategory
);

// get all Categories
router.get("/", CategoryControllers.getAllCategories);

// get single Category
router.get("/:id", CategoryControllers.getSingleCategory);

// delete an Category
router.delete("/:id", 
  //  auth(USER_ROLE.admin), 
   CategoryControllers.deleteCategory);

// update an Category
router.patch(
  "/:id",
  // auth(USER_ROLE.admin),
  ValidateRequest(categoryValidations.updateCategoryValidationSchema),
  CategoryControllers.updateCategory
);


 export const CategoryRoutes = router;
