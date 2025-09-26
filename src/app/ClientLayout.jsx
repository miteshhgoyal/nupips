"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BgEffect from "@/components/ui/BgEffect";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // Jaha Navbar/Footer nahi chahiye
  const noLayoutRoutes = ["/login", "/register"];

  const hideLayout = noLayoutRoutes.includes(pathname);

  return (
    <>
      <div className="bg-white -black overflow-x-hidden">
        <BgEffect />

        <div className="relative z-50 bg-transparent overflow-x-hidden">
          {!hideLayout && <Navbar />}
          {children}
        </div>
        {!hideLayout && <Footer />}
      </div>
    </>
  );
}
