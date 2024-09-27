import mongoose from "mongoose";
import { User } from "./User";
import { Pin } from "./Pin";

export interface IGroupPin {
  PinTitle: string;
  PinDescription: string;
  SelectedGroup: any;
  image: string;
  // -----
  groupVotes: any;
  PinRequestor: any;
  // -----
  pinProgress: any;
}

// TODO: Make it better......

const GroupPinSchema = new mongoose.Schema<IGroupPin>(
  {
    PinTitle: {
      type: String,
    },
    PinDescription: {
      type: String,
    },
    SelectedGroup: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Pin,
    },
    image: {
      Type: String,
    },
    groupVotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
      },
    ],
    PinRequestor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
   
  },
  { timestamps: true }
);

let GroupPinModel: mongoose.Model<IGroupPin>;

try {
  // Try to retrieve an existing model
  GroupPinModel = mongoose.model<IGroupPin>("GroupPin");
} catch (e) {
  // If the model doesn't exist, define it
  GroupPinModel = mongoose.model<IGroupPin>("GroupPin", GroupPinSchema);
}

export const GroupPin = GroupPinModel;
