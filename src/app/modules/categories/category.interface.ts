import { Model } from "mongoose";

export type TCategory = {
  name: string;
  image: string;

};

export interface ICategoryModel extends Model<TCategory> {
  isCategoryExistsById(_id: string): Promise<TCategory | null>;
}