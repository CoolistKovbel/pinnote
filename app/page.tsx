import Image from "next/image";
import Hero from "./component/landing/hero";
import AboutComp from "./component/landing/about";
import Mint from "./component/landing/mint";
import SimpleSwapPage from "./component/simpleSwapPage";

export default function Home() {
  // is holder?
  const isHolder = false;

  return (
    <main className="min-h-screen w-full p-12">
      <header className="bg-[#333] w-full flex items-center justify-around p-4 drop-shadow-lg rounded-lg mb-4">
        <h1 className="text-4xl font-bold bg-[#111] text-yellow-500 p-2 rounded-lg">
          Pinnote
        </h1>

        <nav className="w-[50%] flex items-center justify-between">
          <a
            href="#"
            className="font-bold bg-[#111] p-2 rounded-lg drop-shadow-lg"
          >
            home
          </a>
          <a
            href="#"
            className="font-bold bg-[#111] p-2 rounded-lg drop-shadow-lg"
          >
            mint
          </a>
          <a
            href="#"
            className="font-bold bg-[#111] p-2 rounded-lg drop-shadow-lg"
          >
            swap
          </a>
          <a
            href="#"
            className="font-bold bg-[#111] p-2 rounded-lg drop-shadow-lg"
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

      {/* hero */}
      <Hero />

      {/* about */}

      <AboutComp />

      {/* mint */}
      <Mint />

      {/* swap  */}
      <div>

        <header className="bg-[#222] p-4 rounded-lg mb-4">
          <h2 className="text-4xl font-bold mb-2">YarnBall Token</h2>
          <p className="text-lg">
            There is a limited amount about these tokens ready for your
            purchasing. You can either get it straight from the contract or look
            for a better price on a dex. This token is used a reward as well as
            to be used in our little eco system. You can send it to your freinds
            and use it to buy certain nfts
          </p>
        </header>


        <SimpleSwapPage />

      </div>
    </main>
  );
}
