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
          <h1 className="text-3xl font-semibold mb-2">Legal Notice</h1>
          <span className="font-semibold">
            Information according to § 5 TMG
          </span>
          <span className="">LB Racket Stringing Services</span>
          <span className="">Teutoburgerstrasse 38</span>
          <span className="">50678 Cologne, Germany</span>

          <span className="font-semibold mt-6">Represented by</span>
          <span className="">Luke Barnes</span>

          <span className="font-semibold mt-6">Contact</span>
          <span className="">Phone: +49 (0) 1525 3407173</span>
          <span className="">Email: lbracketstringingservices@gmail.com</span>

          <span className="font-semibold mt-6">
            Company Registration Details
          </span>
          <span className="">Tax Office: Cologne Old Town</span>
          <span className="">Economic ID-Nr. DE454212205</span>

          <span className="mt-6">
            VAT ID: Not required in accordance with § 19 UStG (Small Business
            Regulation)
          </span>
          <span className="mt-6">
            Responsible for content according to § 18 Abs. 2 MStV: Luke Barnes
          </span>
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
              https://www.lbrss.com
            </Link>
          </span>
          <span className="font-semibold mt-6">Registerangaben</span>
          <span className="">Finanzamt: Köln-Nord</span>
          <span className="">Steuernummer: 5217/5334/1466</span>
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
