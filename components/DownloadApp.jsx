import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DownloadApp = () => {
  return (
    <section className='w-full h-[364px] bg-accent mb-16 bg-pattern bg-cover p-10 lg:p-20 bg-blend-multiply flex items-center justify-center rounded-3xl'>
      <div className='flex flex-col lg:flex-row items-center gap-6'>
        {/* Text Content */}
        <div className='flex-1 text-center lg:text-left'>
          <h1 className="h2 mb-2">Experience Events In Your Pocket Today</h1>
          <p className="max-w-[410px] mx-auto lg:mx-0 text-sm text-white/70">
            Download our App and get instant access to upcoming events and tailored recommendations
          </p>
        </div>

        {/* Download Buttons */}
        <div className='flex-1 flex flex-col lg:flex-row items-center justify-end gap-4'>
          {/* App Store Button */}
          <Link href='/' aria-label="Download on the App Store" className='relative flex w-[216px] h-[64px]'>
            <Image 
              src='/assets/download/app-store.svg' 
              alt="Download on the App Store" 
              className='object-contain' 
              width={192} 
              height={64} 
            />
          </Link>

          {/* Google Play Button */}
          <Link href='/' aria-label="Get it on Google Play" className='relative flex w-[216px] h-[64px]'>
            <Image 
              src='/assets/download/google-play.svg' 
              alt="Get it on Google Play" 
              className='object-contain' 
              width={192} 
              height={64} 
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DownloadApp
