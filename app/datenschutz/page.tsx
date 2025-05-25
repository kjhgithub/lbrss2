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
      <h2 className="text-xl font-semibold">
        Verantwortlich im Sinne der DSGVO ist:
      </h2>
      <p> [Name] [ladungsfähige Anschrift] [E-Mail-Adresse]</p>
      <p>
        Sollten Sie per E-Mail mit uns Kontakt aufnehmen, werden die
        mitgeteilten Daten von uns gespeichert, um Ihr Anliegen zu bearbeiten.
      </p>
      <h2 className="text-xl font-semibold">
        Zu den verarbeiteten Daten zählen:
      </h2>
      <p>
        [Ihr Name] [Ihre E-Mail-Adresse] [Ihre Telefonnummer] Wir werden die
        Daten löschen, sobald die Speicherung nicht mehr erforderlich ist oder
        die Verarbeitung einschränken, falls gesetzliche Aufbewahrungspflichten
        bestehen.
      </p>
      <h2 className="text-xl font-semibold">Betroffenenrechte</h2>
      <p>
        Sie haben als betroffene Person, das Recht auf Auskunft, das Recht auf
        Berichtigung oder Löschung, das Recht auf Einschränkung der Verarbeitung
        und das Recht auf Widerspruch gegen die Verarbeitung Ihrer Daten. Sofern
        Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit
        Wirkung für die Zukunft widerrufen. Bitte richten Sie Ihren Widerspruch
        [oder Widerruf] formlos an folgende Adresse: [Adresse, E-Mail-Adresse
        (oder Verweis nach oben), ggf. Datenschutzbeauftragter] Darüber hinaus
        haben Sie das Recht auf Datenübertragbarkeit. Sie haben weiter das
        Recht, sich bei einer Aufsichtsbehörde über die Verarbeitung zu
        beschweren. Eine Liste der entsprechenden Behörden finden Sie unter:{" "}
        <Link
          href="
        https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
        >
          www.bfdi.bund
        </Link>
        .
      </p>
      <h2 className="text-xl font-semibold">
        Rechtliche Hinweise Betroffenenrechte
      </h2>
      <p>
        Sollte die Datenverarbeitung nicht auf Einwilligung des Betroffenen
        beruhen (siehe Kontaktformular), muss das Widerrufsrecht nicht angegeben
        werden (Art. 13 Abs. 2 lit. c DSGVO).
      </p>
      <h2 className="text-xl font-semibold">Hosting</h2>
      <p>
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
        ein: GitHub Inc. 88 Colin P Kelly Jr St San Francisco, CA 94107 United
        States Dieser ist Empfänger Ihrer personenbezogenen Daten. Dies
        entspricht unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S.
        1 lit. f DSGVO, selbst keinen Server in unseren Räumlichkeiten vorhalten
        zu müssen. Serverstandort ist USA. Weitere Informationen zu
        Widerspruchs- und Beseitigungsmöglichkeiten gegenüber GitHub finden Sie
        unter:{" "}
        <Link href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages">
          GitHub Docs
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
        <Link href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-data-protection-addendum#attachment-1--the-standard-contractual-clauses-processors">
          GitHub Docs
        </Link>
      </p>
      <h2 className="text-xl font-semibold">Rechtliche Hinweise</h2>
      Grundsätzlich ist ein Auftragsverarbeitungsvertrag mit dem Hoster
      abzuschließen. Das bayerische Landesamt für Datenschutzaufsicht hat für
      das Hosting rein statischer Websites eine Ausnahme gemacht. Für den Fall,
      dass die Webseite der Selbstdarstellung dient, z.B. von Vereinen oder
      Kleinunternehmen, keine personenbezogenen Daten an den Betreiber fließen
      und kein Tracking stattfindet, liegt keine Auftragsverarbeitung vor.
      Weiter heißt es: „Die Tatsache, dass auch beim Hosting von statischen
      Webseiten zwangsläufig IP-Adressen, d.h. personenbezogene Daten,
      verarbeitet werden müssen, führt nicht zur Annahme einer
      Auftragsverarbeitung. Das wäre nicht sachgerecht. Die (kurzfristige)
      IP-Adressenspeicherung ist vielmehr noch der TK-Zugangsvermittlung des
      Website-Hosters nach dem TKG zuzurechnen und dient in erster Linie
      Sicherheitszwecken des Hosters.“ Wir gehen davon aus, dass diese Ausnahme
      auf GitHub Pages anzuwenden ist.
    </div>
  );
}

export default page;
