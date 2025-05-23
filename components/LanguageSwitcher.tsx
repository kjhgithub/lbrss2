"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setLang = (lang: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", lang);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        className="cursor-pointer hover:underline"
        onClick={() => setLang("de")}
      >
        DE 🇩🇪
      </button>
      <div className="">|</div>
      <button
        className="cursor-pointer hover:underline"
        onClick={() => setLang("en")}
      >
        🇬🇧 EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;
