import type { IUser } from "../types/index.js";

export interface IUserDoc extends IUser {
  _id: string;
}
