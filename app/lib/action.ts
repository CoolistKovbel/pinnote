"use server";

import { getIronSession } from "iron-session";
import { sendMail } from "./mail";
import { SessionData, defaultSession, sessionOptions } from "./dictionary";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import dbConnect from "./db";
import { User } from "../modals/User";
import { PinGroup } from "../modals/PinGroup";
import { Types } from "mongoose";
import { writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { Pin } from "../modals/Pin";

const hadleImageUpload = async (image: any) => {
  const fileBuffer = await (image as File).arrayBuffer();
  const buffer = Buffer.from(fileBuffer);

  const path = `${process.cwd()}/public/groupImage/${
    crypto.randomUUID() + image.name
  }`;

  await writeFile(path, buffer);

  return path.split(`${process.cwd()}/public`)[1];
};

export async function ContactEmail(
  prevState: string | object | undefined,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  try {
    await sendMail({
      to: process.env.SMTP_EMAIL as string,
      name: data.name as string,
      subject: data.subject as string,
      content: data.content as string,
    });

    return {
      message: `${data.name} your message has been sent, if you cant wait... call`,
    };
  } catch (error) {
    console.log(error);
    return { message: "I am sorry but the request failed.... you got denied" };
  }
}

export const getSession = async () => {
  const cookieStore: any = cookies();
  const session = await getIronSession<SessionData>(
    cookieStore,
    sessionOptions
  );

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

export const login = async (payload: any) => {
  const resst: any = JSON.parse(payload);

  try {
    const currentSession = await getSession();

    await dbConnect();

    const userExists: any = await User.find({
      metaAddress: resst.nameValue,
    }).lean();

    console.log(userExists, "user exists");

    if (userExists.length > 0 && userExists.sig === resst.signature) {
      console.log("user found");
      // if user exist sign user in
      currentSession.isLoggedIn = true;
      currentSession.username = userExists[0].username as string;
      currentSession.image = userExists[0].image;
      currentSession.email = userExists[0].email;
      currentSession.isPro = userExists[0].isPro;
      currentSession.role = userExists[0].role;
      currentSession.userId = userExists[0]._id as Types.ObjectId;
      currentSession.metaAddress = userExists[0].metaAddress;

      await currentSession.save();

      return {
        status: "success",
        payload: "",
      };
    } else {
      console.log("new user creating", resst.nameValue);
      // register user with account information

      const create = new User({
        metaAddress: resst.nameValue as string,
        sig: resst.signature as string,
        username: resst.username as string,
        email: resst.nameValue.slice(0, 9).concat("@email.com") as string,
      });

      currentSession.isLoggedIn = true;
      currentSession.isPro = create.isPro;
      currentSession.username = create.username;
      currentSession.metaAddress = create.metaAddress;
      currentSession.role = create.role;
      currentSession.userId = create._id as Types.ObjectId;

      await currentSession.save();

      await create.save();

      return {
        status: "success",
        payload: create,
      };
    }
  } catch (error) {
    console.log("error signing in", error);
    return {
      status: "error",
      payload: error,
    };
  }
};

export const metaLogin = async (signature: string, user: string) => {
  const currentSession = await getSession();
  try {
    await dbConnect();

    console.log("handling metaLogin");

    const userServer = await User.find({ sig: signature }).lean();

    if (userServer.length > 0) {
      currentSession.isLoggedIn = true;
      currentSession.username = userServer[0].username as string;
      currentSession.image = userServer[0].image;
      currentSession.email = userServer[0].email;
      currentSession.isPro = userServer[0].isPro;
      currentSession.role = userServer[0].role;
      currentSession.userId = userServer[0]._id;
      currentSession.metaAddress = userServer[0].metaAddress;

      await currentSession.save();
    } else {
      const create = new User({
        metaAddress: user as string,
        sig: signature as string,
        username: `${user.slice(0, 9)}...${user.slice(user.length - 9)}`,
        email: user.slice(0, 9).concat("@email.com") as string,
      });

      await create.save();

      currentSession.isLoggedIn = true;
      currentSession.isPro = create.isPro;
      currentSession.username = create.username;
      currentSession.metaAddress = create.metaAddress;
      currentSession.role = create.role;
      currentSession.userId = create._id;

      await currentSession.save();

      return {
        status: "success",
        payload: create,
      };
    }

    return {
      status: "success",
      payload: userServer,
    };
  } catch (error) {
    console.log("error user isnt vlaid", error);
    return {
      status: "error",
      payload: error,
    };
  }
};

export const userUpdate = async (formData: FormData) => {
  console.log("handleUserUpdate");
  const data: any = Object.fromEntries(formData);
  const currentUser = await getSession();

  try {
    await dbConnect();

    const currentServerUser = await User.findById(currentUser.userId).lean();

    const userUpload = await hadleImageUpload(data.userImage);

    const payloader = {
      username: data.username || currentServerUser?.username,
      email: data.email || currentServerUser?.email,
      description: data.description || currentServerUser?.description,
      image: userUpload || currentServerUser?.image,
      preference: data.userPreference || currentServerUser?.preference,
    };

    await User.findByIdAndUpdate(currentServerUser?._id, payloader);

    currentUser.username = data.username || currentUser.username;
    currentUser.email = data.email || currentUser.email;
    currentUser.image = userUpload || currentUser.image;
    //  currentUser.metaAddress =

    await currentUser.save();

    revalidatePath("/profile/update");

    return {
      status: "success",
      payload: payloader,
    };
  } catch (error) {
    console.log("errror counldn't update", error);
    return {
      status: "error",
      payload: error,
    };
  }
};

// Grab user by id from server
// params: id string
export const getUserById = async (id: string) => {
  try {
    await dbConnect();

    const user = await User.findById(id).lean();

    return {
      status: "success",
      payload: user,
    };
  } catch (error) {
    return {
      status: "error",
      payload: error,
    };
  }
};

// Handle pin
export const getAllPinGroups = async () => {
  console.log("grabbing all pin groups");
  try {
    await dbConnect();

    const pinGroups = await PinGroup.find().lean();

    console.log(pinGroups, "from the server");

    return {
      status: "success",
      payload: pinGroups,
    };
  } catch (error) {
    console.log("Error getting all pins", error);
    return {
      status: "error",
      payload: error,
    };
  }
};

// check if user is in group
export const userPinGroupCheck = async () => {
  console.log("checking to see if user is in a pingroup");
  const user = await getSession();

  try {
    await dbConnect();

    const pinGroup = await PinGroup.findOne({
      groupMemebers: user.userId,
    })
      .populate("groupMemebers")
      .lean();

    console.log(pinGroup, "the current users group");

    return {
      status: "success",
      payload: pinGroup,
    };
  } catch (error) {
    console.log("error trying to see if user in a group", error);
    return {
      status: "error",
      payload: error,
    };
  }
};

// handle group create in pin point
export const handleGroupCreate = async (userInpute: FormData) => {
  console.log("Creating a group");
  const data = Object.fromEntries(userInpute);

  // 

  try {
    await dbConnect();
    const deImage = await hadleImageUpload(data.groupImage);

    const newGroup = new PinGroup({
      groupName: data.groupName,
      owner: data.userId as string,
      groupDescription: data.groupDescription,
      image: deImage,
      groupMembers: [data.userId as string],
    });

    await newGroup.save();

    revalidatePath("/");

    return {
      status: "success",
      payload: newGroup,
    };

  } catch (error: any) {
    console.log("Error creating group", error);

    // Extract a meaningful error message
    let errorMessage = "An unknown error occurred";

    if (error.code === 11000) {
      errorMessage = `Duplicate error, group exists ${JSON.stringify(
        error.keyValue
      )}`;
    } else if (error.message) {
      errorMessage = error.message;
    }
    // TODO MAKE A BETTER ERROR MESSAGE
    return {
      status: "error",
      payload: { message: errorMessage },
    };
  }
};

// get pinGroup byID
export const getPinGroupByID = async (pinGroupId: string) => {
  console.log("pin gorup", pinGroupId);
  try {
    await dbConnect();

    const pinGroupdetails = await PinGroup.findById(pinGroupId).lean();

    return {
      status: "success",
      payload: pinGroupdetails,
    };
  } catch (error) {
    return {
      status: "error",
      payload: error,
    };
  }
};

// handlepin create
export const HandlePinCreate = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  try {
    await dbConnect();

    console.log("setting up pin");

    const ping = new Pin({
      owner: data.userId,
      title: data.pinName,
      description: data.pinDescription,
      pinCreationSigantion: data.signature,
      date: new Date(),
    });

    await ping.save();

    revalidatePath("/pin");

    return {
      status: "success",
      payload: ping,
    };
  } catch (error) {
    console.log("error", error);
    return {
      status: "error",
      payload: error,
    };
  }
};

export const HandleGetAllPins = async () => {
  try {
    await dbConnect();

    const allPins = await Pin.find({})
      .populate("owner")
      .populate("pinGroup")
      .lean();

    console.log(allPins, "All the pins");

    return {
      status: "success",
      payload: allPins,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      payload: error,
    };
  }
};

// update pin vote
export const HandlePinVote = async (dbId: string, userId: string) => {
  try {
    await dbConnect();

    const res = await Pin.findByIdAndUpdate(dbId, {
      $push: { votes: { userId } },
    }).lean();

    console.log(res);

    return {
      status: "success",
      payload: res,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      payload: error,
    };
  }
};

// handle group join

// handle group leave

// handle group pin status
