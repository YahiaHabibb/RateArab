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
    const [ selectedDate, setSelectedDate ] = useState("")
    const [ selectedType, setSelectedType ] = useState("")

    //applyed filters
    const [appliedFilters, setAppliedFilters] = useState({
        searchTerm: "",
        selectedLocation: "",
        selectedDate: null,
    });

    //filtered events based on the applied filters
    const filteredEvents = useMemo(() => {
        const today = new Date()
        return events.filter((event) => {
            // check event date
            const eventDate = new Date(event.date);
            if (eventDate < today ) return false;
            //check search term
            const matchesSearch = appliedFilters.searchTerm 
            ? event.title.toLowerCase().includes(appliedFilters.searchTerm.toLowerCase()) 
            : true;

            
            const matchesLocation = appliedFilters.selectedLocation 
                ? event.location.toLowerCase() 
                === appliedFilters.selectedLocation.toLowerCase() : true;


            //check date
            const matchesDate = appliedFilters.selectedDate 
                ? eventDate.toDateString() === 
                new Date(appliedFilters.selectedDate).toDateString() : true;

            // check type    
            const matchesType = appliedFilters.selectedType 
                ? event.type.toLowerCase() === appliedFilters.selectedType.toLowerCase()
                : true;

            return matchesSearch && matchesLocation && matchesDate && matchesType;
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
                console.log("Fetched Events from API:", data);
                console.log("Number of Events:", data.length); 
                setEvents(data);
                //stop loader
                setIsLoading(false);
            } catch (error){
                console.error("Error fetching events:", error);
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const handleSubmit = () => {
        setIsLoading(true);
        setShowEventList(true);
        setAppliedFilters({ searchTerm, selectedLocation, selectedDate, selectedType});
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    const handleClearSearch = () => {
        setSearchTerm("");
        setShowEventList(false);
        setSelectedLocation("");
        setSelectedDate(null);
        setSelectedType("");
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
        selectedDate, 
        setSelectedDate,
        selectedType,
        setSelectedType,
        }}
        >
            {children}
        </EventContext.Provider>
    )
};

export default EventProvider;