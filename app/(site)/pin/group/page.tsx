"use server";

import { getAllPinGroups } from "@/app/lib/action";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  // Grabbing groups from server

  const groups:any = await getAllPinGroups()




// -----s---l---o----w----
  console.log("-----s---l---o----w----")
  // console.log(await getAllPinGroups(), "m,omj nhjbhon");


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
        <section className="flex  flex-col justify-center item-center w-[300px] h-[600px] bg-[#444] p-4">
          
          <div className="w-[250px] h-[250px] relative mx-auto">
            <Image src={groups[0]?.payload?.image} alt="group image" fill />
          </div>

          <header className="p-2">
            <h2 className="text-2xl font-bold">{groups[0]?.payload?.title}</h2>
            <p>{groups[0]?.payload?.description}</p>
          </header>
          
          <footer className="bg-[#777] p-4 drop-shadow-lg">
            <Link
              href={groups[0]?.payload?.id}
              className="font-bold p-2 bg-[#222] rounded drop-shadow"
            >
              group
            </Link>
          </footer> 

        </section>

      </div>

    </main>
  );
};

export default Page;
