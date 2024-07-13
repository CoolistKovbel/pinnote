"use server";

const Page = async () => {
  // Grabbing groups from server

  return (
    <main className="w-full min-h-screen">
      <header className="p-4 bg-[#111]">
        <h2 className="text-4xl font-bold mb-4">PinNote Inbox</h2>
        <p className="text-md text-gray-500">
          Check out any private messages or group messages you gotten all on one
          page.
        </p>
      </header>
    </main>
  );
};

export default Page;
