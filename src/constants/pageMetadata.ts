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

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.',
  alternateName: 'Freunde und Förderer Kita und Familienzentrum Johanna Alfhausen e.V.',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/banner.png`,
  description:
    'Gemeinnütziger Förderverein, der die Arbeit der Kita und des Familienzentrums Johanna in Alfhausen finanziell und organisatorisch unterstützt.',
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
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Vorstand',
    email: 'foerderverein-kita-johanna@t-online.de',
    telephone: '+49 5464 9678720',
    availableLanguage: 'German',
  },
  sameAs: [],
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
