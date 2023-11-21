import Header from 'components/Header'

export default function StarPage() {
  return (
    <div className='bg-green h-screen p-5'>
      <Header />
      <section>
        <h1 className='font-tally text-xl text-secondary w-full text-center uppercase'>
          Seid dabei!
        </h1>
        <h2 className='font-tally text-lg text-secondary w-full text-center uppercase'>
          Zusammen sind wir stark!
        </h2>
      </section>
    </div>
  )
}
