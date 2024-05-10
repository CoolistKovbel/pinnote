import Image from "next/image";
import React from "react";

const Mint = () => {
  return (
    <div className="flex items-center justify-between w-full p-10 gap-4">

      <header className="bg-[#222] p-10 h-full w-[70%] rounded-lg drop-shadow-lg">
        <h2 className="text-4xl md:text-6xl font-bold mb-2">De Pinnote</h2>
        <p className="text-lg">
          With over 222 collections to choose, where you can see a possible
          pinnote moment, get yours today and be able to gain staking rewards as
          well as be able gain access to your own meow pal.
        </p>

        <div>
          <h2 className="mb-2">details:</h2>
          <p>Total minted: 0 / 222 </p>
        </div>

        <form className="p-5 w-full flex items-center justify-between">
          <input type="number" placeholder="amount" className="p-2 rounded-lg text-black" />
          <button className="bg-[#000] font-bold p-4 rounded-lg drop-shadow-lg">mint</button>
        </form>
      </header>


        {/* Make a carosal */}
      <div className="w-[300px] h-[300px] relative rounded-lg drop-shadow-lg ">
        <Image
          src="/2.png"
          alt="moment"
          fill
          className="rounded-lg drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default Mint;
