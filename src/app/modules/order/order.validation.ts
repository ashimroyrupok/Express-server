import z from "zod";



// create Booking validation schema
const createOrderValidationSchema = z.object({
  body: z.object({
    product: z.string({ required_error: "product is required" }),
    amount: z.number({
      required_error: "Amount is required",
      invalid_type_error: "Amount should be number",
    }),
  }),
});



// update Booking validation schema
// const updateOrderValidationSchema = z.object({
//   body: z.object({
//     vehicleInfo: bookingInfoValidationSchema.optional(),
//   }),
// });

export const OrderValidations = {
  createOrderValidationSchema,
  // updateOrderValidationSchema,
};
