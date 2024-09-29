"use client";

import { getContractDetails, mintNFT } from "@/app/lib/web3";
import Link from "next/link";
import { useEffect, useState } from "react";

const MintSection = () => {
  const [contractDetails, setContractDetails] = useState<any>({});

  const handleMint = async (e: any) => {
    e.preventDefault();

    try {
      console.log("jand ling mint");

      const amount = e.target.amountMinted.value;

      await mintNFT(amount);

    } catch (error) {
      console.log("Error ahdnling mint", error);
    }
  };

  useEffect(() => {
    const gg = async () => {
      const res = await getContractDetails();

      if (res.status === "success") {
        setContractDetails(res.payload);
      }
    };

    gg();
  }, []);

  return (
    <section className="p-10 bg-[#666]">

      <h2 className="text-4xl font-bold text-center mb-10 uppercase">
        Get your ERC-721 Now
      </h2>

      <div className="flex items-center justify-between w-[80%] mx-auto p-4 flex-col md:flex-row gap-4">

        <div className=" w-full md:w-[30%] p-4 flex flex-col gap-5 bg-[#444] drop-shadow-lg rounded">
          <h3 className="w-full flex items-center justify-between bg-[#000] p-2 font-bold">
            PinNote Collection <span>{contractDetails.tokenSymbol}</span>
          </h3>
          <h3 className="w-full flex items-start gap-2 justify-between flex-col">
            Token Address:{" "}
            <Link
              href="https://etherscan.io/token/0x3336debc102ce50a707cf8df8c626ab338d55539"
              target="_blank"
              className="bg-[#444] p-2 text-[10px] text-center drop-shadow-lg rounded hover:bg-[#413]"
            >
              0x3336deBc102ce50a707CF8Df8c626aB338D55539
            </Link>
          </h3>
          <h3 className="w-full flex items-center justify-between">
            Tokens obtainend: <span>{contractDetails.tokenSupply}/222</span>
          </h3>
          <h3 className="w-full flex items-center justify-between">
            Token Price: <span>0.042 eth</span>
          </h3>
          <h4 className="w-full flex items-center justify-between">
            <span className="p-2 bg-[#222] font-bold rounded">MAX</span> 5 per
            user
          </h4>
        </div>

        <form
          className="md:w-[20%] p-4 flex flex-col gap-4 bg-[#000] drop-shadow-lg rounded"
          onSubmit={handleMint}
        >
          <label htmlFor="amountMinted" className="flex flex-col">
            <span className="text-4xl font-bold text-center mb-4">
              Mint NOW
            </span>
            <input
              type="number"
              id="amountMinted"
              name="amountMinted"
              className="bg-[#222] text-white p-2"
            />
          </label>

          <button className="bg-[#222] font-bold rounded p-4">Mint</button>
        </form>

      </div>

    </section>
  );
};

export default MintSection;
