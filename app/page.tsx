import Hero from "./component/landing/hero";
import AboutComp from "./component/landing/about";
import Mint from "./component/landing/mint";
import SimpleSwapPage from "./component/simpleSwapPage";
import MainHeader from "./component/main-header";

export default function Home() {
  return (
    <main className="min-h-screen w-full p-12">
      <MainHeader />

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
