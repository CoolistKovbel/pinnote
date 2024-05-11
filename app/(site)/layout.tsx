import type { Metadata } from "next";
import MainHeader from "../component/main-header";

export const metadata: Metadata = {
  title: "PinNote",
  description: "Be able to communicate with your nft pals or mint to earn tokens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-5">
        <MainHeader />
        {children}
    </div>
  );
}
