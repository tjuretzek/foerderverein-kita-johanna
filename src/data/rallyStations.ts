export interface RallyStation {
  number: number
  name: string
  slug: string
  imagePath: string
  textBlocks: {
    text: string
    className?: string
  }[]
  question: string
  expectedAnswer: string
}

export const rallyStations: RallyStation[] = [
  {
    number: 1,
    name: 'Kita und Familienzentrum Johanna',
    slug: '1-kita-und-familienzentrum-johanna',
    imagePath: '/images/rallye/1-kita-johanna.jpg',
    textBlocks: [
      {
        text: 'Die kommunale Kindertagesstätte Johanna in Alfhausen wurde am 03.08.2016 eröffnet. Der Bau wurde im April 2018 fertiggestellt und mit der Schlüsselübergabe an viele Kinder übergeben.',
      },
      {
        text: 'Der moderne Kindergarten wurde von den Architekten von BW-Architektur geplant und mit einer Holzfassade sowie einem Dach aus Titanzink von RHEINZINK realisiert.',
        className: 'text-gray-700',
      },
      {
        text: 'Schauen Sie sich die Eingangstür genau an.',
        className: 'text-gray-600',
      },
    ],
    question: 'Welche Farbe hat die Tür des Johanna Kindergartens?',
    expectedAnswer: 'Orange',
  },
  {
    number: 2,
    name: 'Markthalle Alfhausen',
    slug: '2-markthalle-alfhausen',
    imagePath: '/images/rallye/2-markthalle-alfhausen.jpg',
    textBlocks: [
      {
        text: 'Die Markthalle Alfhausen wurde im Frühjahr 2017 gegründet und nach über einem Jahr intensiver Konzeptarbeit von vier Gleichgesinnten ins Leben gerufen. Nach dem Vorbild der großen europäischen Markthallen aus dem 19. Jahrhundert bietet sie Einwohnern und Besuchern einen zentralen Marktplatz für regionale und nachhaltig produzierte Lebensmittel.',
      },
      {
        text: 'Das Besondere an der Markthalle ist die breite Produktpalette aus der Region sowie Mitmachangebote wie Brotbacken nach alten Rezepten, Koch- und Ernährungskurse, Eventcatering und Erlebnisgastronomie. Die Markthalle steht für Regionalität, Nachhaltigkeit, Qualität und Bodenständigkeit – und möchte Alfhausen zu einer Oase der Sinne und schönen Dinge machen.',
        className: 'text-gray-700',
      },
      {
        text: 'Schauen Sie sich das Angebot der Markthalle genau an.',
        className: 'text-gray-600',
      },
    ],
    question: 'An welchen Tagen hat die Markthalle Alfhausen geöffnet?',
    expectedAnswer: 'Freitags und Samstags',
  },
  {
    number: 3,
    name: 'Kirch-Hof an der St. Johannis Kirche',
    slug: '3-kirch-hof-an-der-st-johannis-kirche',
    imagePath: '/images/rallye/3-kirch-hof.jpg',
    textBlocks: [
      {
        text: 'Die St. Johannis Pfarrkirche in Alfhausen wurde Ende des 15. Jahrh. als dreischiffige Hallenkirche im spätgotischen Stil gebaut. Der alte, romanische Turm blieb aber in seiner Substanz erhalten, er wurde lediglich dem Neubau angepasst und auf 46,7 erhöht. In den Jahren 1883/84 erfolgte eine Erweiterung in dem vor das Langhaus ein Querschiff gesetzt wurde. Die Langhauskirche erhielt damit die Form einer Kreuzkirche.',
      },
      {
        text: 'Um die Kirche herum ist die Kirchhöfnerei entstanden, eine kleine, eng aneinander gebaute Häuserzeile, die eine Kirchburg entstehen ließ. Heute ist die Kirchhöfnerei weit über die Grenzen Alfhausen als besonderes Schmuckstück bekannt und ein besonderer Anziehungspunkt für Ausflügler und Besucher.',
        className: 'text-gray-700',
      },
      {
        text: 'Die Figur auf dem Kirchhof nennt man „die Utroiper". Ältere Mitbürger des Kirchspieles Alfhausen erinnern sich noch, als es noch nicht selbstverständlich war, dass in jedem Haus eine Tageszeitung gelesen wurde und Johannes Stock an jedem Sonntag nach dem Hochamt auf dem Kirchplatz mit der Glocke in der Hand und dem Ausruf „Bekanntmachungen" die Kirchenbesucher um sich scharrte.',
        className: 'text-gray-700',
      },
      {
        text: 'Schauen Sie sich die Häuser in der Kirchhöfnerei genau an und suchen Sie nach den Jahreszahlen.',
        className: 'text-gray-600',
      },
    ],
    question: 'Wie alt ist das Haus mit der Hausnummer 2?',
    expectedAnswer: '1796',
  },
  {
    number: 4,
    name: 'Feuerwehr Alfhausen',
    slug: '4-feuerwehr-alfhausen',
    imagePath: '/images/rallye/4-feuerwehr.jpg',
    textBlocks: [
      {
        text: 'Die Freiwillige Feuerwehr Alfhausen wurde 1896 gegründet. Die Feuerwehr Alfhausen übernimmt zahlreiche Aufgaben zum Schutz der Bevölkerung und der Umwelt in ihrer Gemeinde: Brandbekämpfung, Hilfeleistung bei Unfällen, technische Hilfe bei Naturereignissen sowie Rettung von Menschen und Tieren gehören dazu.',
      },
      {
        text: 'Außerdem verfügt Alfhausen über eine Tauch- und Wasserrettungsgruppe als spezielle Einheit. Die Feuerwehr ist eine freiwillige Feuerwehr, das heißt, die Mitglieder engagieren sich ehrenamtlich. Unter dem neuen Feuerwehrhaus in Alfhausen befindet sich ein Bunker (Zivilschutzanlage), der etwa Ende der 1980er Jahre gebaut wurde.',
        className: 'text-gray-700',
      },
      {
        text: 'Schauen Sie sich das Feuerwehr-Schild genau an und achten Sie auf die Symbole.',
        className: 'text-gray-600',
      },
    ],
    question: 'Was bedeuten die vier Symbole auf dem Feuerwehr-Schild?',
    expectedAnswer: 'Retten – Bergen – Löschen – Schützen',
  },
  {
    number: 5,
    name: 'Heimathaus',
    slug: '5-heimathaus',
    imagePath: '/images/rallye/5-heimathaus.jpg',
    textBlocks: [
      {
        text: 'Das Heimathaus ist ein 200 Jahre altes Heuerhaus (erbaut 1798) vom Hof Ratermann in Heeke. Es wurde an seinem alten Standort abgetragen und unter den strengen Augen des Denkmalschutzes im ehemaligen Pfarrgarten unter alten Baumbeständen an der Thiener Straße wieder aufgebaut.',
      },
      {
        text: 'Vom Urzustand her ist das Haus der Typ eines alten Deelen-Durchgangshauses. Es stellt in der Entwicklung der niederdeutschen Baukultur ein Verbindungsglied zum niederdeutschen Hallenhaus dar. Das Haus ist jetzt seit vielen Jahren Mittelpunkt des Heimatvereins.',
        className: 'text-gray-700',
      },
      {
        text: 'Zählen Sie die Fenster des Heimathauses.',
        className: 'text-gray-600',
      },
    ],
    question: 'Wieviel Fenster hat das Heimathaus?',
    expectedAnswer: '16',
  },
  {
    number: 6,
    name: 'Ehrenmal am Friedhof',
    slug: '6-ehrenmal-am-friedhof',
    imagePath: '/images/rallye/6-ehrenmal-am-friedhof.jpg',
    textBlocks: [
      { text: 'Willkommen am Ehrenmal am Friedhof in Alfhausen!' },
      { text: 'Zählen Sie die Gedenktafeln am Ehrenmal.', className: 'text-gray-600' },
    ],
    question: 'Wieviele Gedenktafeln sind beim Ehrenmal zu sehen?',
    expectedAnswer: '4',
  },
  {
    number: 7,
    name: 'Alte Schmiede Schmiesing',
    slug: '7-alte-schmiede',
    imagePath: '/images/rallye/7-alte-schmiede.jpg',
    textBlocks: [
      {
        text: 'Errichtet wurde das Gebäude um 1900 in Fachwerkbauweise durch Bernhard Lohmann. In den 1950er Jahren wurde die Westseite massiv erweitert, um Platzbedarf gerecht zu werden. Die Schmiede enthält eine weitgehend originale Ausstattung: gemauerte Esse mit zwei Feuerstellen, Rauchabzug, Kohlenbunker, Blasebalg (später elektrifiziert), große Ambosse, eine Vielzahl von Werkzeugen wie Zangen, Hämmer etc.',
      },
      {
        text: 'Der Schmiedebetrieb wurde 1990 eingestellt. Danach verfiel das Gebäude bis der Heimatverein Alfhausen 2005, in Absprache mit dem Denkmalschutz, mit der Restaurierung begann. Die Alte Schmiede ist als Einzeldenkmal im Denkmalatlas Niedersachsen verzeichnet – wegen ihrer historischen, technischen und städtebaulichen Bedeutung.',
        className: 'text-gray-700',
      },
      {
        text: 'Schauen Sie sich die Informationstafel an der Schmiede genau an.',
        className: 'text-gray-600',
      },
    ],
    question: 'Wie hießen die Eltern von Franz Schmiesing?',
    expectedAnswer: 'Maria und Martin Schmiesing',
  },
  {
    number: 8,
    name: 'Klause beim Hof Bohmann',
    slug: '8-klause-beim-hof-bohmann',
    imagePath: '/images/rallye/8-klause-beim-hof-bohmann.jpg',
    textBlocks: [
      { text: 'Willkommen an der Klause beim Hof Bohmann!' },
      {
        text: 'Schauen Sie sich die Darstellung von Jesus genau an.',
        className: 'text-gray-600',
      },
    ],
    question: 'Welche Farbe hat das Gewand von Jesus?',
    expectedAnswer: 'Rot, beige',
  },
  {
    number: 9,
    name: 'Großer Stuhl',
    slug: '9-grosser-stuhl',
    imagePath: '/images/rallye/9-grosser-stuhl.jpg',
    textBlocks: [
      {
        text: 'Am Hexenboll wurde durch den Heimatverein Alfhausen der Stuhl und das Fenster aufgestellt. Der Stuhl wurde gestiftet von Marianne Dresen.',
      },
      {
        text: 'Schauen Sie sich den Holzkasten am Stuhl genau an.',
        className: 'text-gray-600',
      },
    ],
    question: 'Was befindet sich in dem Holzkasten, der an dem Stuhl hängt?',
    expectedAnswer: 'Ein Fernglas',
  },
  {
    number: 10,
    name: 'Alte Mühle am Friesenweg',
    slug: '10-alte-muehle-am-friesenweg',
    imagePath: '/images/rallye/10-alte-muehle.jpg',
    textBlocks: [
      {
        text: 'Die Mühle wurde 1951 von Familie Wiethe erbaut. Schwerpunkt war der Verkauf von Tierfutter. Bis heute wird sie mittlerweile von der 2. Generation betrieben.',
      },
      {
        text: 'Schauen Sie sich die Fenster der Mühle genau an und achten Sie auf die Pappen mit Tierbildern.',
        className: 'text-gray-600',
      },
    ],
    question: 'Welche Tiere sind auf den Pappen im Fenster zu sehen?',
    expectedAnswer: 'Huhn, Schwein, Katze, Hund, Kuh, Hase',
  },
  {
    number: 11,
    name: 'Grotte am Altenheim',
    slug: '11-grotte-am-altenheim',
    imagePath: '/images/rallye/11-grotte-am-altenheim.jpg',
    textBlocks: [
      {
        text: 'Das St. Antonius-Stift wurde als Wohnhaus für Gemeindeschwestern 1915 gegründet. 1922 entstand schließlich das Krankenhaus mit 10 Betten. Im Jahr 1972 musste das Antonius-Stift vom Beleg-Krankenhaus zum Seniorenpflegeheim umstrukturiert werden und verfügte über 16 Plätze.',
      },
      {
        text: 'Es folgte im Laufe der Jahre eine Vielzahl von Baumaßnahmen und unser St. Antonius-Stift verfügt jetzt über 49 vollstationäre Pflegeplätze mit eingestreuter Kurzzeitpflege. Im Jahr 2018 wurde der Mehrgenerationengarten feierlich eingeweiht.',
        className: 'text-gray-700',
      },
      {
        text: 'Zählen Sie die Holzpfähle an der Grotte.',
        className: 'text-gray-600',
      },
    ],
    question: 'Wieviele Holzpfälle könnt ihr zählen an der Grotte?',
    expectedAnswer: '30',
  },
  {
    number: 12,
    name: 'Polizei',
    slug: '12-polizei',
    imagePath: '/images/rallye/12-polizei.jpg',
    textBlocks: [
      {
        text: 'Die Polizeistation Alfhausen ist zuständig für die Gemeinden Alfhausen und Rieste mit insgesamt etwa 7.100 Bürgern. Sie ist grundsätzlich wochentags von 8.00 – 16.00 Uhr erreichbar.',
      },
      {
        text: 'Schauen Sie sich die Telefonnummern am Eingang genau an.',
        className: 'text-gray-600',
      },
    ],
    question: 'Wie ist die Telefonnummer für Vertretungsfälle?',
    expectedAnswer: '05439/969-0',
  },
  {
    number: 13,
    name: 'Malteser Hilfsdienst',
    slug: '13-malteser',
    imagePath: '/images/rallye/13-malteser.jpg',
    textBlocks: [
      {
        text: 'Die Malteser in Alfhausen sind ein Ortsverband des Malteser Hilfsdienstes e. V. Sie bieten verschiedenste soziale und medizinische Dienste an – sowohl ehrenamtlich als auch hauptamtlich.',
      },
      {
        text: 'Die Aktivitäten sind vielfältig: Erste-Hilfe-Kurse, Sanitätsdienst bei Veranstaltungen, Katastrophenschutz, Fahrdienst für Menschen mit Behinderungen, Hausnotruf, Hospiz- und Palliativdienst, Herzenswunsch-Krankenwagen, Malteser Jugend, Mobiler Einkaufswagen und Schulsanitätsdienst.',
        className: 'text-gray-700',
      },
      {
        text: 'Schauen Sie sich die Informationen zum mobilen Einkaufswagen genau an.',
        className: 'text-gray-600',
      },
    ],
    question: 'An welchen Tagen fährt der mobile Einkaufswagen in Alfhausen?',
    expectedAnswer: 'Jeden 2. Dienstag, Mittwochs 14-tägig',
  },
  {
    number: 14,
    name: 'Rathaus',
    slug: '14-rathaus',
    imagePath: '/images/rallye/14-rathaus.jpg',
    textBlocks: [
      {
        text: 'Alfhausen, im sagenumwobenen Giersfeld, zu Füßen des Heiligenberges gelegen, ist ein über tausend Jahre altes Kirchdorf. Das Dorf wurde 977 erstmalig urkundlich erwähnt. Wahrzeichen der Gemeinde ist die alte Kirche mit dem Wehrturm.',
      },
      {
        text: 'Auf einer Größe von 39 km² leben in Alfhausen heute 4.169 Einwohner. Auf silbernem Grund zeigt das Wappen der Gemeinde Alfhausen einen sechszackigen roten Stern unter einem Turnierkragen.',
        className: 'text-gray-700',
      },
      {
        text: 'Schauen Sie sich das Gemeindewappen genau an.',
        className: 'text-gray-600',
      },
    ],
    question: 'Welches Symbol ist im Wappen von Alfhausen?',
    expectedAnswer: 'Sechseckiger roter Stern',
  },
  {
    number: 15,
    name: 'Grundschule',
    slug: '15-grundschule',
    imagePath: '/images/rallye/15-schule.jpg',
    textBlocks: [
      {
        text: 'Der Schulträger der Grundschule Alfhausen ist die Samtgemeinde Bersenbrück. Die Schule wird seit dem 1. August 1997 als selbstständige, "Verlässliche Grundschule" geführt.',
      },
      {
        text: 'Das zum 1. Februar 2014 erweiterte, fertig gestellte Grundschulgebäude umfasst inzwischen acht Klassenräume mit einem jeweils dazugehörigen Gruppenraum. Zudem verfügt die Grundschule über eine großzügige Mensa mit 60 Sitzplätzen und einer Pausenhalle mit Bühne.',
        className: 'text-gray-700',
      },
      {
        text: 'Schauen Sie sich die Hauswand der Paul-Moor-Schule genau an, wenn Sie von der Bahnhofsstraße hineinfährt.',
        className: 'text-gray-600',
      },
    ],
    question:
      'Welcher Gegenstand an der Hauswand der Paul-Moor-Schule sticht besonders hervor, wenn man die Einfahrt von der Bahnhofsstraße aus hineinfährt?',
    expectedAnswer: 'Eine große Uhr',
  },
  {
    number: 16,
    name: 'Wäldchen am alten Bahnhof',
    slug: '16-waeldchen-am-alten-bahnhof',
    imagePath: '/images/rallye/16-waeldchen-am-bahnhof.jpg',
    textBlocks: [
      {
        text: 'Nachdem der Bau der Bahnstrecke Oldenburg–Osnabrück am 30. Juni 1876 vollendet wurde, erreichte der erste Probezug zur Streckenabnahme am selben Tag Alfhausen. Die offizielle Eröffnung erfolgte am 15. Oktober 1876.',
      },
      {
        text: 'Seit Übernahme des Personennahverkehrs auf der Strecke am 5. November 2000 durch die NordWestBahn wird Alfhausen nicht mehr von Personenzügen bedient. Nach zahlreichen Forderungen wurde der Bahnhof Alfhausen 2015 von der niedersächsischen Landesregierung in die Liste der zu reaktivierenden Bahnhalte aufgenommen.',
        className: 'text-gray-700',
      },
      {
        text: 'Schauen Sie sich den nostalgischen Eisenbahn-Waggon genau an und zählen Sie die Bahnschwellen.',
        className: 'text-gray-600',
      },
    ],
    question:
      'Auf wie vielen Bahnschwellen liegen die Schienen, auf denen der nostalgische Eisenbahn-Waggon steht?',
    expectedAnswer: '9',
  },
  {
    number: 17,
    name: 'Skateanlage am Sportplatz',
    slug: '17-skateanlage-am-sportplatz',
    imagePath: '/images/rallye/17-skateanlage.jpg',
    textBlocks: [
      {
        text: 'Die Skateranlage ist Teil des Sportplatzes in Alfhausen. Den Sportplatz betreibt der Verein SV Alfhausen e. V. Der Verein wurde 1947 gegründet und seine Vereinsfarben sind Rot‑Weiß. Neben Fußball gibt es auch andere Sportarten (z. B. Volleyball, Kindertanzen).',
      },
      {
        text: 'Der Verein nutzt regelmäßig seine Sportanlage für Veranstaltungen, Jugendturniere und Festlichkeiten.',
        className: 'text-gray-700',
      },
      {
        text: 'Schauen Sie sich die Skateranlage genau an und achten Sie auf die verschiedenen Nutzungsmöglichkeiten.',
        className: 'text-gray-600',
      },
    ],
    question: 'Mit welchen Fahrzeugen kann man auf der Skateranlage fahren?',
    expectedAnswer: 'Rollschuhe/Inline-Skates, Roller, Scooter, Skateboard, Fahrrad',
  },
]

// Helper Funktion um eine Station anhand ihres Slugs zu finden
export function getStationBySlug(slug: string): RallyStation | undefined {
  return rallyStations.find((station) => station.slug === slug)
}

// Helper Funktion um den Namen einer Station anhand der pageId zu finden (für Overview)
export function getStationNameByPageId(pageId: string): string {
  // pageId Format: "rallye-{slug}"
  const slug = pageId.replace('rallye-', '')
  const station = getStationBySlug(slug)
  return station ? `Station ${station.number}: ${station.name}` : pageId
}
