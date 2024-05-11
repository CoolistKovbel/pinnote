
import MintForm from "@/app/component/mint/mint-form";
import Image from "next/image";
import React from "react";


const Page = async () => {




  return (
    <section className="p-10 ">
      <div className="flex items-center justify-between mb-20">
        <header className=" mb-10 font-bold">
          <h2 className="text-4xl md:text-8xl mb-2">Pinnote NFT Collection</h2>
          <p className="text-2xl">
            Grab your own piece of art from the pinnote collection a very
            special piece called , Panic Kitty
          </p>
        </header>

        {/* Carrosal */}
        <div className="w-[300px] h-[300px] relative mx-auto">
          <Image
            src="/Cuploop.png"
            alt="image nft"
            fill
            className="rounded-lg dropshadow-lg"
          />
        </div>
      </div>

      <article>
        <header className="flex items-center justify-between">
          <div className="w-[50%] bg-[#222] p-10 rounded-lg">
            <h2 className="text-4xl font-bold mb-4">JumpingKitty Collection</h2>
            <p className="text-sm leading-6">
              This is a collection of erc-721 tokens that allow to own a image
              of that represents the token. With over 222 tokens each different
              from the rest avaiable on ethereum. These nfts also come with some
              perks and benifits such as earning rewards if you send it to a
              mining pool and or a small communication platform where you will
              be able to contact any other who has the erc-721 token.
            </p>
          </div>

          <div className="w-[300px] h-[300px] relative mx-auto">
            <Image
              src="/67.png"
              alt="image nft"
              fill
              className="rounded-lg dropshadow-lg"
            />
          </div>
        </header>

        <MintForm />
       
      </article>
    </section>
  );
};

export default Page;
