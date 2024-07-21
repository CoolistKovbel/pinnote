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

  console.log("hanlding pins", pinsnotes)
  console.log("group", group)

  const createPin = () => {
    onOpen("CreatePin", user.userId);
  };

  const createPinGroup = () => {
    onOpen("CreateGroup");
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

  return (
    <>
      <div className="w-full h-[100px] p-4 bg-[#444] flex items-center justify-center">
      
        <div className="w-[80%] flex items-center justify-between mx-auto">
     
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

      </div>

      <section className="w-full flex items-center flex-wrap h-[800px] gap-5 overflow-auto justify-around p-5">

        <div className="flex items-center flex-wrap justify-between w-full gap-5">
           {
             pinsnotes.map((item: any) => (
              <div
                key={crypto.randomUUID()}
                className="w-[300px] h-[300px] p-2 bg-[#333] drop-shadow-lg rounded flex flex-col items-center justify-between"
              >

                <header className="p-4">
                  <h2 className="text-2xl text-center">{item?.title}</h2>
                  <p className="text-sm p-2">{item?.description}</p>
                </header>

                <div className="flex items-center gap-5">

                  <div className="w-[50%] p-2 bg-[#555] text-[10px] text-center">
                    <p className="flex item-center justify-between flex-col">
                      <span className="text-2xl">Status:</span>
                      <span
                        className={
                          item?.status === "COMPLETED"
                            ? "bg-emerald-500 p-2"
                            : "bg-[#000] p-2"
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

                  <div className="w-[50%] p-1 bg-[#555]">

                    <div className="flex items-center gap-4 flex-col">

                      <Link href={`/profile/${item.owner?._id}`}>
                        <Image
                          src={item.owner?.image && "/3.png"}
                          alt="owner"
                          width={32}
                          height={32}
                        />
                        <p className="text-[10px] p-1 bg-[#222]">
                          {item.owner?.username}
                        </p>
                      </Link>

                      {/* <Link href={`/pin/group/${item._id}`}>
                        <Image
                          src={group.payload.image}
                          alt="owner"
                          width={32}
                          height={32}
                        />
                        <p className="text-[10px] p-1 bg-[#222]">
                          {group.payload.groupName}
                        </p>
                        
                      </Link> */}

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
