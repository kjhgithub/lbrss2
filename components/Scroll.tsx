"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function Scroll() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default Scroll;
