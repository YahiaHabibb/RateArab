"use client";

import Searchbar from "@/components/Searchbar/Searchbar"
import EventList from "@/components/Events/EventList"
import { useContext } from "react";
import { EventContext } from "@/contexts/EventContext";

const Home = () => {
  const { showEventList, handleClearSearch } = useContext(EventContext)

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Searchbar />
        {/* clear search  */}
        <button  
        className="text-accent "
        onClick={ ()=> handleClearSearch() }>Clear Search </button>
      </div>
        {showEventList ? (
        <div className="container mx-auto">
          <EventList />
        </div>
        ) : (
          <div>
            <div className="container mx-auto">

             {/* up coming events slider  */}
            <div>upcoming events slider</div>
            {/* download app section  */}
            <div> download app section </div>
            {/* recommeded events slider  */}
            <div> recommeded events slider</div>

            </div>
          </div>
          )}
    </div>
  );
};

export default Home;