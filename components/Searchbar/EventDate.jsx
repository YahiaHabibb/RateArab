import React, { useState, useEffect, useContext } from 'react';
import { format } from "date-fns";
import { Button } from "../ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

import { BiCalendar, BiChevronDown } from 'react-icons/bi';
import { EventContext } from '@/contexts/EventContext';

const EventDate = () => {
  const { selectedDate, setSelectedDate } = useContext(EventContext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will set `isClient` to true once the component mounts on the client
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='flex items-center gap-[10px] w-full xl:w-[190px]'>
      <div className='text-lg text-accent'>
        <BiCalendar />
      </div>
      <Popover >
        <PopoverTrigger asChild>
          <Button className='w-full items-start p-2 bg-transparent '>
            {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0 bg-secondary border-0 text-white'>
          <Calendar mode="single" selected={selectedDate} onSelect={handleDateChange} initialFocus />
        </PopoverContent>
        <div className='text-[26px]'>
          <BiChevronDown />
        </div>
      </Popover>
    </div>
  );
};

export default EventDate;