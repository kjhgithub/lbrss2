"use client";
import { useSearchParams, usePathname } from "next/navigation";
import clsx from "clsx";

function Languages() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center gap-2">
      <div className={clsx({ underline: pathname === "/" })}>DE 🇩🇪</div>
      <div className="">|</div>
      <div className="">🇬🇧 EN</div>
    </div>
  );
}

export default Languages;
