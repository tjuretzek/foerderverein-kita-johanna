import { useMemo } from 'react'
import { Helmet, HelmetProvider, HelmetServerState } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

import { TITLE } from 'constants/global'

const PAGE_METADATA = {
  start: {
    title: TITLE,
    description:
      'Freunde und Förderer Kita Familienzentrum Johanna Alfhausen e.V. - Wir sind ein gemeinnütziger Verein, der sich zum Ziel gesetzt hat, die Arbeit der Kita Johanna zu unterstützen.',
    keywords: 'alfhausen kita johanna förderverein',
  },
  'mitglied-werden': {
    title: `Mitglied Werden | ${TITLE}`,
    description:
      'Seid dabei! Zusammen sind wir stark! Der jährliche Mitgliedsbeitrag beträgt 12€. Auch ohne Mitgliedschaft kann gespendet werden.',
    keywords: 'alfhausen kita johanna förderverein mitglied werden',
  },
}

const helmetContext = { helmet: {} as HelmetServerState }

function PageMetadata() {
  const location = useLocation()

  const metadata = useMemo(() => {
    const route = location.pathname.split('/').reverse()[0] as keyof typeof PAGE_METADATA
    return PAGE_METADATA[route] || PAGE_METADATA['start']
  }, [location])

  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>{metadata.title}</title>
        <meta content={metadata.title} property='og:title' />
        <meta name='description' content={metadata.description} property='og:description' />
        <meta name='keywords' content={metadata.keywords} property='og:keywords' />
      </Helmet>
    </HelmetProvider>
  )
}

export default PageMetadata
