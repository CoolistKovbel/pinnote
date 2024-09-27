"use server";

import { HandleGetAllPins, getPinGroupByID } from "@/app/lib/action";
import { Types } from "mongoose";
import Image from "next/image";

type PinGroupTypes = {
  payload: any;
  status: any;
};

const Page = async ({ params }: { params: { id: string } }) => {
  const pinFromGroups: PinGroupTypes = await HandleGetAllPins();
  const mongUserId = new Types.ObjectId(params.id);

  const filteredGroups = pinFromGroups?.payload.filter(
    (item: any) => item.owner._id === mongUserId
  );


  const group  = await getPinGroupByID(params.id)

  console.log(group.payload)

  return (
    <section className="w-full min-h-screen">

      <header className="p-4 bg-[#111]">
        <h2 className="text-4xl font-bold mb-4">PinNote Group</h2>
        <p className="text-md text-gray-500">
          Looking for a group, find a group that needs a person or two and join.
          Once there are 5 people you will be able to start accepting and doing
          pins.
        </p>
      </header>

      <article>
        <div className="w-[60%] mx-auto h-full bg-[#999] p-10 flex items-center flex-col justify-between gap-2">
          {pinFromGroups.payload &&
            pinFromGroups.payload.map((item: any) => (
              <div className="bg-[#444] w-full  p-3" key={crypto.randomUUID()}>
                <div className="w-[100px] h-[100px] relative">
                  <Image src={item.image} alt="image" fill />
                </div>

                <h2>{item.title}</h2>
                <h2>{item.description}</h2>
                <p>Status: {item.status}</p>
              </div>
            ))}
        </div>
          
          
          <div>
              Grep::::::::::
          </div>


      </article>

    </section>
  );
};

export default Page;
