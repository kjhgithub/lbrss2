import Link from "next/link";
import WhatsApp from "@/assets/images/WhatsApp.png";
import Insta from "@/assets/images/insta.png";
import { Mails, MapPinHouse } from "lucide-react";

function Links() {
  const links = [
    {
      name: "google",
      href: "https://maps.app.goo.gl/bN5D6QcaWDGi8Lbz8?g_st=ic",
      slogan: { de: "Google\nRezensionen", en: "Google\nReviews" },
      img: null,
      icon: <MapPinHouse strokeWidth={1} className="size-12 md:size-18" />,
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/lbracketstringingservices",
      slogan: { de: "Instagram\nProfil", en: "Instagram\nProfile" },
      img: Insta,
      icon: null,
    },
    {
      name: "whatsapp",
      href: "https://wa.me/4915253407173",
      slogan: { de: "Whatsapp\nBusiness", en: "Whatsapp\nBusiness" },
      img: WhatsApp,
      icon: null,
    },
    {
      name: "email",
      href: "mailto:lbracketstringingservices@gmail.com",
      slogan: { de: "Email\nAdresse", en: "Email\nAdress" },
      img: null,
      icon: <Mails strokeWidth={1} className="size-12 md:size-18 " />,
    },
  ];

  return (
    <div className="grid grid-cols-4 md:grid-cols-4 gap-12 md:gap-18">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          className="flex flex-col items-center justify-center gap-2"
        >
          {link.icon && link.icon}
          {link.img && (
            <img
              src={link.img.src}
              alt={link.name}
              className="size-12 md:size-18"
            />
          )}
          <span className="text-center text-xs md:text-sm whitespace-pre-line">
            {link.slogan.de}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default Links;
