//"use client";
//import Link from "next/link";
import logo_long_blank from "@/assets/images/logo_long_blank.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { Suspense } from "react";
import LangLink from "@/lib/LangLink";

function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-2 mb-10">
      <Suspense fallback={<span>Loading....</span>}>
        <LanguageSwitcher />{" "}
      </Suspense>
      <LangLink href="/">
        <img src={logo_long_blank.src} alt="Logo" className="h-28" />
      </LangLink>
    </header>
  );
}

export default Header;
