import CreatePinModelHeader from "@/app/components/createPiinModalHeader";
import { getSession } from "@/app/lib/action";

const Page = async () => {
  const user = await getSession();

  console.log(user.isLoggedIn, "de cirrent user");

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

      <CreatePinModelHeader user={user} />
    </main>
  );
};

export default Page;
