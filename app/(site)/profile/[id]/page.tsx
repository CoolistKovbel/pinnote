import UserProfile from "@/app/components/profile/user-profile";
import { userPinGroupCheck } from "@/app/lib/action";
import Link from "next/link";

const Page = async ({ params }: { params: { id: string } }) => {
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
    <div className="w-full min-h-screen">
      <header className="flex items-center justify-between p-5">
        <h2>PRofile of user..{JSON.stringify(params.id)}</h2>
        <nav>
          <Link href="/group/1f1f">View Group</Link>
          <Link href="/vie/1f1f">View </Link>
        </nav>
      </header>

      <UserProfile
        id={params.id}
        pinGroupValid={pinGroupValid}
        recentGroupPins={recentGroupPins}
        recentSidePins={recentGroupPins}
      />
    </div>
  );
};

export default Page;
