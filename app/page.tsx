import Hero from "./components/landing/hero";
import NftColSec from "./components/landing/nft";
import ERCToken from "./components/landing/ERC";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between w-full">
      {/* hero */}
      <Hero />

      {/* nft */}
      <NftColSec />

      {/* ERC */}
      <ERCToken />
    </main>
  );
}
