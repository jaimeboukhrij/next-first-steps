'use client'
import Link from 'next/link'
import style from './ActiveLink.module.css'
import { usePathname } from 'next/navigation'
interface props{
    path:string,
    text:string
}

export const ActiveLink = ({ path, text }:props) => {
  const pathName = usePathname()
  return (
    <Link
      className={`${style.link} ${path === pathName && 'text-blue-500'}`}
      href={path}
    >
      {text}
    </Link>
  )
}
