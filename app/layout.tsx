import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import ShortLogo from "@/components/home/logos/ShortLogo";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Engineers Jobs",
  description:
    "Engineers Jobs all in one place , store your resume , and get noticed by the world's top recruiters , become the candidate they can't ignore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // <html lang="en" className="dark" suppressHydrationWarning>
  // from-blue-500 to-cyan-500  bg-gradient-to-r
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="  ">
          <ShortLogo />
          {/* <Navbar /> */}

          <div className="min-h-screen ">{children}</div>
          <Footer />
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </body>
    </html>
  );
}
