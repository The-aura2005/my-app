import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className="flex justify-between items-center w-[92%] m-6">
        <div className="relative">
          <div className="absolute -inset-1 bg-red-600 blur opacity-50 animate-blob"></div>
        <h2 className="text-black text-2xl  font-bold relative">Journal</h2>
        </div>
        <div className="">
        <ul className="flex items-center gap-[4vw] text-gray-400 text-3xl">
          <li>
            <Link className="hover:text-gray text-3xl" href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <a href="pricing">Pricing</a>
          </li>
          <li>
            <a href="talk">Talk</a>
          </li>
        </ul>
        </div>
        <button className= "border-2 px-5 py-2 border-red-700 text-red-700 rounded-lg">Login</button>
        </nav>
        {children}</body>

    </html>
  );
}
