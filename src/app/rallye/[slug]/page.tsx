import { notFound } from 'next/navigation'
import RallyStationTemplate from '../../../components/RallyStationTemplate'
import { getStationBySlug, rallyStations } from '../../../data/rallyStations'

interface PageProps {
  params: {
    slug: string
  }
}

// Generate static params for all stations
export async function generateStaticParams() {
  return rallyStations.map((station) => ({
    slug: station.slug,
  }))
}

export default function RallyStationPage({ params }: PageProps) {
  const station = getStationBySlug(params.slug)

  // Wenn die Station nicht gefunden wurde, zeige 404
  if (!station) {
    notFound()
  }

  return (
    <RallyStationTemplate
      stationNumber={station.number}
      stationName={station.name}
      pageId={`rallye-${station.slug}`}
      imagePath={station.imagePath}
      textBlocks={station.textBlocks}
      question={station.question}
      expectedAnswer={station.expectedAnswer}
    />
  )
}
