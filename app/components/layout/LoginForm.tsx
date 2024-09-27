"use client";

import { useModal } from "@/app/hooks/use-modal-store";
import { metaLogin } from "@/app/lib/action";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const LoginForm = () => {
  // TODO: add meta account handle here instead....

  const { onOpen } = useModal();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {

    
      onOpen("AuthUser", e.target.username.value);

    } catch (error) {
      console.log("error");
    }
  };

  const handleMetaSign = async (e: any) => {
    e.preventDefault();

    try {


      if(window.ethereum){

        const provider = new ethers.providers.Web3Provider(window?.ethereum)
        const account = await window.ethereum.request({method:"eth_requestAccounts"})
  
        const signer = provider.getSigner();
        // const user = await signer.getAddress();
  
        console.log(account)
  
        const message = `You are the current account holder signing today`;
        const sign = await signer.signMessage(message);
  
        // Check for user
  
        const res = await metaLogin(sign as string, account[0] as string);
  
        if (res.status === "success") {
          console.log(res);
          router.push("/profile");
        }
      }

    } catch (error) {
      console.log(error);
      toast("error logging in");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[60%] bg-[#222] p-10 flex flex-col  drop-shadow-lg rounded-lg gap-4"
    >
      <h2 className="text-6xl text-center font-bold">Login</h2>

      <label htmlFor="username" className="flex flex-col gap-5">
        <span className="text-[#999]">Username: </span>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="name"
          className="p-2 rounded-lg text-black"
        />
      </label>

      <button
        type="submit"
        className="bg-[#111] hover:bg-[#444] font-bold p-4 rounded-lg"
      >
        Sign in
      </button>

      <button
        type="button"
        onClick={handleMetaSign}
        className="bg-[#111] hover:bg-[#444] font-bold p-4 rounded-lg"
      >
        MetaSignIn
      </button>
    </form>
  );
};

export default LoginForm;
