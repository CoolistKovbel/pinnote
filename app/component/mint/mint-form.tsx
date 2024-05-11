"use client"

import { mintNFT } from "@/app/lib/web3";
import { useFormState } from "react-dom";

const MintForm = () => {
  const [state, dispatch] = useFormState(mintNFT, undefined);




    console.log(state)

  return (
    <form action={dispatch} className="text-2xl">
      <input
        type="number"
        placeholder="amount of nfts"
        id="amountOfNFTs"
        name="amountOfNFTs"
        className="w-[10%] p-3 text-black "
      />
      <button className="p-3 bg-[#222] font-bold  hover:bg-emerald-500 bg-[#222] ml-2">mint</button>
    </form>
  );
};

export default MintForm;
