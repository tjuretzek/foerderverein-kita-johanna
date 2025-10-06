import Image from 'next/image'
import RallyPage from './RallyPage'
import RallyPageWrapper from './RallyPageWrapper'

interface TextBlock {
  text: string
  className?: string
}

interface RallyStationTemplateProps {
  stationNumber: number
  stationName: string
  pageId: string
  imagePath: string
  textBlocks: TextBlock[]
  question: string
  expectedAnswer?: string
}

export default function RallyStationTemplate({
  stationNumber,
  stationName,
  pageId,
  imagePath,
  textBlocks,
  question,
}: RallyStationTemplateProps) {
  // WebP Pfad erstellen (JPG durch WebP ersetzen)
  const webpPath = imagePath.replace('.jpg', '.webp')

  const content = (
    <div className='space-y-6'>
      <div className='w-full'>
        <picture>
          <source srcSet={webpPath} type='image/webp' />
          <Image
            src={imagePath}
            alt={stationName}
            width={1024}
            height={678}
            className='w-full rounded-lg shadow-lg'
          />
        </picture>
      </div>
      {textBlocks.map((block, index) => (
        <p key={index} className={block.className || 'font-bold text-gray-700'}>
          {block.text}
        </p>
      ))}
    </div>
  )

  return (
    <RallyPageWrapper>
      <RallyPage
        pageId={pageId}
        title={`Station ${stationNumber}: ${stationName}`}
        content={content}
        question={question}
      />
    </RallyPageWrapper>
  )
}
