import { Model, Types } from "mongoose";

export type TProduct = {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: Types.ObjectId ;
  image: string;
  isDeleted: boolean;
};

export interface IProductModel extends Model<TProduct> {
  isProductExistsById(_id: string): Promise<TProduct | null>;
}
