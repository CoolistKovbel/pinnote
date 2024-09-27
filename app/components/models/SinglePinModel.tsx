"use client";


import { useModal } from "@/app/hooks/use-modal-store";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import { HandlePinCreate } from "@/app/lib/action";
import { useState } from "react";
import { toast } from "react-toastify";

const CreateSinglePinModel = () => {
  
  const { isOpen, onClose, type, signature } = useModal();
  const [groupImage, setGroupImage] = useState<File | null>(null);
  const fm = signature;

  const isModalOpen = isOpen && type === "CreatePin";

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    const message = `
      pin# ${crypto.randomUUID()})}
    `;
    
    e.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const formData = new FormData(e.currentTarget);

    try {
      const signature = await signer.signMessage(message);

      formData.append("signature", signature);
      formData.append("userId", fm as string);
      formData.append("pinImage", groupImage as File);

      const form = e.target as HTMLFormElement;
      const res = await HandlePinCreate(formData);

      if (res.status === "success") {
        toast("Good job, others can now see your pin");

        router.refresh();
      }

      if (res.status === "error") {
        toast(`${JSON.stringify(res.payload)}`);
      }

      router.refresh();
      form.reset();
      onClose();
    } catch (error: any) {
      console.log(error, "there is an error");
    }
  };

  

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isModalOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <dialog
        open={isModalOpen}
        className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >

        <form onSubmit={onSubmit}>

          <header className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Create a Pin</h2>
            <p className="text-gray-800">
              In need of a task to be done, create yourself a pin for others to
              see if they should get it done or not.
            </p>
          </header>

          <label className="block mb-2" htmlFor="pinName">
            <span>Pin Name: </span>
            <input
              type="text"
              name="pinName"
              id="pinName"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>

          <label className="block mb-2" htmlFor="pinDescription">
            <span>Pin Description: </span>
            <input
              type="text"
              name="pinDescription"
              id="pinDescription"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>

          <label className="block mb-2" htmlFor="pinImage">
            <span>Pin Photo: </span>
            <input
              type="file"
              name="pinImage"
              id="pinImage"
              onChange={(e) =>
                setGroupImage(e.target.files ? e.target.files[0] : null)
              }
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>

          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Create
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>

        </form>

      </dialog>
    </div>
  );
};

export default CreateSinglePinModel;
