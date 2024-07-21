"use server";

import GroupNotifactionMessage from "@/app/components/profile/groupnotifcationmessage";
import ProfileSection from "@/app/components/profilesection";
import { getSession, userPinGroupCheck } from "@/app/lib/action";
import Link from "next/link";

const Page = async () => {
  const user = await getSession();

  const pinGroupValid: any = await userPinGroupCheck();

  const recentGroupPins = [
    {
      pinTitle: "wef",
      pinComplete: "in progress",
      groupVotes: 5,
      pinDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum ratione consequuntur accusantium laudantium alias excepturi vel minus! Possimus ratione veritatis qui explicabo minima ut nisi minus blanditiis debitis nobis?",
      pinCeated: Date.now(),
      pinId: crypto.randomUUID(),
    },
    {
      pinTitle: "wrgva",
      pinComplete: "completed",
      groupVotes: 3,
      pinDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum ratione consequuntur accusantium laudantium alias excepturi vel minus! Possimus ratione veritatis qui explicabo minima ut nisi minus blanditiis debitis nobis?",
      pinCeated: Date.now(),
      pinId: crypto.randomUUID(),
    },
    {
      pinTitle: "wrgva",
      pinComplete: "false",
      groupVotes: 1,
      pinDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum ratione consequuntur accusantium laudantium alias excepturi vel minus! Possimus ratione veritatis qui explicabo minima ut nisi minus blanditiis debitis nobis?",
      pinCeated: Date.now(),
      pinId: crypto.randomUUID(),
    },
  ];

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



  return (
    <main className="w-full min-h-screen bg-[#111] text-white">

      <header className="p-4 bg-gray-900 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Profile Page</h2>

        <nav className="w-[40%] flex items-center justify-around">
          <GroupNotifactionMessage />

          <Link
            href="/profile/update"
            className="bg-[#222] p-2 rounded-lg font-bold hover:bg-[#444]"
          >
            Update Profile
          </Link>
        </nav>

      </header>

      

      <ProfileSection
        user={user}
        pinGroupValid={JSON.stringify(pinGroupValid)}
        recentGroupPins={recentGroupPins}
        recentSidePins={recentSidePins}
      />


    </main>
  );
};

export default Page;
