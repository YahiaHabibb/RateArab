import React, { useContext } from 'react'
import {Select, SelectContent,SelectGroup,SelectItem, SelectLabel,SelectTrigger,SelectValue} from '@/components/ui/select'
import {BiLayer} from "react-icons/bi"
import { EventContext } from '@/contexts/EventContext'

const EventType = () => {
    const {events,selectedType,setSelectedType} = useContext(EventContext)

    const uniqueType = ["All Types" ,
        ...new Set(events.map((event)=>event.type)),
    ]
  return (
    <div className='flex items-center gap-[10px] w-full xl:w-[190px] select-none'>
      <div className='text-xl text-accent'>
                  <BiLayer />
              </div>
            <Select  value={selectedType ?? null} onValueChange={(value)=>setSelectedType(value)} >
              <SelectTrigger className='bg-transparent border border-none focus:ring-0 focus:ring-offset-0 text-left p-0'>
                  <SelectValue placeholder="Events Location"/>
              </SelectTrigger >
              <SelectContent>
                  <SelectGroup>
                      <SelectLabel>Type</SelectLabel>
                      {uniqueType.map((type, index)=>{
                          return <SelectItem value={type ==="All types" ? null : type} key={index} className='capitalize'>{type} </SelectItem>
                      })}
                  </SelectGroup>
              </SelectContent>
            </Select>
    </div>
  )
}

export default EventType
