"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function page() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  return (
    <div className="flex flex-col mt-8 gap-2">
      {lang === "en" ? (
        <span className="font-semibold my-2">
          Translation under contruction
        </span>
      ) : null}
      <h1 className="text-3xl font-semibold">Datenschutzerklärung</h1>
      <p>
        Im Folgenden möchten wir Sie aufklären, wie Ihre Daten von uns
        verarbeitet werden.
      </p>
      <h2 className="text-xl font-semibold mt-2">
        Verantwortlich im Sinne der DSGVO ist:
      </h2>
      <p className="flex flex-col mb-2">
        <span className="">Luke Barnes</span>
        <span className="">Steinbergerstraße 30</span>
        <span className="">50733 K&ouml;ln, Deutschland</span>
        <span className="">Email: lbracketstringingservices@gmail.com</span>
      </p>
      <p>
        Sollten Sie per E-Mail mit uns Kontakt aufnehmen, werden die
        mitgeteilten Daten von uns gespeichert, um Ihr Anliegen zu bearbeiten.
        Die Verarbeitung Ihrer Daten im Rahmen der Kontaktaufnahme erfolgt auf
        Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit es um die Anbahnung
        oder Durchführung eines Vertrags geht, oder auf Grundlage von Art. 6
        Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer
        Anfrage).
      </p>
      <h2 className="text-xl font-semibold mt-2">
        Zu den verarbeiteten Daten zählen:
      </h2>
      <p className="flex flex-col">
        <span>Ihr Name</span>
        <span>Ihre Email-Adresse</span>
        <span className="mb-2">
          Ihre Telefonnummer, sofern Sie sie uns diese mitteilen
        </span>
        Wir werden die Daten löschen, sobald die Speicherung nicht mehr
        erforderlich ist oder die Verarbeitung einschränken, falls gesetzliche
        Aufbewahrungspflichten bestehen.
      </p>
      <h2 className="text-xl font-semibold mt-2">Betroffenenrechte</h2>
      <p>
        Sie haben als betroffene Person, das Recht auf Auskunft, das Recht auf
        Berichtigung oder Löschung, das Recht auf Einschränkung der Verarbeitung
        und das Recht auf Widerspruch gegen die Verarbeitung Ihrer Daten. Sofern
        Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit
        Wirkung für die Zukunft widerrufen. Bitte richten Sie Ihren Widerspruch
        formlos an die oben genannte Adresse. Darüber hinaus haben Sie das Recht
        auf Datenübertragbarkeit. Sie haben weiter das Recht, sich bei einer
        Aufsichtsbehörde über die Verarbeitung zu beschweren. Eine Liste der
        entsprechenden Behörden finden Sie unter:{" "}
        <Link
          href="
        https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
          className="underline break-all"
          target="_blank"
        >
          https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
        </Link>
        .
      </p>
      <h2 className="text-xl font-semibold mt-2">
        Rechtliche Hinweise Betroffenenrechte
      </h2>
      <p>
        Sollte die Datenverarbeitung nicht auf Einwilligung des Betroffenen
        beruhen, muss das Widerrufsrecht nicht angegeben werden (Art. 13 Abs. 2
        lit. c DSGVO).
      </p>
      <h2 className="text-xl font-semibold mt-2">
        Rechtliche Hinweise Auftragsverarbeitungsvertrag
      </h2>
      <p>
        Grundsätzlich ist ein Auftragsverarbeitungsvertrag mit dem Hoster
        abzuschließen. Das bayerische Landesamt für Datenschutzaufsicht hat für
        das Hosting rein statischer Websites eine Ausnahme gemacht. Für den
        Fall, dass die Webseite der Selbstdarstellung dient, z.B. von Vereinen
        oder Kleinunternehmen, keine personenbezogenen Daten an den Betreiber
        fließen und kein Tracking stattfindet, liegt keine Auftragsverarbeitung
        vor. Weiter heißt es: „Die Tatsache, dass auch beim Hosting von
        statischen Webseiten zwangsläufig IP-Adressen, d.h. personenbezogene
        Daten, verarbeitet werden müssen, führt nicht zur Annahme einer
        Auftragsverarbeitung. Das wäre nicht sachgerecht. Die (kurzfristige)
        IP-Adressenspeicherung ist vielmehr noch der TK-Zugangsvermittlung des
        Website-Hosters nach dem TKG zuzurechnen und dient in erster Linie
        Sicherheitszwecken des Hosters.“ Wir gehen davon aus, dass diese
        Ausnahme auf GitHub Pages anzuwenden ist.
      </p>
      <h2 className="text-xl font-semibold mt-2">Hosting</h2>
      <p className="flex flex-col">
        Unser Hoster erhebt in sog. Logfiles folgende Daten, die Ihr Browser
        übermittelt: IP-Adresse, die Adresse der vorher besuchten Website
        (Referer Anfrage-Header), Datum und Uhrzeit der Anfrage,
        Zeitzonendifferenz zur Greenwich Mean Time, Inhalt der Anforderung,
        HTTP-Statuscode, übertragene Datenmenge, Website, von der die
        Anforderung kommt und Informationen zu Browser und Betriebssystem. Das
        ist erforderlich, um unsere Website anzuzeigen und die Stabilität und
        Sicherheit zu gewährleisten. Dies entspricht unserem berechtigten
        Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO. Es erfolgt kein
        Tracking und wir haben auf diese Daten keinen direkten Zugriff. Wir
        setzen für die Zurverfügungstellung unserer Website folgenden Hoster
        ein:
        <span className="mt-2">GitHub Inc.</span>
        <span> 88 Colin P Kelly Jr St</span>
        <span className="mb-2">San Francisco, CA 94107 United</span>
        States Dieser ist Empfänger Ihrer personenbezogenen Daten. Dies
        entspricht unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S.
        1 lit. f DSGVO, selbst keinen Server in unseren Räumlichkeiten vorhalten
        zu müssen. Serverstandort ist USA. Weitere Informationen zu
        Widerspruchs- und Beseitigungsmöglichkeiten gegenüber GitHub finden Sie
        unter:{" "}
        <Link
          href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages"
          className="underline mb-2 break-all"
          target="_blank"
        >
          https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages
        </Link>
        Sie haben das Recht der Verarbeitung zu widersprechen. Ob der
        Widerspruch erfolgreich ist, ist im Rahmen einer Interessenabwägung zu
        ermitteln. Die Daten werden gelöscht, sobald der Zweck der Verarbeitung
        entfällt. Die Verarbeitung der unter diesem Abschnitt angegebenen Daten
        ist weder gesetzlich noch vertraglich vorgeschrieben. Die
        Funktionsfähigkeit der Website ist ohne die Verarbeitung nicht
        gewährleistet. GitHub hat Compliance-Maßnahmen für internationale
        Datenübermittlungen umgesetzt. Diese gelten für alle weltweiten
        Aktivitäten, bei denen GitHub personenbezogene Daten von natürlichen
        Personen in der EU verarbeitet. Diese Maßnahmen basieren auf den
        EU-Standardvertragsklauseln (SCCs). Weitere Informationen finden Sie
        unter:{" "}
        <Link
          href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-data-protection-addendum#attachment-1--the-standard-contractual-clauses-processors"
          className="underline mb-2 break-all"
          target="_blank"
        >
          https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-data-protection-addendum#attachment-1--the-standard-contractual-clauses-processors
        </Link>
      </p>
      <h2 className="text-xl font-semibold mt-2">Content Delivery Network</h2>
      <p className="flex flex-col">
        Wir nutzen das Content Delivery Network (CDN) von Cloudflare Germany
        GmbH, Rosental 7, c/o Mindspace, 80331 München Deutschland (Cloudflare),
        um die Sicherheit und die Auslieferungsgeschwindigkeit unserer Website
        zu erhöhen. Dies entspricht unserem berechtigten Interesse (Art. 6 Abs.
        1 lit. f DSGVO). Ein CDN ist ein Netzwerk aus [weltweit] verteilten
        Servern, das in der Lage ist, optimiert Inhalte an den Websitenutzer
        auszuliefern. Für diesen Zweck können personenbezogene Daten in
        Server-Logfiles von Cloudflare verarbeitet werden. Bitte vergleichen Sie
        die Ausführungen unter „Hosting“. Cloudflare ist Empfänger Ihrer
        personenbezogenen Daten und als Auftragsverarbeiter für uns tätig. Die
        entspricht unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S.
        1 lit. f DSGVO, selbst kein Content Delivery Network zu betreiben. Sie
        haben das Recht der Verarbeitung zu widersprechen. Ob der Widerspruch
        erfolgreich ist, ist im Rahmen einer Interessenabwägung zu ermitteln.
        Die Verarbeitung der unter diesem Abschnitt angegebenen Daten ist weder
        gesetzlich noch vertraglich vorgeschrieben. Die Funktionsfähigkeit der
        Website ist ohne die Verarbeitung nicht gewährleistet. Ihre
        personenbezogenen Daten werden von Cloudflare so lange gespeichert, wie
        es für die beschriebenen Zwecke erforderlich ist. Weitere Informationen
        zu Widerspruchs- und Beseitigungsmöglichkeiten gegenüber Cloudflare
        finden Sie unter:
        <Link
          href="https://www.cloudflare.com/de-de/cloudflare-customer-dpa/"
          className="underline break-all mb-2"
          target="_blank"
        >
          https://www.cloudflare.com/de-de/cloudflare-customer-dpa/
        </Link>
        Cloudflare DPA Cloudflare hat Compliance-Maßnahmen für internationale
        Datenübermittlungen umgesetzt. Diese gelten für alle weltweiten
        Aktivitäten, bei denen Cloudflare personenbezogene Daten von natürlichen
        Personen in der EU verarbeitet. Diese Maßnahmen basieren auf den
        EU-Standardvertragsklauseln (SCCs). Weitere Informationen finden Sie
        unter:{" "}
        <Link
          href="https://www.cloudflare.com/cloudflare_customer_SCCs-German.pdf"
          className="underline break-all"
          target="_blank"
        >
          https://www.cloudflare.com/cloudflare_customer_SCCs-German.pdf
        </Link>
      </p>
      <h2 className="text-xl font-semibold mt-2">Externe Links</h2>
      <p className="flex flex-col">
        Auf dieser Website befinden sich Links zu externen Diensten:
        <span className="mt-2">Google Maps</span>
        <span>Instagram-Profil</span>
        <span>WhatsApp Business</span>
        Bitte beachten Sie: Beim Aufruf dieser Links verlassen Sie unsere
        Website. Dabei können durch die jeweiligen Drittanbieter
        personenbezogene Daten (z.B. IP-Adresse) erfasst und verarbeitet werden.
        Auf diese Vorgänge haben wir keinen Einfluss. Es gelten die
        Datenschutzbestimmungen der jeweiligen Anbieter:
        <Link
          href="https://policies.google.com/privacy"
          className="underline break-all"
          target="_blank"
        >
          Google Datenschutzerklärung
        </Link>
        <Link
          href="https://privacycenter.instagram.com/policy"
          className="underline break-all "
          target="_blank"
        >
          Instagram (Meta) Datenschutzerklärung
        </Link>
        <Link
          href="https://www.whatsapp.com/legal/privacy-policy-eea"
          className="underline break-all mb-2"
          target="_blank"
        >
          WhatsApp Datenschutzerklärung
        </Link>
      </p>
      <h2 className="text-xl font-semibold mt-2">
        Änderungen dieser Datenschutzerklärung
      </h2>
      <p className="flex flex-col">
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich
        die rechtlichen Rahmenbedingungen oder Inhalte der Website ändern.
      </p>
    </div>
  );
}

export default page;
