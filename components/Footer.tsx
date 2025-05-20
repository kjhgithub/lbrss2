import Link from "next/link";

function Footer() {
  return (
    <footer className="mt-24 mb-2 flex items-center justify-center gap-4">
      <Link href="/impressum">IMPRESSUM</Link>
      <span>|</span>
      <Link href="/datenschutz">Datenschutz</Link>
    </footer>
  );
}

export default Footer;
