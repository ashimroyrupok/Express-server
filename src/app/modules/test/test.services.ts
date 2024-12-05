import { TTest } from "./test.interface";
import { Test } from "./test.model";

const createTestIntoDB = async (payload: TTest) => {
  const result = await Test.create(payload);
  return result;
};

export const TestServices = {
  createTestIntoDB,
};
