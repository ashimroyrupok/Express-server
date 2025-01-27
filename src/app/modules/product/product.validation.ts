import { z } from "zod";

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty("Product name is required"),
    category: z.string().nonempty("Product category is required"),
    description: z.string().nonempty("Product description is required"),
    image: z.string().nonempty().min(1, "At least one image is required"),
    price: z
      .number()
      .min(0, "Price must be a positive number")
      .refine(
        (value) => Number.isFinite(value),
        "Price must be a valid number"
      ),
    stock: z
      .number()
      .min(0, "Stock must be a positive number")
      .refine((value) => Number.isInteger(value), "Stock must be an integer"),
  }),
});

const productUpdateValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty("Product name is required").optional(),
    category: z.string().nonempty("Product category is required").optional(),
    description: z
      .string()
      .nonempty("Product description is required")
      .optional(),
    image: z.string().nonempty().min(1, "At least one image is required"),
    price: z
      .number()
      .min(0, "Price must be a positive number")
      .refine((value) => Number.isFinite(value), "Price must be a valid number")
      .optional(),
    stock: z
      .number()
      .min(0, "Stock must be a positive number")
      .refine((value) => Number.isInteger(value), "Stock must be an integer")
      .optional(),
  }),
});

export const productValidations = {
  createProductValidationSchema,
  productUpdateValidationSchema,
};
