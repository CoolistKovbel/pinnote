"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LogoutButton from "../logoutbutton";
import Image from "next/image";

interface MainHeaderProps {
  user: any;
}

const MainHeader = ({ user }: MainHeaderProps) => {
  const isLogged = user.isLoggedIn;

  const [handleDrop, setHandleDrop] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropDown = () => {
    setHandleDrop((prevDrop) => !prevDrop);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setHandleDrop(false);
    }
  };

  useEffect(() => {
    if (handleDrop) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleDrop]);

  return (
    <header className="bg-[#222] p-4  w-full">

      <div className="w-[80%] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">

          <h1 className="text-2xl font-bold">
            <Link href="/" className="flex items-center gap-4">
              <Image src="/pinote-log-1.png" alt="logo of a note" width={60} height={60} className="rounded-[20%] drop-shadow-lg" />
            </Link>
          </h1>

          <nav className="items-center gap-4 hidden md:flex">
            <Link href="/about" className="bg-[#111] p-2 rounded-lg">
              About
            </Link>
            <Link href="/contact" className="bg-[#111] p-2 rounded-lg">
              Contact
            </Link>
            <Link href="/mint" className="bg-[#111] p-2 rounded-lg">
              Mint
            </Link>
            <Link href="/pin" className="bg-[#111] p-2 rounded-lg">
              Pin
            </Link>
          </nav>
        </div>

        {isLogged ? (
          <div className="bg-[#111] p-2 text-center rounded-lg w-[200px] relative ">

            <header className="flex items-center justify-between gap-2 ">
              <h2 className="text-sm ">{user.username}</h2>
              <button onClick={handleDropDown}>↓</button>
            </header>

            {handleDrop && (
              <ul className="bg-[#444]  absolute -bottom-51 right-0 w-[200px] flex flex-col z-10  h-fit">
                <li className="w-full p-3 font-bold bg-[#222]">
                  <Link href="/profile" className="hover:cursor-pointer">
                    profile
                  </Link>
                </li>
                <li className="w-full p-3 font-bold bg-[#222]">
                  <Link href="/pin/group" className="hover:cursor-pointer">
                    groups
                  </Link>
                </li>
                <li className="w-full p-3 font-bold bg-[#222]">
                  <Link href="/profile/inbox" className="hover:cursor-pointer">
                    Inbox
                  </Link>
                </li>
                <LogoutButton />
              </ul>
            )}
          </div>
        ) : (
          <div className="bg-[#111] rounded-lg p-3 hover:bg-[#444]">
            <Link href="/login">Login</Link>
          </div>
        )}
      </div>
      
    </header>
  );
};

export default MainHeader;
