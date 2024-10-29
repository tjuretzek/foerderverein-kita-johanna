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
    metadataBase: new URL('https://foerderverein-kita-johanna.de'),
    description:
      'Freunde und Förderer Kita Familienzentrum Johanna Alfhausen e.V. - Wir sind ein gemeinnütziger Verein, der sich zum Ziel gesetzt hat, die Arbeit der Kita Johanna zu unterstützen.',
    keywords: ['alfhausen', 'kita johanna', 'förderverein'],
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
    metadataBase: new URL('https://foerderverein-kita-johanna.de'),
    description:
      'Seid dabei! Zusammen sind wir stark! Der jährliche Mitgliedsbeitrag beträgt 12€. Auch ohne Mitgliedschaft kann gespendet werden.',
    keywords: ['alfhausen', 'kita johanna', 'förderverein', 'mitglied werden'],
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
}
