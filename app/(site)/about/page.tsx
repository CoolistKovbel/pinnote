import React from "react";

const Page = () => {
  return (
    <main className="min-h-screen bg-[#222] p-10">
      <header className="p-10">
        <h2 className="text-4xl font-bold mb-2">What is Pinnote?</h2>
        <p className="text-md">
          The one place you can come and be able to talk to another user who
          also has the nft. You will be able to also be able to manage your own
          token our yarnball. This is a small token that you will be able to use
          as a reward.
        </p>
      </header>

      <div className="p-10 bg-[#222]">
        <h2 className="text-4xl font-bold">How to get started?</h2>

        <p className="text-lg">
          All you need is a connection between your browser and the blockchain.
          You can use metamask as your connection to the blockchain or look for
          other extentions that provide the similar service.
        </p>

        <p className="text-lg">
          Once you have setup your extentions be sure to keep your private and
          recovery key safe. Be sure to write it down or store it in a place
          where only you will be able to find or get the keys for.
        </p>

        <p className="text-lg">
          Just remeber to only put in what you can afford to loose and not be on
          of the people who go at things too fast.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">Features: </h2>
        <p>
          In <strong>Pinnote</strong> you are able to mint yourself a erc-721
          token which is our Signature collection. At the same time you are able
          to able to use this token to reward yourself with another token our
          erc-20 yarnball token.
        </p>

        <p>
          There is going to be a staking pool where you will need to deposit a
          certain amount of tokens and you will recieve rewards based upon it.
        </p>

        <p>
          Users who one of the NFTs will be able to participate in a group or random
          group chat where you will be partnered with two others to be able to
          communicate with one another.
        </p>

        

      </div>
    </main>
  );
};

export default Page;
