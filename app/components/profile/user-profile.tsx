"use client";

import ProfileSection from "../profilesection";
import { useEffect, useState } from "react";
import { getUserById } from "@/app/lib/action";

interface UserProfileProp {
  pinGroupValid: any;
  recentGroupPins: any;
  recentSidePins: any;
  id: string;
}

const UserProfile = ({
  id,
  pinGroupValid,
  recentGroupPins,
  recentSidePins,
}: UserProfileProp) => {
  const [user, setUser] = useState<any>("");

  useEffect(() => {
    const scan = async () => {
      const actionLoad: any = await getUserById(id);
      actionLoad.payload.sendMessage = true;
      setUser(actionLoad.payload);
    };

    scan();
  }, [id]);

  return (
    <ProfileSection
      id={id}
      pinGroupValid={JSON.stringify(pinGroupValid)}
      user={user}
      recentGroupPins={recentGroupPins}
      recentSidePins={recentSidePins}
      userPinGroupsDetails
      groupPins
    />
  );
};

export default UserProfile;
