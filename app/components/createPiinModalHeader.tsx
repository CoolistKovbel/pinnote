"use client";

import React, { useState } from "react";
import { useModal } from "../hooks/use-modal-store";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CreatePinModelHeaderProps {
  user: any;
  pins: any;
  userGroup: any;
}

const CreatePinModelHeader = ({
  user,
  pins,
  userGroup,
}: CreatePinModelHeaderProps) => {
  const [searchOptions, setSearchOpetions] = useState<any>("");

  const { onOpen } = useModal();
  const [reverse, setReverse] = useState(false);
  const [searchPinSet, setSeatchPin] = useState<[]>([]);
  const pinsnotes = JSON.parse(pins).payload;
  const group = JSON.parse(userGroup).payload;

  const availblePins: any = [
    {
      id: crypto.randomUUID(),
      title: "Create a wireframe",
      description: "create a wireframe design of a website",
      completedBy: Date.now(),
      earn: "4 eth",
    },
    {
      id: crypto.randomUUID(),
      title: "Build a swap component",
      description: "create a swapping component feature",
      completedBy: Date.now(),
      earn: "4 eth",
    },
    {
      id: crypto.randomUUID(),
      title: "Help a componey with their site",
      description:
        "componey reports they need to orginze their data. organize in exel sheet",
      completedBy: Date.now(),
      earn: "4 eth",
    },
    {
      id: crypto.randomUUID(),
      title: "Create a full stack website",
      description: "Come up with a website i can use for my buisness",
      completedBy: Date.now(),
      earn: "4 eth",
    },
    {
      id: crypto.randomUUID(),
      title: "Create a wireframe",
      description: "create a wireframe design of a website",
      completedBy: Date.now(),
      earn: "4 eth",
    },
    {
      id: crypto.randomUUID(),
      title: "Build a swap component",
      description: "create a swapping component feature",
      completedBy: Date.now(),
      earn: "4 eth",
    },
    {
      id: crypto.randomUUID(),
      title: "Help a componey with their site",
      description:
        "componey reports they need to orginze their data. organize in exel sheet",
      completedBy: Date.now(),
      earn: "4 eth",
    },
    {
      id: crypto.randomUUID(),
      title: "Create a full stack website",
      description: "Come up with a website i can use for my buisness",
      completedBy: Date.now(),
      earn: "4 eth",
    },
  ];

  const createPin = () => {
    onOpen("CreatePin", user.userId as string);
  };

  // if user
  const CreatgroupPin = () => {
    onOpen("CreateGroupPin", user.userId as string);
  };

  const createPinGroup = () => {
    onOpen("CreateGroup", user.userId as string);
  };

  //   handle search pin
  const handleSearchPin = () => {
    try {
      console.log("handling searching pin");

      console.log("search iotions: ", searchOptions);

      //   const searchPin: any = availblePins.filter(
      //     (item) => item.title.toLowerCase() === searchOptions.toLowerCase()
      //   );

      const searchPin: any = availblePins.filter((item) =>
        item.title.toLowerCase().includes(searchOptions.toLowerCase())
      );

      console.log("search pin:: ", searchPin);

      setSeatchPin(searchPin);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const userHasGroup = group.groupUserPart.length > 0;
  const userGroupPins = group.theGroups > 0;

  // ------
  const router = useRouter();

  return (
    <>
      <div className="w-full h-fit gap-10 bg-[#444] flex items-center justify-center flex-col">
        <div className="w-[80%] flex items-center justify-between my-5 p-4">
          {user.isLoggedIn && (
            <div className="w-[50%] flex items-center gap-5 ">
              <button
                onClick={createPin}
                className="p-3 bg-[#222] hover:bg-[#555] rounded drop-shadow-lg hover:font-bold text-center"
              >
                Create Pin
              </button>

              <div>
                {userGroupPins ? (
                  <div>
                    <button
                      onClick={CreatgroupPin}
                      className="p-3 bg-[#222] hover:bg-[#555] rounded drop-shadow-lg hover:font-bold text-center w-full"
                    >
                      Create Pin for the Group
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={createPinGroup}
                      className="p-3 bg-[#222] hover:bg-[#555] rounded drop-shadow-lg hover:font-bold text-center"
                    >
                      Create PinGroup
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          <input
            type="text"
            placeholder="Search pins"
            className="p-3 bg-[#222] drop-shadow-lg border-4 border-red-500 rounded outline-none"
            value={searchOptions}
            onChange={(e) => setSearchOpetions(e.target.value)}
          />

          <button
            onClick={handleSearchPin}
            className="bg-[#555] p-2 font-bold drop-shadow-lg rounded uppercase"
          >
            click
          </button>
        </div>

        {/*  new group highligher belt */}
        <div className="w-full bg-[#111] ">
          <div className="bg-[#999] w-[60%] my-10 mx-auto p-2 flex gap-4 items-center justify-center bg-[#000] p-4 flex-row-reverse  ">
            {group.theGroups.map((item) => (
              <div
                key={crypto.randomUUID()}
                className="w-[100px] bg-[#222] p-2 relative rounded drop-shadow-lg"
              >
                <div className="relative w-[42px] h-[42px] ">
                  <Image src="/3.png" alt="group image" fill />
                </div>
                <h2 className="absolute -top-3 -right-3 text-[8px] p-1 bg-[#322] rounded">
                  <Link href={`/pin/${item._id}`}>{item.groupName}</Link>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="w-full flex items-center flex-wrap h-[800px] gap-5 overflow-auto justify-around p-5">
        <div className="flex items-center flex-wrap justify-center w-[80%] bg-[#222] p-10 gap-10">
          <header className="w-[80%] flex items-center  justify-around  bg-[#444] p-2 drop-shadow-lg">
            <button
              onClick={() => router.push(`/pin&pins='"allPins"`)}
              className="text-[10px] bg-[#555] p-1 drop-shadow-lg rounded font-bold hover:bg-[#333]"
            >
              View Pins
            </button>
            <button
              onClick={() => router.push(`/pin&pins='"groupPins"`)}
              className="text-[10px] bg-[#555] p-1 drop-shadow-lg rounded font-bold hover:bg-[#333]"
            >
              Group Pins
            </button>
          </header>

          {pinsnotes.map((item: any) => (
            <div
              key={crypto.randomUUID()}
              className="w-[300px] h-[680px] p-2 bg-[#333] drop-shadow-lg rounded flex flex-col items-center justify-between"
            >
              <header className="p-4">
                <h2 className="text-3xl text-center">{item?.title}</h2>
                <p className="text-[15px] p-2">{item?.description}</p>
              </header>

              <div className="flex items-center flex-col md:flex-row flex-wrap w-full h-full  gap-10 bg-[#111] p-2 drop-shadow-lg rounded">
                <div className="w-full md:w-[90%] mx-auto  flex justify-between gap-4 flex-col md:flex-row p-2 bg-[#555] text-[10px] text-center">
                  <p className="flex item-center justify-between flex-col">
                    <span className="text-xl">Status:</span>
                    <span
                      className={
                        item?.status === "COMPLETED"
                          ? "bg-emerald-500 p-2 text-[8px]"
                          : "bg-[#000] p-2 text-[8px]"
                      }
                    >
                      {item?.status}
                    </span>
                  </p>

                  <p className="flex item-center justify-between flex-col">
                    Complete By:{" "}
                    <span>{moment(item?.date).format("MMMM Do YYYY")}</span>
                  </p>

                  <Link
                    href={`/pin/${item?._id}`}
                    className="bg-[#222] hover:bg-[#444] p-2 text-[10px]"
                  >
                    view pinnote
                  </Link>
                </div>

                <div className="w-full md:w-[80%]  mx-auto  p-1 bg-[#555]">
                  <div className="flex items-center justify-center w-full h-full  gap-4 flex-col ">
                    {reverse ? (
                      <Link
                        href={`/profile/${item.owner?._id}`}
                        className="p-1 flex items-center justify-center flex-col gap-2  bg-[#222] rounded drop-shadow-lg"
                      >
                        <Image
                          src="/3.png"
                          alt="owner"
                          width={82}
                          height={82}
                        />
                        <p className="text-[10px] p-1 bg-[#222]">
                          {item.owner?.username}
                        </p>
                      </Link>
                    ) : (
                      <Link
                        href={`/pin/group/${item._id}`}
                        className="p-3 flex items-center bg-[#222] flex-col gap-2 rounded drop-shadow-lg"
                      >
                        <Image
                          src="/3.png"
                          alt="owner"
                          width={82}
                          height={82}
                        />
                        <p className="text-[10px] p-1 bg-[#222] drop-shadow-lg">
                          smile nehva
                        </p>
                      </Link>
                    )}

                    <button
                      onClick={() => setReverse((prev) => !prev)}
                      className="text-[10px] bg-[#222] p-1 drop-shadow-lg rounded font-bold hover:bg-[#333]"
                    >
                      reverse
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CreatePinModelHeader;
