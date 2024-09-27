"use client"

import { useModal } from "@/app/hooks/use-modal-store";

interface GroupNotifactionMessageProps {
    data: any;
}

const GroupNotifactionMessage = ({data}:GroupNotifactionMessageProps) => {
    const { onOpen } = useModal();

    const handleGroupMessage = async () => {
        console.log("handling group messages")
        onOpen("GroupMessageModal")
    }

    console.log(data, "there is a griuop")
    
  return (
    <div className="relative">

        {
            data && (
            <div>
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

    </div>
  )
}

export default GroupNotifactionMessage