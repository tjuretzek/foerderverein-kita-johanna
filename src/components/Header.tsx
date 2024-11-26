'use client'

import classNames from 'classnames'
import NavItem from 'components/NavItem'
import { metaData } from 'constants/pageMetadata'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface Props {
  size: 'small' | 'large'
}

export default function Header(props: Props) {
  const { size } = props
  const isSmall = size === 'small'
  const title = metaData.home.title as string
  const pathname = usePathname()
  const [mobileNavExpanded, setMobileNavExpanded] = useState(false)

  const navigationItems: { href: string; title: string }[] = [
    { href: '/', title: 'Startseite' },
    { href: '/mitglied-werden', title: 'Mitglied werden' },
    { href: '/spenden', title: 'Spenden' },
    { href: '/kontakt', title: 'Kontakt' },
  ]

  const barClasses = 'w-6 h-0.5 bg-white my-[3px] transition-all duration-500'

  return (
    <>
      <header
        className={classNames(
          'w-full flex mb-10 z-40',
          isSmall ? 'bg-green p-1 px-2 fixed md:relative' : 'justify-center',
        )}
      >
        <div
          className={classNames(
            'bg-secondary rounded-[50%]',
            isSmall ? 'w-[60px] p-2' : 'w-[400px] max-w-full p-10 px-15',
          )}
        >
          <a href='/' className='w-full'>
            <Image src='/logo.png' alt={title} height={262} width={515} />
          </a>
        </div>
        {isSmall && (
          <div className='flex items-center justify-end flex-grow md:px-6'>
            <ul className='hidden gap-6 p-0 m-0 list-none md:flex'>
              {navigationItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  title={item.title}
                  isActive={item.href === pathname}
                />
              ))}
            </ul>
            <button
              className='!px-2 w-10 flex-wrap active:bg-transparent focus:bg-transparent flex md:hidden'
              onClick={() => setMobileNavExpanded(!mobileNavExpanded)}
            >
              <div
                className={classNames(
                  barClasses,
                  mobileNavExpanded
                    ? '-rotate-45 -translate-x-0 translate-y-2'
                    : 'rotate-0 translate-x-0 translate-y-0',
                )}
              />
              <div
                className={classNames(barClasses, mobileNavExpanded ? 'opacity-0' : 'opacity-100')}
              />
              <div
                className={classNames(
                  barClasses,
                  mobileNavExpanded
                    ? 'rotate-45 translate-x-0 -translate-y-2'
                    : 'rotate-0 translate-x-0 translate-y-0',
                )}
              />
            </button>
          </div>
        )}
      </header>

      {isSmall && (
        <div
          className={classNames(
            'fixed grid w-full md:hidden top-11 transition-all duration-500 z-50',
            mobileNavExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0]',
          )}
        >
          <div className='relative pt-2 overflow-hidden bg-green'>
            <ul className='block w-full p-0 m-0 list-none border-t-2 border-white'>
              {navigationItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  title={item.title}
                  isActive={item.href === pathname}
                  className='w-full border-b-2 border-white'
                  itemClassName='w-full p-4 text-center flex justify-center'
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
