"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function page() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  return (
    <>
      {lang === "en" ? (
        <div className="my-6 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold mb-2">Imprint</h1>
          <span className="font-semibold">Site Operator</span>
          <span className="">Luke Barnes</span>
          <span className="">Steinbergerstraße 30</span>
          <span className="">50733 Cologne, Germany</span>
          <span className="font-semibold mt-6">Contact</span>
          <span className="">Phone: +49 (0) 1525 3407173</span>
          <span className="">Email: lbracketstringingservices@gmail.com</span>
          <span className="">
            Website:{" "}
            <Link href="/" className="hover:underline">
              https://www.lbrrs.com
            </Link>
          </span>
          <span className="font-semibold mt-6">
            Company registration details
          </span>
          <span className="">Court of Registration: Local Court Cologne</span>
          <span className="">Registration number: TBA</span>
          <span className="font-semibold mt-6">Privacy Policy</span>
          <Link href="/datenschutz?lang=en" className="hover:underline">
            https://www.lbrss.com/datenschutz?lang=en
          </Link>
        </div>
      ) : (
        <div className="my-6 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold mb-2">Impressum</h1>
          <span className="font-semibold">Anbieter</span>
          <span className="">Luke Barnes</span>
          <span className="">Steinbergerstraße 30</span>
          <span className="">50733 K&ouml;ln, Deutschland</span>
          <span className="font-semibold mt-6">Kontakt</span>
          <span className="">Telefon: +49 (0) 1525 3407173</span>
          <span className="">Email: lbracketstringingservices@gmail.com</span>
          <span className="">
            Website:{" "}
            <Link href="/" className="hover:underline">
              https://www.lbrrs.com
            </Link>
          </span>
          <span className="font-semibold mt-6">Registerangaben</span>
          <span className="">Registergericht: Amtsgericht K&ouml;ln</span>
          <span className="">Registernummer: TBA</span>
          <span className="font-semibold mt-6">Datenschutz</span>
          <Link href="/datenschutz" className="hover:underline">
            https://www.lbrss.com/datenschutz
          </Link>
        </div>
      )}
    </>
  );
}

export default page;
