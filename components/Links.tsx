import Link from "next/link";
import WhatsApp from "@/assets/images/WhatsApp.png";
import insta from "@/assets/images/insta.png";
import { Mails, MapPinHouse } from "lucide-react";

function Links() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-18 overflow-hidden ">
      <Link
        href="https://maps.app.goo.gl/bN5D6QcaWDGi8Lbz8?g_st=ic"
        target="_blank"
        className="flex flex-col items-center justify-center gap-2"
      >
        <MapPinHouse strokeWidth={1} className="h-20 w-20" />
        <span className="text-center text-sm">
          Google
          <br />
          Reviews
        </span>
      </Link>
      <Link
        href="https://www.instagram.com/lbracketstringingservices"
        target="_blank"
        className="flex flex-col items-center justify-center gap-2"
      >
        <img src={insta.src} alt="" className="h-20" />
        <span className="text-center text-sm">
          Instagram
          <br />
          Profile
        </span>
      </Link>
      <Link
        href="https://wa.me/4915253407173"
        className="flex flex-col items-center justify-center gap-2"
      >
        <img src={WhatsApp.src} alt="" className="h-20" />
        <span className="text-center text-sm">
          WhatsApp
          <br />
          Business
        </span>
      </Link>
      <Link
        href="mailto:lbracketstringingservices@gmail.com"
        className="flex flex-col items-center justify-center gap-2"
      >
        <Mails strokeWidth={1} className="h-20 w-20 " />
        <span className="text-center text-sm">
          Email
          <br />
          Adress
        </span>
      </Link>
    </div>
  );
}

export default Links;
