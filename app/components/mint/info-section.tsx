"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const InfoSection = () => {
  const [currentImage, setCurrentImage] = useState<string>(
    "https://rose-magic-mandrill-283.mypinata.cloud/ipfs/QmYM5PjF2psjaM9Z6En1fLMhfaF6isGnFybYqcuzfmd7sm/1.png"
  );

  const incrementNumberRef = useRef(1);

  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const maxIncrement = 222;

  const grabNFTImage = () => {
    incrementNumberRef.current += 1;

    if (incrementNumberRef.current > maxIncrement) {
      if (intervalId) {
        clearInterval(intervalId); // Clear the interval when max is reached
        setIntervalId(null);
      }
    } else if (incrementNumberRef.current === maxIncrement) {
      incrementNumberRef.current = 1;
    } else {
      setCurrentImage(
        `https://rose-magic-mandrill-283.mypinata.cloud/ipfs/QmYM5PjF2psjaM9Z6En1fLMhfaF6isGnFybYqcuzfmd7sm/${incrementNumberRef.current}.png`
      );
    }
  };

  useEffect(() => {
    if (!intervalId) {
      const id = setInterval(grabNFTImage, 1000);
      setIntervalId(id);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId); // Clear the interval on component unmount or when intervalId changes
      }
    };
  }, [intervalId]);

  return (
    <section className="p-10">
      <header className="flex items-center w-full justify-around mb-10 flex-col gap-4 md:flex-row">
        <div className="w-[300px] h-[300px] relative">
          <Image src={currentImage} alt="slow" fill />
        </div>
        <h2 className="text-4xl font-bold">Mint, Pin, Earn</h2>
      </header>
    </section>
  );
};

export default InfoSection;
