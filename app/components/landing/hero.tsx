import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {

    

  return (
    <div className="bg-[#111] p-10 flex items-center justify-center w-full h-[700px] overflow-auto">

      <div className="flex items-center gap-5 justify-around flex-col md:flex-row w-full">

        <div className="w-[70%] flex items-start flex-col gap-5 text-center md:text-left ">
          <h2 className="text-4xl md:text-6xl font-bold">Welcome to PinNote</h2>
          <p className="text-lg">
            The place to gain experience working with group to develop real world applications for clients and memebers.
          </p>
          <Link
            href="/about"
            className="bg-[#333] w-full md:w-[10%] text-center hover:bg-[#222] p-2 drop-shadow-lg rounded font-bold"
          >
            Learn more
          </Link>
        </div>

        <div className="w-[300px] h-[300px] relative bg-[#222] text-center rounded-lg">
          <Image
            src="/pinote-log-1.png"
            alt="nft"
            fill
            className="rounded-lg drop-shadow-lg"
          />
        </div>

      </div>

    </div>
  );
};

export default Hero;
