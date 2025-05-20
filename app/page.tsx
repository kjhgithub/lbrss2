import Link from "next/link";
import WhatsApp from "@/assets/images/WhatsApp.png";
import insta from "@/assets/images/insta.png";
import { Mails, MapPinHouse } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-6 gap-2 text-center">
        <span>
          "ERFAHRENER SCHLÄGERBESAITER, LANGJÄRIGER SCHLÄGERSPORT-ENTHUSIAST"
        </span>
        <span>
          "EXPERIENCED RACKET STRINGER, LIFELONG RACKET SPORTS ADDICT"
        </span>
        <div className="mt-4">&#128205; Köln, Deutschland</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-20 mt-20 my-2 overflow-hidden ">
        <Link
          href="https://maps.app.goo.gl/bN5D6QcaWDGi8Lbz8?g_st=ic"
          target="_blank"
        >
          <MapPinHouse strokeWidth={1} className="h-20 w-20" />
        </Link>
        <Link
          href="https://www.instagram.com/lbracketstringingservices"
          target="_blank"
        >
          <img src={insta.src} alt="" className="h-20" />
        </Link>
        <Link href="https://wa.me/4915253407173">
          <img src={WhatsApp.src} alt="" className="h-20" />
        </Link>
        <Link href="mailto:lbracketstringingservices@gmail.com">
          <Mails strokeWidth={1} className="h-20 w-20 " />
        </Link>
      </div>
    </>
  );
}
