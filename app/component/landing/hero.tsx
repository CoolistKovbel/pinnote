import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#222] w-full h-full md:h-[400px] p-2 flex items-center justify-around flex-col md:flex-row rounded-lg">
      
      <header className="w-full md:w-[50%] h-full bg-[#444] p-5 rounded-lg drop-shadow flex items-center justify-center flex-col gap-3 drop-shadow-lg">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Been having it rough?</h2>
        <p className="text-[13px] md:text-[20px]">
          If you feel like you are always in a panic and there are just so many
          things to do, you try do everything but it like its never good enough?
        </p>
        <p className="text-[13px] md:text-[20px]">
          We have a chat session avaiable for NFT Holders. Are you ready to
          mint?
        </p>
      </header>

      <div className="w-[300px] h-[300px] relative rounded-lg drop-shadow-lg ">
        <Image
          src="/logopin.png"
          alt="moment"
          fill
          className="rounded-lg drop-shadow-lg"
        />
      </div>

    </div>
  );
};

export default Hero;
