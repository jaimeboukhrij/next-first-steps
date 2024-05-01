import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from '@/components'
import Link from 'next/link'

export const Navbar = () => {
  const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' }
  ]
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href='/' className='flex items-center gap-2'>
        <HomeIcon />
        Home
      </Link>
      <div className='flex flex-1' />
      {
        navItems.map((elem, index) => {
          return <ActiveLink key={elem.path} {...elem} />
        })
      }
    </nav>
  )
}
