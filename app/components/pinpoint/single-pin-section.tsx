"use client";

import { HandkeAcceptPin } from "@/app/lib/action";
import { SessionData } from "@/app/lib/dictionary";
import { IronSession } from "iron-session";

interface SinglePinSectionProps {
  pinGroup: any;
  pin: any;
  user: IronSession<SessionData>;
}

const SinglePinSection = ({ pinGroup, pin, user }: SinglePinSectionProps) => {
  console.log("pingroup that is from the id", pin);

  const handleSoloPinAccept = async () => {
    try {
      console.log("handling pins", pin._id);

      return {
        status: "success",
        payload: "",
      };
    } catch (error) {
      console.log("error");
      return {
        status: "error",
        payload: error,
      };
    }
  };

  const handleGroupPinAccept = async () => {
    try {
      const gg = await HandkeAcceptPin(
        user.userId as string,
        pin._id as string
      );

      console.log(gg.payload);

      return {
        status: "success",
        payload: user,
      };
    } catch (error) {
      console.log("error");
      return {
        status: "error",
        payload: error,
      };
    }
  };

  return (
    <section>
      <header className="p-4 bg-[#111]">
        <h2 className="text-4xl font-bold mb-4">Single PinNote Note</h2>
        <p className="text-md text-gray-500">
          Looking for a group, find a group that needs a person or two and join.
          Once there are 5 people you will be able to start accepting and doing
          pins.
        </p>
      </header>

      <article className="relative p-10 flex flex-col gap-10">
        <header className="text-5xl">
          <h2>{pin?.title}</h2>
        </header>

        <div className="text-[20px]">
          <p>{pin?.description}</p>
        </div>

        <div className="flex items-center justify-between p-5 bg-[#555] rounded drop-shadow-lg">
          <div className="p-4 bg-[#444] w-[20%] text-center">
            <h3 className="text-2xl font-bold">PreReq</h3>

            <ul className="p-2 bg-[#444]  text-start ">
              <li className="p-2 rounded bg-[#222] my-2">Food</li>
              <li className="p-2 rounded bg-[#222] my-2">blanket</li>
              <li className="p-2 rounded bg-[#222] my-2">lemonaid</li>
            </ul>
          </div>

          <div className="p-4 flex text-5xl flex-col gap-4 bg-[#444]">
            <button
              className="bg-[#222] p-2  hover:bg-[#111] rounded"
              onClick={handleSoloPinAccept}
            >
              Solo
            </button>

            <button
              className="bg-[#222] p-2  hover:bg-[#111] rounded"
              onClick={handleGroupPinAccept}
            >
              Group Up
            </button>
          </div>
        </div>

        <p className="absolute p-4 bg-[#222] rounded font-bold top-5 right-5">
          {pin?.status}
        </p>
      </article>
    </section>
  );
};

export default SinglePinSection;
