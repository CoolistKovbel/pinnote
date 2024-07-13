import Link from "next/link";
 
const MainFooter = () => {
  return (
    <footer className="flex items-center justify-between w-full p-10">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Pinnote</h1>
        <p>
          Chat with other holders and complete certain tasks or setup your own
          tasks for other to complete for a reward.
        </p>
      </div>

      <nav className="flex items-center flex-col p-5 gap-2">
        <Link
          href="/"
          className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]"
        >
          Contact
        </Link>
        <Link
          href="/stake"
          className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]"
        >
          Stake
        </Link>
      </nav>
    </footer>
  );
};

export default MainFooter;
