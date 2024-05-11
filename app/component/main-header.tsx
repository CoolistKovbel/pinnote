"use client"

import React, { useEffect, useState } from "react";
import { userOwns } from "../lib/web3";

const MainHeader = () => {
const [isHolder, setIsHolder] = useState(false)


  const checkUserNFT = async () => {
    try {

      console.log("checking to see if user has nftt")
      const owns = await userOwns()


      console.log(owns)


      if(!!owns) {
        setIsHolder(true)
      }


    } catch (error) {
      console.log(error)
    }
  }



  useEffect(() => {
    checkUserNFT()
  },[])

  return (
    <header className="bg-[#333] w-full flex items-center justify-around p-4 drop-shadow-lg rounded-lg mb-4">
      <h1 className="text-4xl font-bold bg-[#111] text-yellow-500 p-2 rounded-lg">
        Pinnote
      </h1>

      <nav className="w-[50%] flex items-center justify-between">
        <a
          href="/"
          className="font-bold bg-[#111] p-2 rounded-lg drop-shadow-lg hover:bg-[#222]"
        >
          home
        </a>
        <a
          href="/swap"
          className="font-bold bg-[#111] p-2 rounded-lg drop-shadow-lg hover:bg-[#222]"
        >
          swap
        </a>
        <a
          href="/about"
          className="font-bold bg-[#111] p-2 rounded-lg drop-shadow-lg hover:bg-[#222]"
        >
          about
        </a>

        {isHolder && (
          <a href="#" className="bg-[#222] p-2 rounded-lg hover:bg-[#555]">
            chat
          </a>
        )}
      </nav>
    </header>
  );
};

export default MainHeader;
