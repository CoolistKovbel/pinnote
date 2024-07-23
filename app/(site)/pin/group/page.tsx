"use server";

import { getAllPinGroups } from "@/app/lib/action";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  // Grabbing groups from server

  const pinGroups: any = async () => {
    console.log("getting all groups");
    try {
      const gg = await getAllPinGroups();

      console.log(gg);

      // return [
      //   {
      //     groupName: "BigEggCheese",
      //     description:
      //       "We tackle hard problems and create modern full stack web applications in a jif",
      //     members: {
      //       slotA: "lyub12",
      //       slotB: "lyub24",
      //       slotC: "lyub6",
      //       slotD: null,
      //       slotE: null,
      //     },
      //     groupImage:
      //       "https://images.unsplash.com/photo-1720211370947-68088964ae6b?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      //     groupTag: "THAT",
      //     groupID: crypto.randomUUID(),
      //   },
      //   {
      //     groupName: "TechWizards",
      //     description:
      //       "We innovate and create groundbreaking technology solutions.",
      //     members: {
      //       slotA: "alice34",
      //       slotB: "bob56",
      //       slotC: "charlie78",
      //       slotD: "dave90",
      //       slotE: null,
      //     },
      //     groupImage:
      //       "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      //     groupTag: "INNOVATE",
      //     groupID: crypto.randomUUID(),
      //   },
      //   {
      //     groupName: "CodeMasters",
      //     description:
      //       "Masters of code, building robust and scalable applications.",
      //     members: {
      //       slotA: "eve12",
      //       slotB: "frank34",
      //       slotC: "grace56",
      //       slotD: "heidi78",
      //       slotE: "ivan90",
      //     },
      //     groupImage:
      //       "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      //     groupTag: "CODE",
      //     groupID: crypto.randomUUID(),
      //   },
      //   {
      //     groupName: "DevOpsGurus",
      //     description:
      //       "Expertise in DevOps, ensuring smooth and efficient operations.",
      //     members: {
      //       slotA: "jack12",
      //       slotB: "karen34",
      //       slotC: "leo56",
      //       slotD: null,
      //       slotE: null,
      //     },
      //     groupImage: "/3.png",
      //     groupTag: "DEVOPS",
      //     groupID: crypto.randomUUID(),
      //   },
      //   {
      //     groupName: "DataSciExperts",
      //     description:
      //       "Pioneers in data science, analyzing data to drive insights.",
      //     members: {
      //       slotA: "mike12",
      //       slotB: "nancy34",
      //       slotC: "oscar56",
      //       slotD: "paul78",
      //       slotE: null,
      //     },
      //     groupImage:
      //       "https://images.unsplash.com/photo-1553342060-4f94c0eb482b?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      //     groupTag: "DATA",
      //     groupID: crypto.randomUUID(),
      //   },
      //   {
      //     groupName: "BigEggCheese",
      //     description:
      //       "We tackle hard problems and create modern full stack web applications in a jif",
      //     members: {
      //       slotA: "lyub12",
      //       slotB: "lyub24",
      //       slotC: "lyub6",
      //       slotD: null,
      //       slotE: null,
      //     },
      //     groupImage:
      //       "https://images.unsplash.com/photo-1720211370947-68088964ae6b?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      //     groupTag: "THAT",
      //     groupID: crypto.randomUUID(),
      //   },
      //   {
      //     groupName: "TechWizards",
      //     description:
      //       "We innovate and create groundbreaking technology solutions.",
      //     members: {
      //       slotA: "alice34",
      //       slotB: "bob56",
      //       slotC: "charlie78",
      //       slotD: "dave90",
      //       slotE: null,
      //     },
      //     groupImage:
      //       "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      //     groupTag: "INNOVATE",
      //     groupID: crypto.randomUUID(),
      //   },
      //   {
      //     groupName: "CodeMasters",
      //     description:
      //       "Masters of code, building robust and scalable applications.",
      //     members: {
      //       slotA: "eve12",
      //       slotB: "frank34",
      //       slotC: "grace56",
      //       slotD: "heidi78",
      //       slotE: "ivan90",
      //     },
      //     groupImage: "/3.png",
      //     groupTag: "CODE",
      //     groupID: crypto.randomUUID(),
      //   },
      //   {
      //     groupName: "DevOpsGurus",
      //     description:
      //       "Expertise in DevOps, ensuring smooth and efficient operations.",
      //     members: {
      //       slotA: "jack12",
      //       slotB: "karen34",
      //       slotC: "leo56",
      //       slotD: null,
      //       slotE: null,
      //     },
      //     groupImage: "/3.png",
      //     groupTag: "DEVOPS",
      //     groupID: crypto.randomUUID(),
      //   },
      //   {
      //     groupName: "DataSciExperts",
      //     description:
      //       "Pioneers in data science, analyzing data to drive insights.",
      //     members: {
      //       slotA: "mike12",
      //       slotB: "nancy34",
      //       slotC: "oscar56",
      //       slotD: "paul78",
      //       slotE: null,
      //     },
      //     groupImage:
      //       "https://images.unsplash.com/photo-1553342060-4f94c0eb482b?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      //     groupTag: "DATA",
      //     groupID: crypto.randomUUID(),
      //   },
      // ];
    } catch (error) {
      console.log("Error getting pingroups", error);
      return [];
    }
  };

  const allPins = [
    {
      id: crypto.randomUUID(),
      title: "Janbalon",
      description: `            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            porro hic reprehenderit iure, fugiat assumenda provident quae
            voluptatem quasi officiis, laborum corrupti minus eveniet ut tempora
            quidem praesentium. Suscipit, labore?`,
      image: "/3.png",
    },
  ];

  console.log(pinGroups);

  return (
    <main className="w-full min-h-screen">
      <header className="p-4 bg-[#111]">
        <h2 className="text-4xl font-bold mb-4">PinNote Groups</h2>

        <p className="text-md text-gray-500">
          Looking for a group, find a group that needs a person or two and join.
          Once there are 5 people you will be able to start accepting and doing
          pins.
        </p>
      </header>

      {/* galaray */}
      <section className="flex flex-col justify-center item-center w-[300px] h-[600px] bg-[#444] p-4">
        <div className="w-[250px] h-[250px] relative mx-auto">
          <Image src={allPins[0].image} alt="group image" fill />
        </div>

        <header className="p-2">
          <h2 className="text-2xl font-bold">{allPins[0].title}</h2>
          <p>{allPins[0].description}</p>
        </header>

        <footer className="bg-[#111] p-4 drop-shadow-lg">
          <Link
            href={allPins[0].id}
            className="font-bold p-2 bg-[#222] rounded drop-shadow"
          >
            group
          </Link>
        </footer>
      </section>
    </main>
  );
};

export default Page;
