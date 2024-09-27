"use server";

import SinglePinSection from "@/app/components/pinpoint/single-pin-section";
import { getPinGroupByID, getSession, pinnoteByID } from "@/app/lib/action";
import { SessionData } from "@/app/lib/dictionary";
import { IronSession } from "iron-session";

const Page = async ({ params }: { params: { id: string } }) => {
  const pinGroup = await getPinGroupByID(params.id as string);
  const slowLife = await pinnoteByID(params.id);
  const user: IronSession<SessionData> = await getSession();

  return (
    <main className="w-full min-h-screen">
      <SinglePinSection
        pinGroup={JSON.stringify(pinGroup)}
        pin={slowLife.payload}
        user={user}
      />
    </main>
  );
};

export default Page;
