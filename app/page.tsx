"use client";

import { useContext } from "react";
import { EventContext } from "@/contexts/EventContext";
import Hero from "@/components/Hero";
import EventList from "@/components/Events/EventList";
import UpcomingEvents from "@/components/UpcomingEvents";
import RecomendendEvents from "@/components/RecomendendEvents";

const Home = () => {
  const {showEventList} = useContext(EventContext)
  console.log(showEventList)
    return (
      <div>
        <Hero />
        <div className='flex flex-col items-center justify-center'>
        </div>
        {
          showEventList ? (
            <div className='container mx-auto'>
            <EventList />
            </div>
          ) : (
          <div> 
            <div className='container mx-auto'>
            {/* upcoming events */}
            <UpcomingEvents/>
            {/* download app */}
            {/* <DownloadApp /> */}
            {/* recomendend events slider */}
            <RecomendendEvents />
            </div>
          </div>
        )
        }
        
      </div>
    )
  }
  
  export default Home