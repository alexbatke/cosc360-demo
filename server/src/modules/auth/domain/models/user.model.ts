import mongoose, { Schema } from "mongoose";
import type { IUserDoc } from "../interfaces/user-doc.interface.js";

const userSchema = new Schema<IUserDoc>(
  {
    _id: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    createdAt: { type: String, required: true },
  },
  {
    toJSON: {
      transform(_doc, ret) {
        ret.id = ret._id;
        const result = ret as Record<string, unknown>;
        delete result._id;
        delete result.__v;
        return result;
      },
    },
  }
);

export const UserModel = mongoose.model<IUserDoc>("User", userSchema);
