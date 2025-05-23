"use client";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import clsx from "clsx";

function Languages() {
  const pathname = usePathname();

  return (
    <Suspense fallback={<span>Loading....</span>}>
      <div className="flex items-center justify-center gap-2">
        <div className={clsx({ underline: pathname === "/" })}>DE 🇩🇪</div>
        <div className="">|</div>
        <div className="">🇬🇧 EN</div>
      </div>
    </Suspense>
  );
}

export default Languages;
