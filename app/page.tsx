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
          <h2 className="text-4xl font-bold mb-2">YarnBall Token 🔙</h2>
          <p className="text-lg">
            With over a 1 mill token supply, this token is here for the journey.
            If you are looking to get on board get your this token for a fixed
            price from the contract, the more you support the contract the
            better the long run will turn out to be. This token will allow you use it in future events, as well as where it may be accepted. 
          </p>

          <div className="text-center p-4 bg-[#111] drop-shadow-lg rounded-lg mt-3">
          <p className="p-2 font-bold"> Total Supply: 100,000,000 </p>
          <p className="p-2 font-bold"> Address: 0x3336deBc102ce50a707CF8Df8c626aB338D55539 </p>
          <p className="p-2 font-bold"> Exchange Rate: 1 - 10000 </p>
        </div>

        </header>

        <SimpleSwapPage />
      </div>
    </main>
  );
}
