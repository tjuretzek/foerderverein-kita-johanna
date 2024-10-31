import { Metadata } from 'next'

const socialMedia = {
  title: 'Förderverein Kita Johanna e.V.',
  images: [
    {
      url: 'https://foerderverein-kita-johanna.de/banner.png',
      width: 1280,
      height: 720,
      alt: 'Förderverein Kita Johanna e.V.',
    },
  ],
}

export const metaData: { [key: string]: Metadata } = {
  home: {
    title: 'Förderverein Kita Johanna e.V. - Alfhausen',
    description:
      'Freunde und Förderer Kita Familienzentrum Johanna Alfhausen e.V. - Wir sind ein gemeinnütziger Verein, der sich zum Ziel gesetzt hat, die Arbeit der Kita Johanna zu unterstützen.',
    keywords: ['alfhausen', 'kita johanna', 'förderverein'],
    alternates: {
      canonical: `https://foerderverein-kita-johanna.de`,
    },
    openGraph: {
      type: 'website',
      url: 'https://foerderverein-kita-johanna.de',
      locale: 'de_DE',
      description:
        'Freunde und Förderer Kita Familienzentrum Johanna Alfhausen e.V. - Wir sind ein gemeinnütziger Verein, der sich zum Ziel gesetzt hat, die Arbeit der Kita Johanna zu unterstützen.',
      siteName: 'Förderverein Kita Johanna e.V.',
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
    title: 'Mitglied Werden | Förderverein Kita Johanna e.V. - Alfhausen',
    description:
      'Seid dabei! Zusammen sind wir stark! Der jährliche Mitgliedsbeitrag beträgt 12€. Auch ohne Mitgliedschaft kann gespendet werden.',
    keywords: ['alfhausen', 'kita johanna', 'förderverein', 'mitglied werden'],
    alternates: {
      canonical: `https://foerderverein-kita-johanna.de/mitglied-werden`,
    },
    openGraph: {
      type: 'website',
      url: 'https://foerderverein-kita-johanna.de/mitglied-werden',
      locale: 'de_DE',
      description:
        'Seid dabei! Zusammen sind wir stark! Der jährliche Mitgliedsbeitrag beträgt 12€. Auch ohne Mitgliedschaft kann gespendet werden.',
      siteName: 'Förderverein Kita Johanna e.V.',
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
    title: 'Spenden | Förderverein Kita Johanna e.V. - Alfhausen',
    description:
      'Jede Spende hilft die Ziele des Fördervereins zu erreichen. Der Förderverein Kita Johanna e.V. ist ein gemeinnütziger Verein und berechtigt Spendenquittungen auszustellen.',
    keywords: ['alfhausen', 'kita johanna', 'förderverein', 'spenden'],
    alternates: {
      canonical: `https://foerderverein-kita-johanna.de/spenden`,
    },
    openGraph: {
      type: 'website',
      url: 'https://foerderverein-kita-johanna.de/spenden',
      locale: 'de_DE',
      description:
        'Jede Spende hilft die Ziele des Fördervereins zu erreichen. Der Förderverein Kita Johanna e.V. ist ein gemeinnütziger Verein und berechtigt Spendenquittungen auszustellen.',
      siteName: 'Förderverein Kita Johanna e.V.',
      ...socialMedia,
    },
    twitter: {
      card: 'summary_large_image',
      description:
        'Jede Spende hilft die Ziele des Fördervereins zu erreichen. Der Förderverein Kita Johanna e.V. ist ein gemeinnütziger Verein und berechtigt Spendenquittungen auszustellen.',
      ...socialMedia,
    },
  },
  kontakt: {
    title: 'Kontakt | Förderverein Kita Johanna e.V. - Alfhausen',
    description:
      'Sie haben Fragen, Ideen oder Anregungen? Dann treten Sie mit uns in Kontakt. Wir freuen uns über jeden Beitrag!',
    keywords: ['alfhausen', 'kita johanna', 'förderverein', 'kontakt'],
    alternates: {
      canonical: `https://foerderverein-kita-johanna.de/kontakt`,
    },
    openGraph: {
      type: 'website',
      url: 'https://foerderverein-kita-johanna.de/kontakt',
      locale: 'de_DE',
      description:
        'Sie haben Fragen, Ideen oder Anregungen? Dann treten Sie mit uns in Kontakt. Wir freuen uns über jeden Beitrag!',
      siteName: 'Förderverein Kita Johanna e.V.',
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
    title: 'Datenschutzerklärung | Förderverein Kita Johanna e.V. - Alfhausen',
    description:
      'Wir weisen darauf hin, dass zum Zwecke der Mitgliedschaft und Mitgliederverwaltung folgende automatisierte Daten der Mitglieder gespeichert, verarbeitet und genutzt werden: Name, Name des Kindes (optional), Anschrift, Telefonnummer, E-Mail-Adresse und Bankverbindung.',
    keywords: ['alfhausen', 'kita johanna', 'förderverein', 'datenschutz'],
    alternates: {
      canonical: `https://foerderverein-kita-johanna.de/datenschutz`,
    },
    openGraph: {
      type: 'website',
      url: 'https://foerderverein-kita-johanna.de/datenschutz',
      locale: 'de_DE',
      description:
        'Wir weisen darauf hin, dass zum Zwecke der Mitgliedschaft und Mitgliederverwaltung folgende automatisierte Daten der Mitglieder gespeichert, verarbeitet und genutzt werden: Name, Name des Kindes (optional), Anschrift, Telefonnummer, E-Mail-Adresse und Bankverbindung.',
      siteName: 'Förderverein Kita Johanna e.V.',
      ...socialMedia,
    },
    twitter: {
      card: 'summary_large_image',
      description:
        'Wir weisen darauf hin, dass zum Zwecke der Mitgliedschaft und Mitgliederverwaltung folgende automatisierte Daten der Mitglieder gespeichert, verarbeitet und genutzt werden: Name, Name des Kindes (optional), Anschrift, Telefonnummer, E-Mail-Adresse und Bankverbindung.',
      ...socialMedia,
    },
  },
}
