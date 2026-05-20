import { Metadata } from 'next'

export const siteUrl = 'https://foerderverein-kita-johanna.de'

const socialMedia = {
  title: 'Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.',
  images: [
    {
      url: `${siteUrl}/banner.png`,
      width: 1280,
      height: 720,
      alt: 'Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.',
    },
  ],
}

const baseIcons: Metadata['icons'] = {
  icon: [
    { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
  ],
  apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#ffffff' }],
}

const orgId = `${siteUrl}/#organization`
const websiteId = `${siteUrl}/#website`

const boardMembers = [
  { name: 'Jennifer Feldkamp', jobTitle: 'Vorsitzende' },
  { name: 'Katharina Rokahr', jobTitle: 'Vorsitzende' },
  { name: 'Anna aus dem Moore', jobTitle: 'Kassenwartin' },
  { name: 'Friederike Olberding', jobTitle: 'Schriftführerin' },
  { name: 'Esta Brinkmann', jobTitle: 'Kassenprüferin' },
  { name: 'Britta Lemmermöhle', jobTitle: 'Kassenprüferin' },
]

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  '@id': orgId,
  name: 'Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.',
  alternateName: 'Freunde und Förderer Kita und Familienzentrum Johanna Alfhausen e.V.',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/banner.png`,
  description:
    'Gemeinnütziger Förderverein, der die Arbeit der Kita und des Familienzentrums Johanna in Alfhausen finanziell und organisatorisch unterstützt.',
  slogan: 'Spiel ist die höchste Form der Kindesentwicklung.',
  email: 'foerderverein-kita-johanna@t-online.de',
  telephone: '+49 5464 9678720',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Alte Schulstraße 8',
    postalCode: '49594',
    addressLocality: 'Alfhausen',
    addressRegion: 'Niedersachsen',
    addressCountry: 'DE',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Alfhausen, Niedersachsen, Deutschland',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Vorstand',
      email: 'foerderverein-kita-johanna@t-online.de',
      telephone: '+49 5464 9678720',
      availableLanguage: 'German',
      areaServed: 'DE',
    },
  ],
  member: boardMembers.map((m) => ({
    '@type': 'Person',
    name: m.name,
    jobTitle: m.jobTitle,
    worksFor: { '@id': orgId },
  })),
  knowsAbout: [
    'Kita-Förderung',
    'Familienzentrum',
    'Frühkindliche Bildung',
    'Gemeinnützige Vereinsarbeit',
    'Alfhausen',
  ],
  nonprofitStatus: 'Nonprofit501c3',
  sameAs: [],
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': websiteId,
  url: siteUrl,
  name: 'Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.',
  inLanguage: 'de-DE',
  publisher: { '@id': orgId },
  description:
    'Offizielle Website des Fördervereins der Kita und des Familienzentrums Johanna in Alfhausen.',
}

const speakable = {
  '@type': 'SpeakableSpecification',
  cssSelector: ['h1', 'h2', 'h3', 'main p'],
}

export const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteUrl}/#webpage`,
  url: siteUrl,
  name: 'Startseite — Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.',
  inLanguage: 'de-DE',
  isPartOf: { '@id': websiteId },
  about: { '@id': orgId },
  primaryImageOfPage: `${siteUrl}/banner.png`,
  speakable,
}

export const buildBreadcrumb = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.name,
    item: `${siteUrl}${item.path}`,
  })),
})

export const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${siteUrl}/kontakt#webpage`,
  url: `${siteUrl}/kontakt`,
  name: 'Kontakt — Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.',
  inLanguage: 'de-DE',
  isPartOf: { '@id': websiteId },
  about: { '@id': orgId },
  mainEntity: { '@id': orgId },
  speakable,
}

export const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${siteUrl}/#aboutpage`,
  url: siteUrl,
  name: 'Über uns — Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.',
  inLanguage: 'de-DE',
  isPartOf: { '@id': websiteId },
  about: { '@id': orgId },
}

export const donateActionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DonateAction',
  name: 'Spende an Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.',
  recipient: { '@id': orgId },
  target: `${siteUrl}/spenden`,
  description:
    'Spenden an den gemeinnützigen Förderverein. Spendenquittungen werden auf Anfrage ausgestellt.',
}

