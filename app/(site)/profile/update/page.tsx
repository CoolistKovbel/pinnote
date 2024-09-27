import UpdateUserProfile from "@/app/components/profile/update-user-profile";
import { getSession } from "@/app/lib/action";

const Page = async () => {
  const user = await getSession()

  return (
    <main className="w-full min-h-screen">
      
      <header className="w-full p-4">
        <h2 className="text-4xl font-bold">Update profile</h2>
      </header>


      <UpdateUserProfile user={user} />


    </main>
  );
};

export default Page;
