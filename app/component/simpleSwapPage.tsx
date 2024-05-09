"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { ethers } from "ethers";
import { swapToken } from "../lib/web3";

const SimpleSwapPage = () => {
  const [ETHAmount, setETHAmount] = useState<any>("");
  const [BDTAmount, setBDTAmount] = useState<any>("");
  const tokenPerEth = 10000;

  // Function to handle ETH amount change
  const handleETHChange = (e: any) => {
    const amount = parseFloat(e.target.value);
    setETHAmount(amount);

    // Calculate the equivalent NCT amount based on the exchange rate
    const calculatedNCTAmount =
      Number(ethers.utils.parseEther(amount.toString())) * tokenPerEth;

    setBDTAmount(ethers.utils.formatEther(calculatedNCTAmount.toString()));
  };

  const handleSwap = async (e: any) => {
    e.preventDefault();

    try {
      console.log("swapping tokens");

      await swapToken(ETHAmount);
    } catch (error) {
      console.log(error);
    }
  };

  const userStakedAmount = 100; // Assuming the user has staked 100 tokens
  const desiredTokens = 105;

  // Function to calculate the time required to earn a certain number of tokens
  function calculateTimeToEarnTokens(
    userStakedAmount: number,
    desiredTokens: number
  ) {
    // Constants
    const annualInterestRate = 5; // 5% annual interest rate
    const secondsInYear = 31536000; // Number of seconds in a year

    // Get the current timestamp
    const currentTimestamp = Math.floor(Date.now() / 1000);

    // Calculate the time duration (in seconds) required to earn the desired tokens
    const requiredRewards = desiredTokens - userStakedAmount; // Calculate the required additional rewards
    const requiredTimeSeconds =
      (requiredRewards * secondsInYear) /
      (userStakedAmount * annualInterestRate);

    // Calculate the estimated time to earn the desired tokens (in days)
    const requiredTimeDays = requiredTimeSeconds / (60 * 60 * 24); // Convert seconds to days

    return requiredTimeDays;
  }

  const timeToEarnTokens = calculateTimeToEarnTokens(
    userStakedAmount,
    desiredTokens
  );
  console.log(
    "Time required to earn additional tokens:",
    timeToEarnTokens,
    "days"
  );

  return (
    <div className="w-full md:w-[80%] mx-auto p-4 bg-[#444] drop-shadow-lg rounded-md ">
      <header className="mb-4">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-4xl font-bold mb-2">Token Swap</h2>
          <Link
            href="/trade"
            className="text-4xl hover:bg-[#111] text-center rounded-lg"
          >
            <i>📍</i>
          </Link>
        </div>
        <p className="text-gray-300 p-2">
          Convert your Native ETH token for our special Blossom Pollen Token
        </p>
      </header>

      {/* Swap form */}
      <form
        className="p-4 flex flex-col bg-[#222] rounded-md drop-shadow-lg gap-4 "
        onSubmit={handleSwap}
      >
        <label htmlFor="ETH" className="flex flex-col gap-2">
          <span className="bg-[#111] p-4 inline-block rounded-lg">
            Ethereum
          </span>
          <input
            type="number"
            id="ETH"
            name="ETH"
            placeholder="enter amount"
            step="0.00001"
            min="0.00015"
            max="30000"
            value={ETHAmount}
            onChange={handleETHChange}
            className="bg-[#111] p-2 text-white drop-shadow-lg rounded-md text-white font-mono"
          />
        </label>

        <i className="text-[4rem] p-2 mx-auto cursor-pointer">🔄</i>

        <label htmlFor="SLT" className="flex flex-col gap-2 ">
          <span className="bg-[#111] p-4 inline-block rounded-lg">
            Blossom Pollen Token
          </span>
          <input
            type="number"
            id="SLT"
            name="SLT"
            value={BDTAmount}
            disabled
            className="bg-[#111] p-2 text-white drop-shadow-lg rounded-md text-white font-mono"
          />
        </label>

        <button className="p-2 bg-[#999] rounded-lg font-bold uppercase hover:bg-[#444]">
          swap
        </button>
      </form>
    </div>
  );
};

export default SimpleSwapPage;
