"use client";

import { userUpdate } from "@/app/lib/action";
import { useState } from "react";

interface UpdateUserProfileProps {
  user: any;
}

const UpdateUserProfile = ({ user }: UpdateUserProfileProps) => {
  const [groupImage, setGroupImage] = useState<File | null>(null);

  const handleUserUpdate = async (e: any) => {
    e.preventDefault();
    console.log("update user");

    const formData: any = new FormData(e.currentTarget);
    const form = e.target as HTMLFormElement;

    try {
      formData.append("userImage", groupImage as File);
      formData.append("user", user);

      const res = await userUpdate(formData);

      //   TODO: fix  hadne user udaep
      console.log(res);

      form.reset();
    } catch (error) {
      console.log("error updating", error);
    }
  };

  return (
    <form
      className="flex items-start justify-between flex-col w-full h-fit md:h-[820px] mb-10 p-10 bg-[#222]"
      onSubmit={handleUserUpdate}
    >
      
      <label
        htmlFor="username"
        className="w-full flex items-center justify-between md:flex-row flex-col gap-4"
      >
        <span className="block bg-[#111] p-4 rounded-lg font-bold w-full md:w-[20%] text-center uppercase">
          Username:
        </span>
        <input
          type="text"
          placeholder="username"
          id="username"
          name="username"
          className="p-4 bg-[#111] rounded-lg w-full md:w-[25%] mb-4"
        />
      </label>

      <label
        htmlFor="email"
        className="w-full flex items-center justify-between md:flex-row flex-col gap-4"
      >
        <span className="block bg-[#111] p-4 rounded-lg font-bold w-full md:w-[20%] text-center uppercase">
          email:
        </span>
        <input
          type="email"
          placeholder="email"
          id="email"
          name="email"
          className="p-4 bg-[#111] rounded-lg w-full md:w-[25%] mb-4"
        />
      </label>

      <label
        htmlFor="description"
        className="w-full flex items-center justify-between md:flex-row flex-col gap-4"
      >
        <span className="block bg-[#111] p-4 rounded-lg font-bold w-full md:w-[20%] text-center uppercase">
          User Description:
        </span>
        <textarea
          placeholder="enter user description"
          id="description"
          name="description"
          className="p-4 bg-[#111] rounded-lg w-full md:w-[25%] mb-4 resize-none"
        />
      </label>

      <label
        className="w-full flex items-center justify-between md:flex-row flex-col gap-4"
        htmlFor="userImage"
      >
        <span className="block bg-[#111] p-4 rounded-lg font-bold w-full md:w-[20%] text-center uppercase">
          User Image:{" "}
        </span>

        <input
          type="file"
          id="userImage"
          name="userImage"
          className="p-4 bg-[#111] rounded-lg w-full md:w-[25%] mb-4"
          onChange={(e: any) => setGroupImage(e.target.files[0])}
        />
      </label>

      <label
        htmlFor="userPreference"
        className="w-full flex items-center justify-between md:flex-row flex-col gap-4"
      >
        <span className="block bg-[#111] p-4 rounded-lg font-bold w-full md:w-[20%] text-center uppercase">
          User Skill Preference:
        </span>
        <select
          name="userPreference"
          id="userPreference"
          className="p-4 bg-[#111] rounded-lg w-full md:w-[25%] mb-4"
        >
          <option value="---">---</option>
          <option value="frontEnd">front-end</option>
          <option value="backEnd">back-end</option>
          <option value="fullstack">fullstack</option>
          <option value="blockchain">blockchain</option>
          <option value="marketing">Marketing</option>
        </select>
      </label>

      <button className="bg-[#111] text-yellow-500 p-4 font-bold rounded-lg hover:bg-[#444]">
        submit
      </button>
    </form>
  );
};

export default UpdateUserProfile;
