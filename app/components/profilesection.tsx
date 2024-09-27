"use client";

import Image from "next/image";
import Link from "next/link";

import { useModal } from "../hooks/use-modal-store";
import { getContractDetails } from "../lib/web3";

interface ProfileSectionProp {
  userPinGroupsDetails: any;
  groupPins:any,
  user: any;
  recentGroupPins: any;
  recentSidePins: any;
  id?: any;
  pinGroupValid: any;
}

const ProfileSection = ({
  userPinGroupsDetails,
  groupPins,
  user,
  recentGroupPins,
  recentSidePins,
  id,
  pinGroupValid,
}: ProfileSectionProp) => {
  const { onOpen } = useModal();

  let recentCompletedPins: any = [];
  const pinGroup = {
    payload: "" 
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
          

        </div>
      </header>

      {/* Make it better */}


      <article className="mt-10 bg-[#444] p-4 rounded drop-shadow-lg">
        <h2 className="text-4xl font-semibold mb-4 underline">
          Recent Group Pins:
        </h2>


      </article>

      <article className="mt-10 bg-[#444] p-4 rounded drop-shadow-lg">
        <h2 className="text-4xl font-semibold mb-4 underline">
          Recent Side Pins:
        </h2>


      </article>

    </section>
  );
};

export default ProfileSection;
