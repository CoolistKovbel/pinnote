"use server";

import { getAllPinGroups } from "@/app/lib/action";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  // Grabbing groups from server

  const groups: any = await getAllPinGroups();

  // -----s---l---o----w----
  console.log("-----s---l---o----w----");
  console.log(groups.payload[0], "m,omj nhjbhon");

  const SimpleCard = async () => { 
    return  groups.payload.map((item:any) => (
      <section key={crypto.randomUUID()} className=" w-[300px] h-[600px] bg-[#000] p-4 drop-shadow-lg">

        <div className="flex flex-col h-full justify-between item-center gap-4">

          <div className="w-[250px] h-[250px] relative mx-auto">
            <Image src={item.image} alt="group image" fill />
          </div>

          <header className="p-2">
            <h2 className="text-2xl font-bold">
              {item.groupName}
            </h2>
            <p>{item.groupDescription}</p>
          </header>

          <footer className="bg-[#777] p-4 drop-shadow-lg">
            <Link
              href={`/pin/group/${item.id}`}
              className="font-bold p-2 bg-[#222] rounded drop-shadow"
            >
              group
            </Link>
          </footer>

        </div>

      </section>
    ))
  }

  return (
    <main className="w-full min-h-screen">
      <header className="p-4 bg-[#111]">
        <h2 className="text-4xl font-bold mb-4">PinNote Groups</h2>

        <p className="text-md text-gray-500">
          Looking for a group, find a group that needs a person or two and join.
          Once there are 5 people you will be able to start accepting and doing
          pins.
        </p>
      </header>

      <div className="p-10">
        {/* galaray */}
        <div className="flex flex-wrap items-center justify-center w-full gap-5 bg-[#666]">
          <SimpleCard />
        </div>

      </div>
    </main>
  );
};

export default Page;
