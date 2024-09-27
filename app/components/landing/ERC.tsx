"use client";

import { getContractDetailsForERC20, swapToken } from "@/app/lib/web3";
import { ethers } from "ethers";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ERCToken = () => {
  const [ETHAmount, setETHAmount] = useState<any>("");
  const [NCTAmount, setNCTAmount] = useState<any>("");
  const [contractDetails, setContractDetails] = useState<any>({});
  const tokenPerEth = 10000;

  // Function to handle ETH amount change
  const handleETHChange = (e: any) => {
    const amount = parseFloat(e.target.value);
    setETHAmount(amount);

    // Calculate the equivalent NCT amount based on the exchange rate
    const calculatedNCTAmount =
      Number(ethers.utils.parseEther(amount.toString())) * tokenPerEth;

    setETHAmount(amount * tokenPerEth);

    setNCTAmount(ethers.utils.formatEther(calculatedNCTAmount.toString()));
  };

  const tokenSwap = async (e: any) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement
    try {
      toast(`Swapping eth for ${e.target.tokenAmount.value} tokens`);
      // const gg = await swapToken(e.target.tokenAmount.value);
      // if(gg === "success"){
      //   toast(`eth swap succefully for ${e.target.tokenAmount.value} tokens`);
      // }
      form.reset()
    } catch (error) {
      console.log(error);
      toast(`An error accured when swaping`)
    }
  };

  useEffect(() => {
    const gg = async () => {
      const res = await getContractDetailsForERC20();

      if (res.status === "success") {
        setContractDetails(res.payload);
      }
    };

    gg();
  }, []);

  return (
    <div className="bg-[#111] p-10 flex items-center justify-around ">
      <div className="w-full flex items-center justify-around flex-col md:flex-row">
        
        <header className="w-full md:w-[45%]">

          <h2 className="text-5xl font-bold mb-4 text-center underline flex items-center justify-center gap-4">
            <span>{contractDetails.tokenName}</span>
            <span className="text-[15px] p-2 bg-[#555] rounded drop-shadow-lg">
              {contractDetails.tokenSymbol}
            </span>
          </h2>

          <p className="text-[15px] mb-8">
            This is a <strong>erc-20</strong> token that will be used throughout
            the site, you will be able to use it to send payments as well as
            stake and earn rewards.
          </p>

          <p className="flex flex-col gap-4 mb-4">
            <span className="text-2xl font-bold mb-2">
              Current Staking APY:
            </span>

            <Link
              href="/stake"
              className="bg-[#444] p-2 text-[18px] drop-shadow-lg rounded hover:bg-[#413] flex items-center justify-center gap-4 w-[50%] mx-auto"
            >
              <span>Stake Now</span>
              {contractDetails.annualInterest} %
            </Link>
          </p>

          <p className="flex flex-col gap-4">
            <span className="text-2xl font-bold mb-2">Contract Address:</span>
            <Link
              href="https://etherscan.io/token/0x3336debc102ce50a707cf8df8c626ab338d55539"
              target="_blank"
              className="bg-[#444] p-2 text-sm text-center drop-shadow-lg rounded hover:bg-[#413]"
            >
              0x3336deBc102ce50a707CF8Df8c626aB338D55539
            </Link>
          </p>
        </header>

        <div className="bg-[#222] p-10 rounded-lg mt-10 drop-shadow-lg">
          <h2 className="text-2xl font-bold mb-2">
            Total Supply: 100,000,000{" "}
          </h2>

          <p className="text-md text-center font-bold">
            Token Per Eth: {contractDetails.tokenPerEth}
          </p>

          <div className="w-[200px] h-[200px] relative mx-auto ">
            <Image src="/eoiarball.png" alt="token erc20 eoiarball" fill />
          </div>

          <form onSubmit={tokenSwap}>
            <p className="mb-2">Total token recieving: {ETHAmount}</p>

            <input
              type="number"
              placeholder="Enter token amount"
              step="0.00001"
              min="0.00015"
              max="100000"
              className="p-2 rounded-lg bg-[#111] w-full"
              id="tokenAmount"
              name="tokenAmount"
              onChange={handleETHChange}
            />

            <button className="bg-[#444] p-2 rounded-lg mt-2 w-full hover:bg-[#111]">
              swap
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ERCToken;
