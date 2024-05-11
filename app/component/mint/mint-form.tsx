"use client";

import { mintNFT } from "@/app/lib/web3";

const MintForm = () => {

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log("handle submieet", e.target.amountOfNFTs.value);

      await mintNFT(e.target.tamountOfNFTs.value as number);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="text-2xl" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="amount of nfts"
        id="amountOfNFTs"
        name="amountOfNFTs"
        className="w-[10%] p-3 text-black "
      />
      <button className="p-3 bg-[#222] font-bold  hover:bg-emerald-500 bg-[#222] ml-2">
        mint
      </button>
    </form>
  );
};

export default MintForm;
