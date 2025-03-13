import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { EventContext } from '@/contexts/EventContext'
import SkeletonGrid from './SkeletonGrid'
import Event from './Events/Event'
import Link from 'next/link'

const RecommendedEvents = () => {
  const { events } = useContext(EventContext)

  // Filter recommended events
  const filteredRecommendations = events.filter((event) => event.recommended === true)

  return (
    <section className='mb-16'>
        <div className='text-center mb-12'>
        <h className="pretitle">Recommended for you</h>
        <h1 className='h1'>Events that you may like</h1>
      </div>
      {filteredRecommendations.length > 0 ? (
        <Swiper 
        slidesPerView={1} 
        spaceBetween={30}
         pagination={{dynamicBullets:true, clickable:true}} 
        breakpoints={{
          640: {slidesPerView:2},
          1024:{slidesPerView:3},
           1310:{slidesPerView:4}}}
           modules={Pagination}
           className='w-full h-[500px]'
        >
          {filteredRecommendations.map((event, index) => (
            <SwiperSlide key={index}>
              <Link href={`/event/${event.id}`}>
                <Event event={event} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <SkeletonGrid itemCount={4} />
      )}
    </section>
  )
}

export default RecommendedEvents
