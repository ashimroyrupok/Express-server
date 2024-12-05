import { model, Schema } from "mongoose";
import { TTest } from "./test.interface";

const testSchema = new Schema<TTest>({
  email: {
    type: String,
    required: true,
  },
  name: {
    required: true,
    type: String,
  },
});

export const Test = model<TTest>("test", testSchema);
