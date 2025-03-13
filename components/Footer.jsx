import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const socials = [
    {
        src:"/assets/footer/facebook.svg",
        path:'',
    },
    {
        src:"/assets/footer/x.svg",
        path:'',
    },
    {
        src:"/assets/footer/instagram.svg",
        path:'',
    },
    {
        src:"/assets/footer/youtube.svg",
        path:'',
    },
    {
        src:"/assets/footer/pinterest.svg",
        path:'',
    },
]

const Footer = () => {
  return (
    <footer className='bg-accent bg-pattern bg-cover bg-blend-multiply pt-16'>
      <div className="container mx-auto border-b border-white/40">
      <div className='flex flex-col text-center max-w-[550px] mx-auto'>
        <div className='mb-9'>
          <h1 className='h1'>Your Event Connection</h1>
          <p className='text-sm '>Join our exclusive event updates and insider tips</p>
        </div>
        <form className='relative flex items-center mb-16'>
          <input type="text" placeholder='Type your email' className='pl-8 h-[60px] w-full rounded-full outline-none placeholder:text-primary/50 text-primary text-sm' />
          <button className='bg-secondary hover:bg-secondary-hover transition-all w-[114px] h-[52px] rounded-full text-white text-sm uppercase  roundend-full  absolute right-1'>join</button>
        </form>
        <div className='mb-[72px] flex items-center gap-8 mx-auto'>
          {socials.map((icon,index) =>{
            return (
                    <Link href={icon.path} key={index} className='relative h-[20px] w-[20px]'>
                      <Image src={icon.src} fill  alt=''/>
                    </Link>
          )
          })}
        </div>
      </div>
      </div>
      <div className='py-8'>
        <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row gap-6 items-center justify-between'>
          <Link href='/' className='relative flex w-[78px] h-[30px]'>
            {/* <Image src='/assets/footer/logo.svg' fill alt='' /> */}
          </Link>
          <p>copyright &copy; 2025. All rights reserved.</p>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
