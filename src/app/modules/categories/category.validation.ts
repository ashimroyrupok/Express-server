import { z } from "zod";

// Create Category Schema
export const createCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Category name is required"), // Minimum length of 1
    image: z.string().min(1, "Category image is required"), // Minimum length of 1
  }),
});

// Update Category Schema
export const updateCategoryValidationSchema = z
  .object({
    body: z.object({
      name: z.string().optional(), // Optional field
      image: z.string().optional(), // Optional field
    }),
  })
  .partial();

export const categoryValidations = {
  createCategoryValidationSchema,
  updateCategoryValidationSchema,
};
