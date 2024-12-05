import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/SendRespose";
import { TestServices } from "./test.services";


const createTestUser = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;

  const result = await TestServices.createTestIntoDB(req.body);

  sendResponse(res, {
    success: true,
    message: "Student is retrieved succesfully",
    statusCode: 200,
    data: result,
  });
});

 export const TestControllers = {
    createTestUser
}