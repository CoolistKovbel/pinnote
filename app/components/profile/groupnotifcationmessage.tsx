"use client"

import { useModal } from "@/app/hooks/use-modal-store";


const GroupNotifactionMessage = () => {
    const { onOpen } = useModal();

    const handleGroupMessage = async () => {
        console.log("handling group messages")
        onOpen("GroupMessageModal")
    }


  return (
    <div className="relative">
        <button
            onClick={handleGroupMessage}
            className="bg-[#222] p-2 rounded-lg font-bold hover:bg-[#444]"
        >
            MessageGroup
        </button>
        <span className="absolute p-2 bg-[#444] text-[10px] rounded-full font-bold -top-5 -right-2">1</span>
    </div>
  )
}

export default GroupNotifactionMessage