import Link from "next/link";
function page() {
  return (
    <>
      <div className="my-6 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold mb-2">Impressum</h1>
        <span className="font-semibold">Anbieter</span>
        <span className="">Luke Barnes</span>
        <span className="">Steinbergerstraße 30</span>
        <span className="">50733 K&ouml;ln, Deutschland</span>
        <span className="font-semibold mt-6">Kontakt</span>
        <span className="">Telefon: +49 (0) 1525 3407173</span>
        <span className="">E-Mail: lbracketstringingservices@gmail.com</span>
        <span className="">Website: https://www.lbrrs.com</span>
        <span className="font-semibold mt-6">Registerangaben</span>
        <span className="">Registergericht: Amtsgericht Köln</span>
        <span className="">Registernummer: tba</span>
        <span className="font-semibold mt-6">Datenschutz</span>
        <Link href="/datenschutz" className="hover:underline">
          https://www.lbrss.com/datenschutz
        </Link>
      </div>
    </>
  );
}

export default page;
