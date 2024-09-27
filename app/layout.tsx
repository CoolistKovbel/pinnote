import type { Metadata } from "next";
import { inter } from "./components/ui/font";

import MainHeader from "./components/layout/MainHeader";
import MainFooter from "./components/layout/mainFooter";
import { ModalProvider } from "./providers/model-provider";
import { ToastContainer} from "react-toastify";
import { getSession } from "./lib/action";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";


export const metadata: Metadata = {
  title: "PinNote",
  description:
    "Sign up and be part of a 5 person team where you will be assign pins to complete that will require code as a team to get the job done.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getSession();
  return (
    <html lang="en">
      <body className={`${inter.className}`}>

        <MainHeader user={user}/>
         

        {children}


        <ToastContainer />
        <ModalProvider />
        <MainFooter />
      </body>
    </html>
  );
}
