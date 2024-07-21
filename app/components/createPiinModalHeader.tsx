"use client";

import React, { useEffect, useState } from "react";
import { useModal } from "../hooks/use-modal-store";
import Link from "next/link";
import moment from "moment";

interface CreatePinModelHeaderProps {
  user: any;
}

const CreatePinModelHeader = ({ user }: CreatePinModelHeaderProps) => {
  const [searchOptions, setSearchOpetions] = useState<any>("");
  const [searchPinSet, setSeatchPin] = useState<[]>([]);
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
    onOpen("CreatePin");
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
    setSeatchPin(availblePins);
  };

  useEffect(() => {
    setPin();
  }, []);

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
        {searchPinSet.map((item: any) => (
          <div
            key={crypto.randomUUID()}
            className="w-[600px] h-[400px] bg-[#424] p-2 flex items-center justify-around rounded drop-shadow-lg flex-col md:flex-row"
          >
            <div className="md:w-[50%] h-full flex flex-col justify-around bg-[#222] p-4 drop-shadow-lg rounded">
              <h2 className="text-2xl capitalize text-center">{item.title}</h2>
              <p className="text-[18px] text-gray-500">{item.description}</p>
              <p className="bg-[#000] font-bold p-2 flex items-center justify-around rounded">
                <span className="font-bold uppercase">Earn:</span> {item.earn}
              </p>
            </div>

            <div className="md:w-[50%] text-center p-2">
              <h2 className="text-2xl mb-5">
                Complete by:{" "}
                {moment(item.completedBy).format("YYYY-MM-DD HH:mm:ss")}
              </h2>
              <Link
                href={`/pin/${item.id}`}
                className="text-gray-500 underline font-bold"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default CreatePinModelHeader;
