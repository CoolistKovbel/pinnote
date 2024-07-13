"use client"

interface SinglePinSectionProps { 
  pinGroup: any;
}


const SinglePinSection = ({pinGroup}: SinglePinSectionProps) => {

  console.log("pingroup that is from the id", pinGroup)

  return (
    <section className="w-full min-h-screen">
      <header className="p-4 bg-[#111]">
        <h2 className="text-4xl font-bold mb-4">PinNote Group</h2>
        <p className="text-md text-gray-500">
          Looking for a group, find a group that needs a person or two and join.
          Once there are 5 people you will be able to start accepting and doing
          pins.
        </p>
      </header>

      {/* <GroupPin /> */}
    </section>
  );
};

export default SinglePinSection;