export const membershipOfferJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Offer',
  name: 'Vereinsmitgliedschaft',
  description: 'Jahresmitgliedschaft im Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.',
  price: '12.00',
  priceCurrency: 'EUR',
  url: `${siteUrl}/mitglied-werden`,
  availability: 'https://schema.org/InStock',
  seller: { '@id': orgId },
  eligibleCustomerType: 'https://schema.org/Enduser',
}

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${siteUrl}/#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wer kann Mitglied im Förderverein werden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jede Person kann Mitglied werden. Bei Minderjährigen stellen die gesetzlichen Vertreter den Aufnahmeantrag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie hoch ist der Mitgliedsbeitrag?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der Mitgliedsbeitrag beträgt 12 € pro Jahr — das entspricht 1 € pro Monat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich auch ohne Mitgliedschaft spenden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Spenden sind jederzeit auch ohne Mitgliedschaft willkommen. Der Verein ist gemeinnützig und stellt auf Anfrage Spendenquittungen aus.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wofür verwendet der Förderverein die Mittel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der Verein finanziert Spielgeräte, Einrichtungsgegenstände, Ausflüge und Veranstaltungen der Kita und des Familienzentrums Johanna in Alfhausen — überall dort, wo das Budget der Einrichtung nicht ausreicht.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lautet die Bankverbindung für Spenden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kreissparkasse Bersenbrück, IBAN: DE25 2655 1540 0085 4670 33, BIC: NOLADE21BEB. Empfänger: Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wo befindet sich der Verein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der Verein hat seinen Sitz in der Alten Schulstraße 8, 49594 Alfhausen (Niedersachsen, Deutschland).',
      },
    },
  ],
}

