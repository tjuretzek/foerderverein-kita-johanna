import Header from 'components/Header'

interface Props {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export default function Page(props: Props) {
  const { children, title, subtitle } = props
  return (
    <div className='w-full min-h-page'>
      <Header size='small' />
      <section className='w-full p-6 pt-16 md:pt-6'>
        <h1 className='w-full text-xl text-center uppercase font-tally text-orange-dark'>
          {title}
        </h1>
        {subtitle && <p className='w-full text-center'>{subtitle}</p>}
        {children}
      </section>
    </div>
  )
}
