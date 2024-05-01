import { Metadata } from 'next'

export const metadata:Metadata = {
  title: 'About',
  description: 'About',
  keywords: ['About Page', 'Informacion']
}
export default function AboutPase () {
  return (
    <>
      <span className='text-6xl'>About page</span>
    </>
  )
}
