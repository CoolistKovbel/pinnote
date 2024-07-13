import SinglePinSection from "@/app/components/pinpoint/single-pin-section";
import { getPinGroupByID } from "@/app/lib/action";

const Page = async ({ params }: { params: { id: string } }) => {
  const pinGroup = await getPinGroupByID(params.id as string);

  return (
    <main className="w-full min-h-screen">
      <SinglePinSection pinGroup={pinGroup} />
    </main>
  );
};

export default Page;
