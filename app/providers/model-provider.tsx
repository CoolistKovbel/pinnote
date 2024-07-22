"use client";

import { useEffect, useState } from "react";
import AuthUserModel from "../components/models/AuthUserModel";
import CreateGroupModel from "../components/models/CreateGroupModel";
import GroupMessageModal from "../components/models/GroupMessageModal";
import CreateSinglePinModel from "../components/models/SinglePinModel";
import CreateGroupPinModel from "../components/models/CreateGroupPinModel";


export const  ModalProvider = () => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthUserModel />
      <CreateGroupModel />
      <GroupMessageModal />
      <CreateSinglePinModel />
      <CreateGroupPinModel />
    </>
  );
};
