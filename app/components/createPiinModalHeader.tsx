"use client";

import React, { SetStateAction, useEffect, useState } from "react";
import { useModal } from "../hooks/use-modal-store";
import Link from "next/link";
import moment from "moment";
import Spinner from "./ui/spinner"
import { HandleGetAllPins } from "../lib/action";

interface CreatePinModelHeaderProps {
  user: any;
}

const CreatePinModelHeader = ({ user }: CreatePinModelHeaderProps) => {
  const [searchOptions, setSearchOpetions] = useState<any>("");
  const [searchPinSet, setSeatchPin] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState(false)
  const { onOpen } = useModal();

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

  const setPin = async () => {
    const res:any = await HandleGetAllPins()
    setIsLoading(true)
    setSeatchPin(res.payload)
    setIsLoading(false)
  };

  useEffect(() => {
    setPin();
    console.log("pinning all")
    return () => {}
  }, [isLoading]);

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

      {
        isLoading ? (
          <Spinner />
        ) : (
            <div>
              {
                searchPinSet?.map((item:any) => (
                  <div key={crypto.randomUUID()} className="w-[300px] h-[200px] p-2 bg-[#333] drop-shadow-lg rounded">
                    <h2 className="text-2xl">{item.title}</h2>
                    <p className="text-sm">{item.description}</p>
                    <div>
                      <p>Status: <span className={item.status === "COMPLETED" ? "bg-emerald-500 p-4" : "bg-[#000] p-4"}>{item.status}</span></p>
                      <p>Complete By: <span>{moment(item.date).format('YYYY-MM-DD HH:mm:ss')}</span></p>
                    </div>
                  </div>
                ))
              }
            </div>
        )
      }

      </section>

    </>
  );
};

export default CreatePinModelHeader;
