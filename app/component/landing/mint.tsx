"use client";

import { mintNFT } from "@/app/lib/web3";
import Image from "next/image";

const Mint = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log("handle submit", e.target.tradeNumber.value);

      await mintNFT(e.target.tradeNumber.value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between w-full p-10 gap-4 flex-col md:flex-row">

      <header className="bg-[#222] p-10 h-full w-full md:w-[75%] rounded-lg drop-shadow-lg ">
        <h2 className="text-4xl md:text-6xl font-bold mb-2">De Pinnote</h2>
        <p className="text-lg">
          With over 222 collections to choose, where you can see a possible
          pinnote moment, get yours today and be able to gain staking rewards as
          well as be able gain access to your own meow pal.
        </p>

        {/* get data from contract */}
        <div className="text-center p-4 bg-[#111] drop-shadow-lg rounded-lg mt-3">
          <p className="p-2 font-bold">details: Total minted: 0 / 222 </p>
          <p className="p-2 font-bold">0x Address: 0xE36C24D47b05037E33183570a86fb080f42f7415 </p>
        </div>
      </header>

      {/* Make a carosal */}
      <div className="w-[25%] rounded-lg drop-shadow-lg bg-[#222] p-10">
        <div className="w-[300px] h-[300px] mx-auto relative">
          <Image
            src="/2.png"
            alt="moment"
            fill
            className="rounded-lg drop-shadow-lg "
          />
        </div>

        <form
          className="p-5 w-full flex items-center justify-between bg-[#333] rounded-lg mt-4 drop-shadow-lg"
          onSubmit={handleSubmit}
        >
          <input
            type="number"
            placeholder="amount"
            className="p-2 rounded-lg text-black w-[40%]"
            id="tradeNumber"
            name="tradeNumber"
          />
          <button className="bg-[#000] font-bold p-4 rounded-lg drop-shadow-lg">
            mint
          </button>
        </form>
      </div>
    </div>
  );
};

export default Mint;
