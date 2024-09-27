import mongoose from "mongoose";

export interface IUser {
  username: string;
  email: string;
  password: string;
  preference: string;
  image: string;
  role: string;
  isPro: boolean;
  metaAddress: string;
  sig: string;
  description: string;
}

// TODO: Make it better......

const UserSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      min: 4,
      max: 24,
      unique: true,
    },
    email: {
      type: String,
    },
    description: {
      type: String,
    },
    preference: {
      type: String,
    },
    image: {
      type: String,
    },
    metaAddress: {
      type: String,
      unique: true,
      required: true,
    },
    sig: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      default: "USER",
      enum: ["USER", "ADMIN", "CAPTAIN"],
    },
    isPro: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

let UserModel: mongoose.Model<IUser>;

try {
  // Try to retrieve an existing model
  UserModel = mongoose.model<IUser>("User");
} catch (e) {
  // If the model doesn't exist, define it
  UserModel = mongoose.model<IUser>("User", UserSchema);
}

export const User = UserModel;
