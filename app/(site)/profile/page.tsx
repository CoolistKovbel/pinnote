"use server";

import GroupNotifactionMessage from "@/app/components/profile/groupnotifcationmessage";
import ProfileSection from "@/app/components/profilesection";
import {
  HandleGetAllPinsForUserClient,
  getSession,
  grabSpecficGroupPins,
  userPinGroupCheck,
} from "@/app/lib/action";
import Link from "next/link";
import mongoose from "mongoose"



const Page = async () => {
  // current user
  const user = await getSession();
  // group pin of user if joined or created any
  let groupPins: any = [];
  // recent pins from group.
  let recentCompletedGroupPins: any = [];
  // Recent side pins that user has took on or completed
  const userPinGroupsDetails: any = await userPinGroupCheck();
  //
  const userGroup = userPinGroupsDetails.payload;
  const userHasGroup = userGroup.length > 0
  const userId = new mongoose.Types.ObjectId(user.userId)

  // Grab pins from servers
  const pinsFromSerer = await HandleGetAllPinsForUserClient(userId)

  if (userGroup !== undefined) {
    groupPins = await grabSpecficGroupPins(userGroup?.groupUserPart[0]?._id);
    recentCompletedGroupPins = userGroup?.groupUserPart[0]?.completedPins;
  }

  const recentSidePins = [
    {
      pinTitle: "wef",
      pinComplete: "in progress",
      pinDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum ratione consequuntur accusantium laudantium alias excepturi vel minus! Possimus ratione veritatis qui explicabo minima ut nisi minus blanditiis debitis nobis?",
      pinCeated: Date.now(),
      pinId: crypto.randomUUID(),
    },
    {
      pinTitle: "wrgva",
      pinComplete: "completed",
      pinDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum ratione consequuntur accusantium laudantium alias excepturi vel minus! Possimus ratione veritatis qui explicabo minima ut nisi minus blanditiis debitis nobis?",
      pinCeated: Date.now(),
      pinId: crypto.randomUUID(),
    },
    {
      pinTitle: "wrgva",
      pinComplete: "false",
      pinDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum ratione consequuntur accusantium laudantium alias excepturi vel minus! Possimus ratione veritatis qui explicabo minima ut nisi minus blanditiis debitis nobis?",
      pinCeated: Date.now(),
      pinId: crypto.randomUUID(),
    },
    {
      pinTitle: "wef",
      pinComplete: "in progress",
      pinDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum ratione consequuntur accusantium laudantium alias excepturi vel minus! Possimus ratione veritatis qui explicabo minima ut nisi minus blanditiis debitis nobis?",
      pinCeated: Date.now(),
      pinId: crypto.randomUUID(),
    },
    {
      pinTitle: "wrgva",
      pinComplete: "completed",
      pinDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum ratione consequuntur accusantium laudantium alias excepturi vel minus! Possimus ratione veritatis qui explicabo minima ut nisi minus blanditiis debitis nobis?",
      pinCeated: Date.now(),
      pinId: crypto.randomUUID(),
    },
    {
      pinTitle: "wrgva",
      pinComplete: "false",
      pinDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum ratione consequuntur accusantium laudantium alias excepturi vel minus! Possimus ratione veritatis qui explicabo minima ut nisi minus blanditiis debitis nobis?",
      pinCeated: Date.now(),
      pinId: crypto.randomUUID(),
    },
  ];


  console.log(!Array.isArray(userPinGroupsDetails.payload.groupUserPart), "details")

  return (
    <main className="w-full min-h-screen bg-[#111] text-white">
      <header className="p-4 bg-gray-900 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Profile Page</h2>

        <nav className="w-[40%] flex items-center justify-around">
          <GroupNotifactionMessage data={userHasGroup} />

          <Link
            href="/profile/update"
            className="bg-[#222] p-2 rounded-lg font-bold hover:bg-[#444]"
          >
            Update Profile
          </Link>
        </nav>
        
      </header>

      <ProfileSection
        pinGroupValid={userHasGroup}
        user={user}
        userPinGroupsDetails={JSON.stringify(userPinGroupsDetails)}
        recentGroupPins={recentCompletedGroupPins}
        groupPins={groupPins.payload}
        recentSidePins={recentSidePins}
      />
    </main>
  );
};

export default Page;
