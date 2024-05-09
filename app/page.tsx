import Image from "next/image";

export default function Home() {

  // is holder?
  const isHolder = true

  return (
    <main className="min-h-screen w-full p-24">
      

      <header>
        <h1>PanicKitty</h1>

        <nav>
          <a href="#">home</a>
          <a href="#">mint</a>
          <a href="#">swap</a>
          <a href="#">about</a>
          {/* comes for holders */}
          <a href="#">chat</a>
        </nav>
      </header>


      {/* hero */}
      <div>
        <header>
          <h2>Been having it rough?</h2>
          <p>If you feel like you are always in a panic and there are just so many things to do, you try do everything but it like its never good enough? </p>
          <p>We have a chat session avaiable for NFT Holders. Are you ready to mint?</p>
        </header>

        <div className="w-[100px] h-[100px] relative">
          <Image src="/2.png" alt="moment" fill />   
        </div>


      </div>

      {/* mint */}

      {/* swap  */}

      {/* about */}


    </main>
  );
}
