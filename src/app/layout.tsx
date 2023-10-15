import Navbar from "@/components/Navbar/Index";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Providers from "@/redux/Provider";
import store from "@/redux/store";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <div>
            <Navbar></Navbar>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
