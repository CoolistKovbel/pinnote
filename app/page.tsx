import Image from "next/image";

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
      <div className="bg-[#222] w-full h-[400px] p-2 flex items-center justify-between flex-col md:flex-row  rounded-lg p-10">
        <header className="w-[50%] bg-[#444] p-2 rounded-lg drop-shadow">
          <h2 className="text-3xl font-bold mb-2">Been having it rough?</h2>
          <p className="text-[13px]">
            If you feel like you are always in a panic and there are just so
            many things to do, you try do everything but it like its never good
            enough?
          </p>
          <p className="text-[13px]">
            We have a chat session avaiable for NFT Holders. Are you ready to
            mint?
          </p>
        </header>

        <div className="w-[300px] h-[300px] relative rounded-lg drop-shadow-lg ">
          <Image
            src="/2.png"
            alt="moment"
            fill
            className="rounded-lg drop-shadow-lg"
          />
        </div>
      </div>

      {/* mint */}
      <div>
        <header>
          <h2>De Pinnote</h2>
          <p>
            With over 222 collections to choose, where you can see a possible
            pinnote moment, get yours today and be able to gain staking rewards
            as well as be able gain access to your own meow pal.
          </p>
        </header>

        <div className="w-[300px] h-[300px] relative rounded-lg drop-shadow-lg ">
          <Image
            src="/2.png"
            alt="moment"
            fill
            className="rounded-lg drop-shadow-lg"
          />
        </div>
      </div>

      {/* swap  */}
      <div>
        <header>
          <h2>CatBall Token</h2>
          <p>
            By swapping your token for the cat ball token you will be able to be
            able to then use your tokens to be able to either stake or use it in
            our future store.
          </p>
        </header>



      </div>

      {/* about */}
    </main>
  );
}
