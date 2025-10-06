import RallyPageWrapper from '../../../components/RallyPageWrapper'

export default function StationNotFound() {
  return (
    <RallyPageWrapper>
      <div className='max-w-2xl mx-auto p-6'>
        <h1 className='w-full text-xl text-center uppercase font-tally text-orange-dark mb-6'>
          Station nicht gefunden
        </h1>

        <div className='bg-red-50 border border-red-200 rounded-lg p-6'>
          <p className='text-red-800 mb-4'>
            Die Station konnte nicht gefunden werden. Bitte überprüfen Sie die URL oder scannen Sie
            den QR-Code erneut.
          </p>
        </div>
      </div>
    </RallyPageWrapper>
  )
}
