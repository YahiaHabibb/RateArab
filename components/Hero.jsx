import React, { useContext } from 'react'
import SearchBar from './Searchbar/Searchbar'
import { EventContext } from '@/contexts/EventContext'

const Hero = () => {
    const { handleClearSearch } = useContext(EventContext)
  return (
    <section className='h-screen xl:h-[800px] mb-16 relative'>
        <div className='container mx-auto h-full flex flex-col items-center justify-center pt-12 xl:pt-0' >
            <div className='w-full max-w-[648px] text-center mx-auto flex flex-col'>
                <div className="pretitle">Uncover New Moments</div>
                <h1 className="h1">Discover Events <br />& Experiences</h1>
                <p className="text-sm lg:text-lg font-light text-white/80 xl:mb-12 max-w-[480px] xl:max-w-none mx-auto">Join a vibrant community where you can explore the globe happenings and share memorable moments with friends and family</p>
            </div>
            <div className='mt-4'>
              <SearchBar />
              <div className='w-full mt-3 relative flex flex-col justify-center'>
                <p className='text-sm font-light text-white/70 text-center mb-3 xl:mb-0'>Please select atleast one field or leave it empty to see all events</p>
                <button 
                  className='text-sm text-accent  xl:absolute right-0' 
                  onClick={ () => handleClearSearch() }>Clear Search</button>
              </div>
            </div>
        </div>
      {/*  bg */}
      <div className='absolute bg-primary left-0 top-0 w-[50vw] h-full bg-hero_bg1 bg-blend-color-dodge bg-no-repeat bg-cover -z-10 opacity-50'></div>
      {/*  bg */}
      <div className='absolute bg-primary right-0 top-0 w-[50vw] h-full bg-hero_bg2 bg-blend-lighten bg-no-repeat bg-cover -z-10 opacity-30'></div>
    </section>
  )
}

export default Hero
