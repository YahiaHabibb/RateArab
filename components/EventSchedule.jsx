"use client";

import { EventContext } from '@/contexts/EventContext'
import React, { useContext } from 'react'
import { BiCalendar, BiMap } from 'react-icons/bi'

const EventSchedule = ({event}) => {
  const { formatDate } = useContext(EventContext)
    const dbDate = event.date
    const formattedDate = formatDate(dbDate)
    return (
      <div className='flex flex-col items-start xl:flex-row justify-between gap-4'>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-2'>
            <BiCalendar className='text-xl text-accent' />
            <div>{formattedDate}</div>
          </div>
          <div className='flex items-center gap-2'>
            <div>.</div>
            <p>{event.hour}</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <BiMap className='text-xl text-accent' />
          <p>{event.location}</p>
      </div>
    </div>
  )
}

export default EventSchedule
