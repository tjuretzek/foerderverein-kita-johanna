import classNames from 'classnames'

interface Props {
  name: string
  label: string
  children: React.ReactNode
  className?: string
}

export default function InputField(props: Props) {
  const { name, label, children, className } = props
  return (
    <div className={classNames('relative flex flex-wrap pb-4', className ? className : 'w-full')}>
      <label
        htmlFor={name}
        className='inline-block px-1 ml-1 -mb-2.5 text-sm gradient-input-label z-20 text-black/60'
      >
        {label}
      </label>
      {children}
    </div>
  )
}
