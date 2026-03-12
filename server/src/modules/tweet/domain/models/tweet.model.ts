import mongoose, { Schema } from "mongoose";
import type { ITweetDoc } from "../interfaces/tweet-doc.interface.js";

const tweetSchema = new Schema<ITweetDoc>(
  {
    _id: { type: String, required: true },
    content: { type: String, required: true },
    authorId: { type: String, required: true },
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

export const TweetModel = mongoose.model<ITweetDoc>("Tweet", tweetSchema);
