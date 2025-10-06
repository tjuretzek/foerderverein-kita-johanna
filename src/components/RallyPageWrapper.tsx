import Header from './Header'

interface Props {
  children: React.ReactNode
}

export default function RallyPageWrapper(props: Props) {
  const { children } = props
  return (
    <div className='w-full min-h-page'>
      <Header size='small' />
      <section className='w-full p-6 pt-16 md:pt-6 z-0'>{children}</section>
    </div>
  )
}
