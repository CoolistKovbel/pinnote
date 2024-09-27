"use client";

import Image from "next/image";
import Link from "next/link";

import { useModal } from "../hooks/use-modal-store";
import { getContractDetails } from "../lib/web3";

interface ProfileSectionProp {
  user: any;
  recentGroupPins: any;
  recentSidePins: any;
  id?: any;
  pinGroupValid: any;
}

const ProfileSection = ({
  user,
  recentGroupPins,
  recentSidePins,
  id,
  pinGroupValid,
}: ProfileSectionProp) => {
  const { onOpen } = useModal();

  console.log(pinGroupValid, "dont think ping group");

  let recentCompletedPins: any = [];

  const pinGroup = JSON.parse(pinGroupValid) || undefined;

  // Completed pins
  if (pinGroup !== undefined) {
    console.log("there are pin gorups in the de client");
    recentCompletedPins = pinGroup?.payload[0]?.completedPins;
  }

  const handleCreateGroup = async () => {
    try {
      console.log("creating a group");

      onOpen("CreateGroup", user.userId as string);
    } catch (error) {
      console.log("Error creating group", error);
    }
  };

  const handleCreatePinGroup = async () => {
    try {
      console.log("creating a pin for the group");

      const gg = await getContractDetails();
      console.log(gg);

      onOpen("CreateGroupPin", user.userId as string);
    } catch (error) {
      console.log("Error creating group", error);
    }
  };

  // ===========================

  const sendMessage = () => {
    console.log("checking inbox");
    try {
      const payload = {
        user: user.userId,
      };

      // use modal

      console.log(payload);
    } catch (error) {
      console.log("Error claiming tips", error);
    }
  };

  const handleTip = async () => {
    console.log("handling tip");
  };

  // ===========================

  return (
    <section className="p-6 w-full">
      <header className="w-[80%] mx-auto flex flex-wrap items-center justify-between">
        {/* user profile */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:flex-row">
          <div className="w-[150px] h-[150px] relative rounded-full overflow-hidden">
            <Image
              className="rounded-full"
              src={user.image ? `${user.image}` : "/3.png"}
              alt={`${user.username}'s profile`}
              layout="fill"
            />
          </div>

          <div className="mt-4 md:mt-0 md:ml-6">
            <h2 className="font-semibold text-xl">{user.username}</h2>

            <div className="mt-6 flex items-center gap-4">
              {user.sendMessage && (
                <button
                  className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
                  onClick={sendMessage}
                >
                  Send Message
                </button>
              )}

              {!id && (
                <Link
                  className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 relative"
                  href="/profile/inbox"
                >
                  view inbox
                  <span className="absolute -top-5 -right-3 p-2 rounded-full bg-[#222]">
                    1
                  </span>
                </Link>
              )}

              <button
                onClick={handleTip}
                className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Tip
              </button>
            </div>
          </div>
        </div>

        {/* user group profile */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <div className="w-full flex flex-col gap-4">
            <div className="bg-[#222] p-4 rounded-lg">
              <h3 className="flex items-start justify-between flex-col">
                Blockchain Account:{" "}
                <Link
                  href={`https://etherscan.io/address/${user.metaAddress}`}
                  className="text-sm hover:text-emerald-500"
                >
                  {user.metaAddress}
                </Link>
              </h3>
            </div>

            <div className="bg-[#222] p-4 rounded-lg">
              <h3 className="flex items-center justify-between">
                User Email: <span>{user.email}</span>
              </h3>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-4 w-full justify-between">
            {/* make update here */}
            {pinGroup.payload.groupUserPart.length === 0 ? (
              <div>
                <h2>Sorry, no group</h2>
                <button
                  className="bg-[#231] font-bold p-4 rounded-lg hover:bg-[#111]"
                  onClick={handleCreateGroup}
                >
                  Create one
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 bg-[#222] p-2 drop-shadow-lg rounded">
                <Link
                  href={`/pin/group/${pinGroup.payload._id}`}
                  className="flex gap-4 "
                >
                  <div className="w-[100px] h-[100px] relative rounded-lg overflow-hidden">
                    <Image
                      src={
                        pinGroup?.payload?.groupUserPart[0]
                          ? `${pinGroup?.payload?.groupUserPart[0]?.image}`
                          : "/3.png"
                      }
                      alt={
                        pinGroup?.payload?.groupUserPart[0]?.groupDescription
                      }
                      fill
                    />
                  </div>

                  <div className="flex flex-col gap-4 items-center p-1">
                    <p className="p-2 font-bold rounded text-center">
                      {pinGroup?.payload?.groupUserPart[0]?.groupName}
                    </p>

                    <Link
                      href={`/pin/group/${pinGroup?.payload?.groupUserPart[0]?._id}`}
                      className="p-2 bg-[#555] hover:bg-[#333] rounded"
                    >
                      View
                    </Link>
                  </div>
                </Link>
              </div>
            )}

            <div className="bg-[#222] p-2 items-center rounded drop-shadow-lg">
              <h2 className="mb-2">Current Pin:</h2>

              <Link
                href={`/pin/${crypto.randomUUID()}`}
                className="text-blue-500 hover:underline bg-[#333] p-1 drop-shadow-lg"
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Make it better */}
      {pinGroup.payload === undefined ||
        pinGroup.payload === null ||
        (pinGroup.payload === "" && (
          <div className="flex flex-col items-center justify-center gap-6">
            <h2 className="text-4xl capitalize">Sorry there are no pins</h2>
            <p className="text-2xl font-bold">Create or join a group</p>

            <div className="flex items-center justify-around w-[50%]">
              <Link
                href="/pin/group"
                className="bg-[#231] font-bold p-4 rounded drop-shadow-lg hover:bg-[#111]"
              >
                Look for one
              </Link>
              <button
                className="bg-[#231] font-bold p-4 rounded drop-shadow-lg hover:bg-[#111]"
                onClick={handleCreateGroup}
              >
                Create one
              </button>
            </div>
          </div>
        ))}

      <article className="mt-10 bg-[#444] p-4 rounded drop-shadow-lg">
        <h2 className="text-4xl font-semibold mb-4 underline">
          Recent Group Pins:
        </h2>

        {/* {groupPins?.length > 0 ? (
          <div className="flex gap-4 overflow-x-auto">
            {groupPins.map((pin: any) => (
              <div
                key={pin.pinId}
                className="bg-[#222] p-4 rounded-lg flex-shrink-0 w-80"
              >
                <h3 className="font-bold text-lg">{pin.PinTitle}</h3>
                <p className="text-sm mt-2">{pin.PinDescription}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      pin.pinComplete === "completed"
                        ? "bg-green-600"
                        : "bg-yellow-600"
                    }`}
                  >
                    {pin.pinComplete}
                  </span>
                  <span className="text-sm">Votes: {pin.groupVotes}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-6">
            <h2 className="text-4xl capitalize">Sorry there are no pins</h2>
            <p className="text-2xl font-bold">Create a group pin</p>

            <div className="flex items-center justify-around w-[50%]">
              <Link
                href="/pin/group"
                className="bg-[#231] font-bold p-4 rounded drop-shadow-lg hover:bg-[#111]"
              >
                Look for one
              </Link>
              <button
                className="bg-[#231] font-bold p-4 rounded drop-shadow-lg hover:bg-[#111]"
                onClick={handleCreatePinGroup}
              >
                Create one
              </button>
            </div>
          </div>
        )} */}
      </article>

      <article className="mt-10 bg-[#444] p-4 rounded drop-shadow-lg">
        <h2 className="text-4xl font-semibold mb-4 underline">
          Recent Side Pins:
        </h2>

        <div className="flex gap-4 overflow-x-auto">
          {recentSidePins.map((pin: any) => (
            <div
              key={pin.pinId}
              className="bg-[#222] p-4 rounded-lg flex-shrink-0 w-80"
            >
              <h3 className="font-bold text-lg">{pin.pinTitle}</h3>
              <p className="text-sm mt-2">{pin.pinDescription}</p>
              <div className="mt-4 flex items-center justify-between">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    pin.pinComplete === "completed"
                      ? "bg-green-600"
                      : "bg-yellow-600"
                  }`}
                >
                  {pin.pinComplete}
                </span>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default ProfileSection;
