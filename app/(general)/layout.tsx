import { Navbar } from '@/components'

export default function GeneralLayout ({
  children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center justify-center p-24'>
        <span className='text-lg align-middle'>Hola mundo</span>
        {children}
      </main>
    </>
  )
}
