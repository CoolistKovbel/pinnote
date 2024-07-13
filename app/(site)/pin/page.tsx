import { getSession } from "@/app/lib/action";
import Link from "next/link";

const Page = async () => {
  const user = await getSession();

  console.log(user);

  const availblePins = [
    {
      id: crypto.randomUUID(),
      title: "Create a wireframe",
      description: "create a wireframe design of a website",
      completedBy: Date.now(),
      earn: "4 eth"

    },
    {
      id: crypto.randomUUID(),
      title: "Build a swap component",
      description: "create a swapping component feature",
      completedBy: Date.now(),
      earn: "4 eth"

    },
    {
      id: crypto.randomUUID(),
      title: "Help a componey with their site",
      description:
        "componey reports they need to orginze their data. organize in exel sheet",
      completedBy: Date.now(),
      earn: "4 eth"

    },
    {
      id: crypto.randomUUID(),
      title: "Create a full stack website",
      description: "Come up with a website i can use for my buisness",
      completedBy: Date.now(),
      earn: "4 eth"

    },
    {
      id: crypto.randomUUID(),
      title: "Create a wireframe",
      description: "create a wireframe design of a website",
      completedBy: Date.now(),
      earn: "4 eth"

    },
    {
      id: crypto.randomUUID(),
      title: "Build a swap component",
      description: "create a swapping component feature",
      completedBy: Date.now(),
      earn: "4 eth"

    },
    {
      id: crypto.randomUUID(),
      title: "Help a componey with their site",
      description:
        "componey reports they need to orginze their data. organize in exel sheet",
      completedBy: Date.now(),
      earn: "4 eth"

    },
    {
      id: crypto.randomUUID(),
      title: "Create a full stack website",
      description: "Come up with a website i can use for my buisness",
      completedBy: Date.now(),
      earn: "4 eth"

    },
  ]

  return (
    <main className="w-full min-h-screen bg-[#111]">

      <header className="p-10 bg-[#000]">
        <h2 className="text-4xl font-bold mb-4">Pin Point</h2>
        <p className="leading-7 text-gray-500 text-[18px]">
          Look for the latest available pins to set get your group to start
          completing. Remeber there will need to be atleast 3 votes on one pin
          from your group in order for that specific pin to pass.
        </p>
      </header>


      <div className="w-full h-[100px] p-3 bg-[#444] flex items-center justify-between">
        <p>Create Pin</p>

        <input type="text" placeholder="Search pins" />
      </div>

      <section className="w-full flex items-center flex-wrap h-[800px] gap-5 overflow-auto justify-around p-5">
        {
          availblePins.map((item) => (
            <div key={crypto.randomUUID()}  className="w-[600px] h-[400px] bg-[#424] p-2 flex items-center justify-around rounded drop-shadow-lg flex-col md:flex-row">
              <div className="md:w-[50%] h-full flex flex-col justify-around bg-[#222] p-4 drop-shadow-lg rounded">
                  <h2 className="text-2xl capitalize text-center">{item.title}</h2>
                  <p className="text-[18px] text-gray-500">{item.description}</p>
                  <p className="bg-[#000] font-bold p-2 flex items-center justify-around rounded"><span className="font-bold uppercase">Earn:</span> {item.earn}</p>
              </div>
              <div className="md:w-[50%] text-center p-2">
                <h2 className="text-2xl mb-5">Complete by: {item.completedBy}</h2>
                <Link href={`/pin/${item.id}`} className="text-gray-500 underline font-bold">Learn More</Link>
              </div>
            </div>
          ))
        }
      </section>

    </main>
  );
};

export default Page;
