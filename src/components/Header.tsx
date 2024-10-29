import classNames from 'classnames'
import { metaData } from 'constants/pageMetadata'
import Image from 'next/image'

interface Props {
  size: 'small' | 'large'
}

export default function Header(props: Props) {
  const { size } = props
  const isSmall = size === 'small'
  const title = metaData.home.title as string

  return (
    <header
      className={classNames('w-full flex mb-10', isSmall ? 'bg-green p-1 px-2' : 'justify-center')}
    >
      <div
        className={classNames(
          'bg-secondary rounded-[50%]',
          isSmall ? 'w-[60px] p-2' : 'w-[400px] max-w-full p-10 px-15',
        )}
      >
        <a href='/' className='w-full'>
          <Image src='/logo.png' alt={title} height={262} width={515} />
        </a>
      </div>
    </header>
  )
}
