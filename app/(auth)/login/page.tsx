import LoginForm from "@/app/components/layout/LoginForm";


const Page = async () => {

  // Add login component
  const handleUserMetaAccount = function() {
    console.log("giving user meta address")
    return "f"
  }



  return (
    <section className="flex items-center justify-center w-full min-h-screen bg-[#111] p-10 ">
      <LoginForm userAccount={handleUserMetaAccount()}  />
    </section>
  );
};

export default Page;
