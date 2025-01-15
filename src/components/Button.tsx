import classNames from 'classnames'

interface Props {
  href: string
  text: string
  type: 'primary' | 'secondary'
  className?: string
  onClick?: (args?: any) => void
  disabled?: boolean
}

export default function Button(props: Props) {
  const { href, text, type, className, onClick, disabled } = props

  const classes =
    type === 'primary'
      ? 'text-white bg-orange border-white border-2 hover:text-orange hover:border-orange hover:bg-white transition-colors'
      : 'text-green-dark border-green-dark border-2 bg-white transition-colors hover:text-white hover:border-white hover:bg-green-dark'

  return (
    <a
      role='button'
      className={classNames(
        'px-6 py-2 text-[30px] font-tally drop-shadow-md hover:drop-shadow-none',
        classes,
        className,
        disabled && 'opacity-50 pointer-events-none',
      )}
      href={href}
      onClick={onClick ? () => onClick() : undefined}
      title={text}
    >
      {text}
    </a>
  )
}
