import Image from 'next/image'

interface Props {
  src: string
  name: string
  position: string
}

export default function Person(props: Props) {
  const { src, name, position } = props
  return (
    <div className='w-1/2 md:w-1/6 flex flex-wrap justify-center items-start content-start p-4'>
      <Image src={src} alt={name} height={310} width={250} />
      <p className='text-sm w-full text-center mt-2'>{name}</p>
      <p className='text-sm w-full text-center mt-2'>{position}</p>
    </div>
  )
}
