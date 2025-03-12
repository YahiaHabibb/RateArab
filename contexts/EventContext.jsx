"use client";

import React, {createContext, useEffect, useState, useMemo} from 'react'

export const EventContext = createContext();

const EventProvider = ({children}) => {
    const [ events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showEventList, setShowEventList] = useState(false);
    //current filter inputs
    const [searchTerm, setSearchTerm] = useState("");
    const [ selectedLocation, setSelectedLocation ] = useState("")

    //applyed filters
    const [appliedFilters, setAppliedFilters] = useState({
        searchTerm: "",
        selectedLocation: "",
    });

    //filtered events based on the applied filters
    const filteredEvents = useMemo(() => {
        return events.filter((event) => {
            //check search term
            const matchesSearch = appliedFilters.searchTerm 
            ? event.title.toLowerCase().includes(appliedFilters.searchTerm.toLowerCase()) 
            : true;

            
            const matchesLocation = appliedFilters.selectedLocation ? 
            event.location.toLowerCase() === appliedFilters.selectedLocation.toLowerCase() : true

            return matchesSearch && matchesLocation;
        });
        
    }, [events, appliedFilters]);


    // fetch events
    useEffect(() => {
        const fetchEvents = async () => {
            //start loading
            setIsLoading(true);
            try{
                const res = await fetch('http://localhost:5000/events');
                if (!res.ok) throw new Error("failed to fetch events");
                const data = await res.json();
                setEvents(data);
                //stop loader
                setIsLoading(false);
            } catch (err){
                setError(err.message);
                setIsLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const handleSubmit = () => {
        setIsLoading(true);
        setShowEventList(true);
        setAppliedFilters({ searchTerm, selectedLocation });
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    };

    const handleClearSearch = () => {
        setSearchTerm("");
        setShowEventList(false);
        setSelectedLocation("");
    };

    return (
        <EventContext.Provider value={{events, 
        isLoading, 
        error, 
        searchTerm, 
        setSearchTerm, 
        filteredEvents,
        handleSubmit,
        handleClearSearch,
        showEventList,
        selectedLocation,
        setSelectedLocation,
        }}
        >
            {children}
        </EventContext.Provider>
    )
};

export default EventProvider;