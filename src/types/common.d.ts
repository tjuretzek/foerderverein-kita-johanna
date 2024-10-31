declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

type TailwindConfig = import('tailwindcss)').Config

interface FormValues {
  lastname: string
  firstname: string
  childname: string
  street: string
  number: string
  zip: string
  city: string
  telephone: string
  email: string
  bankAccountOwner: string
  bank: string
  iban: string
  bic: string
}
