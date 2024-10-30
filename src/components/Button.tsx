import classNames from 'classnames'

interface Props {
  href: string
  text: string
  type: 'primary' | 'secondary'
  className?: string
}

export default function Button(props: Props) {
  const { href, text, type, className } = props

  const classes =
    type === 'primary'
      ? 'text-white bg-orange border-white border-2 hover:text-orange hover:border-orange hover:bg-white transition-colors'
      : 'text-orange border-orange border-dashed bg-white border-2 transition-colors hover:border-solid'

  return (
    <a
      className={classNames(
        'px-6 py-2 text-[30px] font-tally drop-shadow-md hover:drop-shadow-none',
        classes,
        className,
      )}
      href={href}
      title={text}
    >
      {text}
    </a>
  )
}
