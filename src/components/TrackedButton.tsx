'use client'

import { trackButtonClick } from '../utils/analytics'
import Button from './Button'

interface TrackedButtonProps {
  href?: string
  text: string
  type?: 'primary' | 'secondary'
  className?: string
  disabled?: boolean
  trackingName?: string
  location?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

/**
 * A Button component that automatically tracks clicks
 */
export default function TrackedButton({
  href,
  text,
  type = 'primary',
  className,
  disabled,
  trackingName,
  location,
  onClick,
}: TrackedButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Track the button click
    trackButtonClick(trackingName || text, location)

    // Call the original onClick if provided
    if (onClick) onClick(e)
  }

  return (
    <Button
      href={href || '#'}
      text={text}
      type={type}
      className={className}
      disabled={disabled}
      onClick={handleClick}
    />
  )
}
