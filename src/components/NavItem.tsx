import classNames from 'classnames'

interface Props {
  href: string
  title: string
  isActive: boolean
  className?: string
  itemClassName?: string
}

export default function NavItem(props: Props) {
  const { href, title, isActive, className, itemClassName } = props
  return (
    <li className={className}>
      <a
        href={href}
        title={title}
        className={classNames('text-white hover:underline', itemClassName, isActive && 'underline')}
      >
        {title}
      </a>
    </li>
  )
}
