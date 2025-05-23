"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

function Footer() {
  const pathname = usePathname();

  const links = [
    {
      name: "Impressum",
      href: "/impressum",
    },
    {
      name: "Datenschutz",
      href: "/datenschutz",
    },
    {
      name: "Home",
      href: "/",
    },
  ];

  return (
    <footer className="flex flex-col items-center justify-center gap-2 mt-10">
      {links.map((link, index) => {
        return (
          <React.Fragment key={link.name}>
            {/* {index > 0 && <span>|</span>} */}
            <Link
              href={link.href}
              className={clsx("hover:underline", {
                "font-semibold": pathname === link.href,
              })}
            >
              {link.name}
            </Link>
          </React.Fragment>
        );
      })}
    </footer>
  );
}

export default Footer;
