import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/Navbar";
import Darkmode from "./components/Darkmode";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

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
    <html lang="en" className="h-full w-full dark min-w-[300px] min-h-[1000px]">
      <body  suppressHydrationWarning className={`${poppins.className} flex flex-col h-full w-full overflow-hidden
       bg-primary-bg dark:bg-dprimary-bg`}>
        <Darkmode />
        {children}
      </body>
    </html>

  );
}