export const metaData: { [key: string]: Metadata } = {
  home: {
    metadataBase: new URL(siteUrl),
    title: 'Förderverein Kita & Familienzentrum Johanna Alfhausen e.V. - Alfhausen',
    description:
      'Freunde und Förderer Kita Familienzentrum Johanna Alfhausen e.V. - Wir sind ein gemeinnütziger Verein, der sich zum Ziel gesetzt hat, die Arbeit der Kita Johanna zu unterstützen.',
    keywords: ['alfhausen', 'kita johanna', 'förderverein'],
    icons: baseIcons,
    manifest: '/site.webmanifest',
    applicationName: 'Förderverein Kita Johanna Alfhausen',
    authors: [{ name: 'Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.' }],
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      type: 'website',
      url: siteUrl,
      locale: 'de_DE',
      description:
        'Freunde und Förderer Kita Familienzentrum Johanna Alfhausen e.V. - Wir sind ein gemeinnütziger Verein, der sich zum Ziel gesetzt hat, die Arbeit der Kita Johanna zu unterstützen.',
      siteName: 'Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.',
      ...socialMedia,
    },
    twitter: {
      card: 'summary_large_image',
      description:
        'Freunde und Förderer Kita Familienzentrum Johanna Alfhausen e.V. - Wir sind ein gemeinnütziger Verein, der sich zum Ziel gesetzt hat, die Arbeit der Kita Johanna zu unterstützen.',
      ...socialMedia,
    },
  },
  mitgliedWerden: {
    title:
      'Mitglied Werden | Förderverein Kita & Familienzentrum Johanna Alfhausen e.V. - Alfhausen',
    description:
      'Seid dabei! Zusammen sind wir stark! Der jährliche Mitgliedsbeitrag beträgt 12€. Auch ohne Mitgliedschaft kann gespendet werden.',
    keywords: ['alfhausen', 'kita johanna', 'förderverein', 'mitglied werden'],
    alternates: {
      canonical: `${siteUrl}/mitglied-werden`,
    },
    openGraph: {
      type: 'website',
      url: `${siteUrl}/mitglied-werden`,
      locale: 'de_DE',
      description:
        'Seid dabei! Zusammen sind wir stark! Der jährliche Mitgliedsbeitrag beträgt 12€. Auch ohne Mitgliedschaft kann gespendet werden.',
      siteName: 'Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.',
      ...socialMedia,
    },
    twitter: {
      card: 'summary_large_image',
      description:
        'Seid dabei! Zusammen sind wir stark! Der jährliche Mitgliedsbeitrag beträgt 12€. Auch ohne Mitgliedschaft kann gespendet werden.',
      ...socialMedia,
    },
  },
  spenden: {
    title: 'Spenden | Förderverein Kita & Familienzentrum Johanna Alfhausen e.V. - Alfhausen',
    description:
      'Jede Spende hilft die Ziele des Fördervereins zu erreichen. Der Förderverein Kita & Familienzentrum Johanna Alfhausen e.V. ist ein gemeinnütziger Verein und berechtigt Spendenquittungen auszustellen.',
    keywords: ['alfhausen', 'kita johanna', 'förderverein', 'spenden'],
    alternates: {
      canonical: `${siteUrl}/spenden`,
    },
    openGraph: {
      type: 'website',
      url: `${siteUrl}/spenden`,
      locale: 'de_DE',
      description:
        'Jede Spende hilft die Ziele des Fördervereins zu erreichen. Der Förderverein Kita & Familienzentrum Johanna Alfhausen e.V. ist ein gemeinnütziger Verein und berechtigt Spendenquittungen auszustellen.',
      siteName: 'Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.',
      ...socialMedia,
    },
    twitter: {
      card: 'summary_large_image',
      description:
        'Jede Spende hilft die Ziele des Fördervereins zu erreichen. Der Förderverein Kita & Familienzentrum Johanna Alfhausen e.V. ist ein gemeinnütziger Verein und berechtigt Spendenquittungen auszustellen.',
      ...socialMedia,
    },
  },
  kontakt: {
    title: 'Kontakt | Förderverein Kita & Familienzentrum Johanna Alfhausen e.V. - Alfhausen',
    description:
      'Sie haben Fragen, Ideen oder Anregungen? Dann treten Sie mit uns in Kontakt. Wir freuen uns über jeden Beitrag!',
    keywords: ['alfhausen', 'kita johanna', 'förderverein', 'kontakt'],
    alternates: {
      canonical: `${siteUrl}/kontakt`,
    },
    openGraph: {
      type: 'website',
      url: `${siteUrl}/kontakt`,
      locale: 'de_DE',
      description:
        'Sie haben Fragen, Ideen oder Anregungen? Dann treten Sie mit uns in Kontakt. Wir freuen uns über jeden Beitrag!',
      siteName: 'Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.',
      ...socialMedia,
    },
    twitter: {
      card: 'summary_large_image',
      description:
        'Sie haben Fragen, Ideen oder Anregungen? Dann treten Sie mit uns in Kontakt. Wir freuen uns über jeden Beitrag!',
      ...socialMedia,
    },
  },
  datenschutz: {
    title:
      'Datenschutzerklärung | Förderverein Kita & Familienzentrum Johanna Alfhausen e.V. - Alfhausen',
    description:
      'Wir weisen darauf hin, dass zum Zwecke der Mitgliedschaft und Mitgliederverwaltung folgende automatisierte Daten der Mitglieder gespeichert, verarbeitet und genutzt werden: Name, Name des Kindes (optional), Anschrift, Telefonnummer, E-Mail-Adresse und Bankverbindung.',
    keywords: ['alfhausen', 'kita johanna', 'förderverein', 'datenschutz'],
    alternates: {
      canonical: `${siteUrl}/datenschutz-bestimmungen`,
    },
    openGraph: {
      type: 'website',
      url: `${siteUrl}/datenschutz-bestimmungen`,
      locale: 'de_DE',
      description:
        'Wir weisen darauf hin, dass zum Zwecke der Mitgliedschaft und Mitgliederverwaltung folgende automatisierte Daten der Mitglieder gespeichert, verarbeitet und genutzt werden: Name, Name des Kindes (optional), Anschrift, Telefonnummer, E-Mail-Adresse und Bankverbindung.',
      siteName: 'Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.',
      ...socialMedia,
    },
    twitter: {
      card: 'summary_large_image',
      description:
        'Wir weisen darauf hin, dass zum Zwecke der Mitgliedschaft und Mitgliederverwaltung folgende automatisierte Daten der Mitglieder gespeichert, verarbeitet und genutzt werden: Name, Name des Kindes (optional), Anschrift, Telefonnummer, E-Mail-Adresse und Bankverbindung.',
      ...socialMedia,
    },
  },
  rallyeNoindex: {
    title: 'Rallye | Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.',
    robots: { index: false, follow: false },
  },
}
