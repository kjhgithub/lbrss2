import Link from "next/link";

import logo_long_blank from "@/assets/images/logo_long_blank.png";

function Header() {
  return (
    <header className="my-6 flex flex-col items-center justify-center gap-4">
      <Link href="/">
        <img src={logo_long_blank.src} alt="Logo" className="h-28" />
      </Link>
      <div className="flex flex-nowrap gap-4 overflow-hidden">
        <span>BA &#127992;</span>
        <span>SQ &#9899;</span>
        <span>TE &#127934;</span>
      </div>
      <span className="italic text-center">
        String it right. Otherwise, it's the racket's fault. Again.
      </span>
    </header>
  );
}

export default Header;
