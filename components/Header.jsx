import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='absolute right-0 left-0 z-10'>
      <div className='container mx-auto h-full border-b border-white/10 py-4 xl:py-6'>
      <div className='flex justify-between items-center h-full'>
        <Link href='/'>
          <Image 
            src={"/assets/Logo/Star logo Rate Arab.png"} 
            alt='logo' 
            width={200} 
            height={150} 
            />
        </Link>
        <div className='flex gap-4'>
            <button className='btn btn-tertiary'>Sign In</button>
            <button className='btn btn-accent'>Sign UP</button>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header
