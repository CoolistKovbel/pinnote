"use client";

import React, { useState } from "react";
import { useModal } from "../hooks/use-modal-store";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

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

  console.log("this is the user in the pin page", user);
  console.log("hanlding pins", pinsnotes);
  console.log("group", group);
  console.log(
    "user in the pin gorup",
    group.filter((item: any) => item.groupMemebers.includes(user.userId))
  );

  return (
    <>
      <div className="w-full h-fit gap-10 bg-[#444] flex items-center justify-center flex-col">
        <div className="w-[80%] flex items-center justify-between mx-auto p-4">
          {user.isLoggedIn && (
            <div className="w-[50%] flex items-center gap-5 ">
              <button
                onClick={createPin}
                className="p-3 bg-[#222] hover:bg-[#555] rounded drop-shadow-lg hover:font-bold text-center"
              >
                Create Pin
              </button>

              <button
                onClick={createPinGroup}
                className="p-3 bg-[#222] hover:bg-[#555] rounded drop-shadow-lg hover:font-bold text-center"
              >
                Create PinGroup
              </button>
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
        <div className="w-full flex gap-4 items-center justify-center bg-[#000] p-4 flex-row-reverse">
          {group.map((item) => (
            <div
              key={crypto.randomUUID()}
              className="w-[100px] bg-[#222] p-2 relative"
            >
              <div className="relative w-[42px] h-[42px] ">
                <Image src="/3.png" alt="group image" fill />
              </div>
              <h2 className="absolute -top-3 -right-3 text-[8px] p-1 bg-[#322]">{item.groupName}</h2>
            </div>
          ))}
        </div>
      </div>

      <section className="w-full flex items-center flex-wrap h-[800px] gap-5 overflow-auto justify-around p-5">
        <div className="flex items-center flex-wrap justify-between w-[80%] bg-[#222] p-10 gap-5">
          {pinsnotes.map((item: any) => (
            <div
              key={crypto.randomUUID()}
              className="w-[300px] h-[300px] p-2 bg-[#333] drop-shadow-lg rounded flex flex-col items-center justify-between"
            >
              <header className="p-4">
                <h2 className="text-2xl text-center">{item?.title}</h2>
                <p className="text-sm p-2">{item?.description}</p>
              </header>

              <div className="flex items-center gap-5 bg-[#222] p-2 drop-shadow-lg rounded">
                <div className="w-[50%] h-full p-2 bg-[#555] text-[10px] text-center">
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
                </div>

                <div className="w-[50%] h-full p-1 bg-[#555]">
                  <div className="flex items-center gap-4 flex-col ">
                    {reverse ? (
                      <Link
                        href={`/profile/${item.owner?._id}`}
                        className="p-1 flex items-center justify-center flex-col gap-2"
                      >
                        <Image
                          src="/3.png"
                          alt="owner"
                          width={32}
                          height={32}
                        />
                        <p className="text-[10px] p-1 bg-[#222]">
                          {item.owner?.username}
                        </p>
                      </Link>
                    ) : (
                      <Link
                        href={`/pin/group/${item._id}`}
                        className="p-1 flex items-center justify-center flex-col gap-2"
                      >
                        <Image
                          src="/3.png"
                          alt="owner"
                          width={32}
                          height={32}
                        />
                        <p className="text-[10px] p-1 bg-[#222]">smile nehva</p>
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
