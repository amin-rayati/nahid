"use client";
import "./globals.css";
import { usePathname } from "next/navigation";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AuthHeader from "@/components/Header/AuthHeader";
import AuthFooter from "@/components/Footer/AuthFooter";
export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAuth = pathname.startsWith("/auth");
  const isAnikart = pathname.startsWith("/anikart");
  const isDashboard = pathname.startsWith("/dashboard");
  const isPrizes = pathname.startsWith("/prizes");
  if (isAuth || isAnikart || isDashboard || isPrizes) {
    return (
      <>
        <html lang="en">
          <body className="flex flex-col min-h-screen bg-[#E9EFF0]">
            <AuthHeader />
            <main className="min-h-screen flex flex-col">{children}</main>
            <AuthFooter />
          </body>
        </html>
      </>
    );
  }
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-[#E9EFF0]">
        <Header />
        <div className="flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl">
          <main className="flex-grow">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
