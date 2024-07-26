import mongoose from "mongoose";
import { Pin } from "./Pin";
import { User } from "./User";

export interface IPinGroup {
  groupName: string;
  groupDescription: string;
  image: string;
  isPro: boolean;
  groupMemebers: any;
  owner: any;
  // -----
  groupPins: any;
  recentPin: any;
  completedPins: any;
}

// TODO: Make it better......

const PinGroupSchema = new mongoose.Schema<IPinGroup>(
  {
    groupName: {
      type: String,
      min: 4,
      max: 24,
      unique: true,
    },
    recentPin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Pin,
    },
    completedPins: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Pin,
      },
    ],
    groupPins: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Pin,
      },
    ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    groupDescription: {
      type: String,
    },
    image: {
      type: String,
    },
    groupMemebers: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      validate: {
        validator: function (value: mongoose.Schema.Types.ObjectId[]) {
          return value.length <= 5;
        },
        message: "Group members cannot exceed 5 users.",
      },
      required: true,
    },
    isPro: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

let PinGroupModel: mongoose.Model<IPinGroup>;

try {
  // Try to retrieve an existing model
  PinGroupModel = mongoose.model<IPinGroup>("PinGroup");
} catch (e) {
  // If the model doesn't exist, define it
  PinGroupModel = mongoose.model<IPinGroup>("PinGroup", PinGroupSchema);
}

export const PinGroup = PinGroupModel;
