import { Model } from "mongoose";

export type TProduct = {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  images: string[];
  isDeleted: boolean;
};

export interface IProductModel extends Model<TProduct> {
  isProductExistsById(_id: string): Promise<TProduct | null>;
}
