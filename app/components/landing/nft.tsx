"use client";

// import { getContractDetails, mintNFT } from "@/app/lib/web3";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const NftColSec = () => {
  const [contractDetails, setContractDetails] = useState<any>({});

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement
    try {
      console.log("handling nft minting process", e.target.tokenAmount.value);

      toast(`minting ${e.target.tokenAmount.value} erc-721 token`)
      // const respo = await mintNFT(e.target.tokenAmount.value);
      // if(respo === "success") {
      //   toast(`successfully ${e.target.tokenAmount.value} erc-721 token`)
      // }

      form.reset()
    } catch (error) {
      console.log(error);
      toast(`an error minting accured`)
    }
  };

  // Grab  the nft collection details and plug it into here...

  // useEffect(() => {
  //   const gg = async () => {
  //     const details = await getContractDetails();

  //     if (details.status === "success") {
  //       setContractDetails(details.payload);
  //     }
  //   };

  //   gg();
  // }, [contractDetails.tokenSupply]);


  console.log(contractDetails, "contract details comp")


  return (
    <div className="bg-[#000] rounded-lg drop-shadow-lg">

      <header className="flex items-center justify-around p-10 flex-col md:flex-row">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-center">
          Pinnote Signature Collection ({contractDetails.tokenSymbol})
        </h2>
        <p className="p-4 bg-[#222] font-bold rounded-lg uppercase">erc-721</p>
      </header>

      <div className="w-full flex items-center justify-around p-4 flex-col md:flex-row">
        <div className="w-full md:w-[40%] mb-4 p-4">
          <p className="text-sm md:text-[1.4rem] leading-7">
            There are over 222 erc-721 tokens that are uniqualy generated. Own
            one of these tokens before they are all out, this is a beutiful art
            piece cats playing. You will also receive benifits as well as a
            title that you can equip to create pins.
          </p>
        </div>

        <div className="w-[300px] h-[300px] relative bg-[#222]">
          <Image
            src="https://rose-magic-mandrill-283.mypinata.cloud/ipfs/QmYM5PjF2psjaM9Z6En1fLMhfaF6isGnFybYqcuzfmd7sm/100.png"
            alt="signature items"
            fill
          />
        </div>
      </div>

      <div className="w-full p-10 flex flex-col">

        <div className="w-[50%] bg-[#222] hover:bg-[#444] p-2 text-center rounded-lg mx-auto">
          <Link href="/mint" className="text-2xl font-bold uppercase">
            learn more
          </Link>
        </div>

        <div className="w-[80%] mx-auto">

          <h2 className="text-2xl font-bold mb-2 bg-[#000] text-yellow-500 p-4 border-b-2 flex items-center justify-between flex-col md:flex-row">
            Token Address:{" "}
            <Link
              href="https://etherscan.io/token/0x62f38d44fb243c3c98b23636074414ed53ecbb1e"
              target="_blank"
              className="hover:bg-[#444] text-[10px] p-2"
            >
              0x62F38d44fB243C3C98B23636074414ED53ecBB1E
            </Link>
          </h2>

          <h2 className="font-bold mb-2 bg-[#000] text-yellow-500 p-4 border-b-2 flex items-center justify-between flex-col md:flex-row">
            <span className="text-2xl">Minted: {contractDetails.tokenSupply} /222</span>

            <form
              onSubmit={handleSubmit}
              className="md:w-[30%] flex items-center gap-5"
            >
              <input
                type="number"
                placeholder="amount "
                className="p-2 text-black w-full "
                id="tokenAmount"
                name="tokenAmount"
              />
              <button className="bg-[#222]  p-2 rounded-lg font-bold hover:bg-red-400">
                submit
              </button>
            </form>
          </h2>

        </div>
      </div>

    </div>
  );
};

export default NftColSec;
