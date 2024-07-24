import mongoose from "mongoose";

export interface IPin {
  owner: any;
  title: string;
  description: string;
  PinTime: number;
  PinRate: number;
  date: string;
  transactionHash: string;
  pinCreationSigantion: string;

  status: string;
  votes: any;
  hasGroup: boolean;
  pinGroupID: any;
}

// TODO: Make it better......

const PinSchema = new mongoose.Schema<IPin>(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    date: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    pinCreationSigantion: {
      type: String,
    },
    transactionHash: {
      type: String || null,
    },
    status: {
      type: String,
      default: "NOTCOMPLETED",
      enum: ["NOTCOMPLETED", "COMPLETED", "INPROGRESS"],
    },
    hasGroup: {
      type: Boolean,
      default: false
    },
    pinGroupID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pin",
    },
    votes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

PinSchema.index({ owner: 1, pinCreationSigantion: 1 }, { unique: true });


let PinModel: mongoose.Model<IPin>;


try {
  // Try to retrieve an existing model
  PinModel = mongoose.model<IPin>("Pin");
} catch (e) {
  // If the model doesn't exist, define it
  PinModel = mongoose.model<IPin>("Pin", PinSchema);
}

export const Pin = PinModel;
