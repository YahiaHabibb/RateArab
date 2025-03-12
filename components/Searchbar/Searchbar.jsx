import React, { useContext } from 'react';
import { EventContext } from '@/contexts/EventContext';
import EventSearch from './EventSearch';
import EventLocation from "./EventLocation";



const Searchbar = () => {
    const { handleSubmit } = useContext(EventContext);
    return (
        <div className='bg-white/5 w-[90vw] sm:w-[60vm] md:w-[50vw] lg:w-[40vw] xl:w-max p-8 xl:pl-8
        xl:pr-2 h-auto xl:h-[70px] rounded-3xl xl:rounded-full backdrop-blur-[20px] flex flex-col
        xl:flex-row items-center gap-6 mx-auto text-sm'>
        {/* event search  */}
        <EventSearch />
        {/* event Location  */}
        <EventLocation />
        <div>Event date</div>
        <div>Event type</div>
        <div onClick={handleSubmit} className='btn btn-accent'>Submit</div>
        </div>
    )
}

export default Searchbar;