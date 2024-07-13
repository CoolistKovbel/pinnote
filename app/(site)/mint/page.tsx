import InfoSection from "@/app/components/mint/info-section";
import MintSection from "@/app/components/mint/mint-section";

const Page = () => {
  const articles = [
    {
      title: "Manage Members",
      description:
        "With the token you will be able to overwatch group members making sure pins are being completed. ",
      image: "🧑🏽‍💻",
    },
    {
      title: "Earn Transaction fees",
      description: "Get 1% of all trade fees that acure on the site",
      image: "📊",
    },
    {
      title: "Service",
      description: "You will be able to help group members who request help. ",
      image: "🔖",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#111]">
      <header className="p-10 bg-[#333] text-center md:text-left ">
        <h1 className="text-6xl mb-2 font-bold ">PinNote Collection</h1>
        <p className="text-lg text-gray-500">A simple collection</p>
      </header>

      <InfoSection />

      <p className="mb-2 text-center w-[80%] mx-auto text-2xl">
        These arent just any normal ERC-721 tokens. You will not only get a
        beutiful looking image that you will digitally own for the rest of your
        time on the blockchain. But you will be able to unlock access to more
        features here on the site as well as be able to earn and collect a
        little more rewards from just holding this token.
      </p>

      <div className="w-[80%] mx-auto mt-5 pb-10 flex items-center justify-center md:justify-between gap-4 flex-wrap">
        {articles.map((item) => (
          <div
            key={crypto.randomUUID()}
            className="w-[300px] h-[300px] bg-[#444] p-2 flex items-center gap-4 text-center justify-center flex-col rounded drop-shadow-lg"
          >
            <i className="text-6xl">{item.image}</i>
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="text-gray-300 font-bold">{item.description}</p>
          </div>
        ))}
      </div>

      <MintSection />
    </main>
  );
};

export default Page;
