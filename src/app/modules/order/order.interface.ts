import { Model } from "mongoose";
import { Types } from "mongoose";

type TProduct = {
  productId: string;
  price: number;
  quantity: number;
};
export type TOrder = {
  userId: Types.ObjectId;
  status: "pending" | "completed" | "cancel";
  phone: string;
  city: string;
  house: string;
  totalPrice: number;
  zipCode: number;
  isDeleted: boolean;
  products: TProduct[];
};

// isOrderExistsById interface for statics model
export interface IOrderModel extends Model<TOrder> {
  isOrderExistsById(_id: string): Promise<TOrder | null>;
}
