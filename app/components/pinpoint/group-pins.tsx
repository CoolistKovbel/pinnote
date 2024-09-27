"use client";

import Image from "next/image";
import Link from "next/link";

interface GroupPinProps {
  pinGroups: any;
}

const GroupPin = ({ pinGroups }: GroupPinProps) => {


  const groupsThatNeedPeople = pinGroups
    ? pinGroups?.filter((item: any) =>
        Object.values(item.members).some((member) => member === null)
      )
    : [];

  const groupsThatDontNeedPeople = pinGroups
    ? pinGroups?.filter((item: any) =>
        Object.values(item.members).every((member) => member !== null)
      )
    : [];

  const GroupCard = ({ group }: any) => {
    const memberList = Object.values(group.members).map(
      (member: any, index) => (
        <li key={index} className="text-gray-700">
          {member || "Empty Slot"}
        </li>
      )
    );

    const isFull = Object.values(group.members).every(
      (member) => member !== null
    );

    return (
      <article
        key={group.groupID}
        className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white text-black drop-shadow-lg"
      >
        <header className="flex items-center justify-around p-4">
          <div className="w-[100px] h-[100px] relative">
            <Image src={group.groupImage} alt={group.groupName} fill />
          </div>
          <h2 className="font-bold text-xl mb-2">{group.groupName}</h2>
        </header>

        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">{group.description}</p>
          <ul className="mt-4 space-y-1">{memberList}</ul>
        </div>

        <footer className="px-6 pt-4 pb-2 flex items-center justify-around">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{group.groupTag}
          </span>

          <Link
            href={`/group/${group.groupID}`}
            className="inline-block bg-gray-200 hover:bg-[#000] hover:text-yellow-500 px-3 py-1 text-md font-semibold text-gray-700"
          >
            {isFull ? "View" : "Join"}
          </Link>
        </footer>
      </article>
    );
  };

  return (
    <>
      {/* Groups looking for members */}
      <section className="bg-gray-100 overflow-auto h-[700px]">
        <header className="bg-[#000] p-3 text-center uppercase font-bold">
          <h2>Groups looking for members</h2>
        </header>

        <div className="flex flex-wrap justify-center p-4 w-[80%] mx-auto">
          {groupsThatNeedPeople.map((item: any) => (
            <GroupCard key={item.groupID} group={item} />
          ))}
        </div>
      </section>

      {/* Groups for motivation */}
      <section className="bg-gray-100 overflow-auto h-[700px]">
        
        <header className="bg-[#000] p-3 text-center uppercase font-bold">
          <h2>Well working groups</h2>
        </header>

        <div className="flex flex-wrap justify-center p-4 w-[80%] mx-auto">
          {groupsThatDontNeedPeople.map((item: any) => (
            <GroupCard key={item.groupID} group={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default GroupPin;
