import Link from "next/link";
import logo_long_blank from "@/assets/images/logo_long_blank.png";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-2 mb-10">
      <LanguageSwitcher />
      <Link href="/">
        <img src={logo_long_blank.src} alt="Logo" className="h-28" />
      </Link>
    </header>
  );
}

export default Header;
