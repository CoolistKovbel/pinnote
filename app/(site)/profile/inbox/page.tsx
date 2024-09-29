"use server";

import Image from "next/image";

const Page = async () => {
  // Grabbing groups from server

  const users = [
    {
      userId: 1,
      username: "lyub12",
      image: "https://placehold.co/32",
      status: "online",
    },
    {
      userId: 1,
      username: "lyub11",
      image: "https://placehold.co/32",
      status: "online",
    },
    {
      userId: 1,
      username: "lyub13",
      image: "https://placehold.co/32",
      status: "online",
    },
  ];

  const pinGroupUsers = [
    {
      pinUser: 1,
      pinUsername: "lyub12",
      pinImage: "https://placehold.co/32",
      pin0x: "123rfveeopf",
      status: "online",
    },
    {
      pinUser: 2,
      pinUsername: "lyub14",
      pinImage: "https://placehold.co/32",
      pin0x: "123rfveeopf",
      status: "away",
    },
    {
      pinUser: 3,
      pinUsername: "lyub13",
      pinImage: "https://placehold.co/32",
      pin0x: "123rfveeopf",
      status: "offline",
    },
    {
      pinUser: 4,
      pinUsername: "lyub",
      pinImage: "https://placehold.co/32",
      pin0x: "123rfveeopf",
      status: "offline",
    },
  ];

  const messagesSession = [
    {
      messageId: 1,
      user1Username: "lyub12",
      user1Message: "what",
    },
    {
      messageId: 2,
      user1Username: "lyub11",
      user1Message: "what bro",
    },
    {
      messageId: 3,
      user1Username: "lyub12",
      user1Message: "kill yourself",
    },
    {
      messageId: 4,
      user1Username: "lyub11",
      user1Message: "wait... i am almost done.... hold onnnnn",
    },
  ];

  return (
    <main className="w-full min-h-screen">
      <header className="p-4 bg-[#111]">
        <h2 className="text-4xl font-bold mb-4">PinNote Inbox</h2>
        <p className="text-md text-gray-500">
          Check out any private messages or group messages you gotten all on one
          page.
        </p>
      </header>

      <section className="flex items-center justify-around w-full h-[800px]">
        <div>
          <h3>Send Message</h3>

          <div className="p-2 bg-[#222]">
            <h4>Friends: </h4>
            <div className="p-4 flex flex-col gap-3 overflow-auto">
              {users.map((item) => (
                <div
                  key={crypto.randomUUID()}
                  className="flex items-center gap-5"
                >
                  {item.username}
                  <Image
                    src={item.image}
                    alt="user prifolie"
                    width={32}
                    height={32}
                    className="rounded drop-shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="p-2 bg-[#222]">
            <h4>pingroup:</h4>
            <div className="p-4 flex flex-col gap-3 overflow-auto">
              {pinGroupUsers.map((item) => (
                <div
                  key={crypto.randomUUID()}
                  className="flex items-center gap-5"
                >
                  {item.pinUsername}
                  <Image
                    src={item.pinImage}
                    alt="user prifolie"
                    width={32}
                    height={32}
                    className="rounded drop-shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-5 bg-[#444] flex flex-col gap-5 w-[30%]">
          {messagesSession.map((item, inde) => (
            <div
              key={crypto.randomUUID()}
              className={`flex items-center gap-5 ${
                inde % 2 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <h4>{item.user1Username}</h4>
              <p>{item.user1Message}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default Page;
