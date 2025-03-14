'use client'

import classNames from 'classnames'
import { trackPageView } from '../utils/analytics'

interface Props {
  href: string
  title: string
  isActive: boolean
  className?: string
  itemClassName?: string
}

export default function NavItem(props: Props) {
  const { href, title, isActive, className, itemClassName } = props

  const handleClick = () => {
    // Track the page navigation
    trackPageView(`Visited ${title}`)
  }

  return (
    <li className={className}>
      <a
        href={href}
        title={title}
        className={classNames('text-white hover:underline', itemClassName, isActive && 'underline')}
        onClick={handleClick}
      >
        {title}
      </a>
    </li>
  )
}
