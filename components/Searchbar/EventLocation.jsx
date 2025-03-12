import React, { useContext } from 'react';
import { EventContext } from "@/contexts/EventContext";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    } from "@/components/ui/select";



const EventLocation = () => {
    const { events,selectedLocation, setSelectedLocation } = useContext(EventContext);
    
    const uniqueLocations = [
        "All locations",
        ...new Set(events.filter((event) => {
            const eventDate = new Date(event.date)
            const currentDate = new Date();

            if (eventDate > currentDate) return true;

            if (eventDate.toDateString() === currentDate.toDateString()) {
                const eventTime = eventDate.getTime();
                const currentTime = currentDate.getTime()
                return eventTime > currentTime;
            };

            return false;
        }).map((event) => event.location)
    ),
    ];
    return (
        <div>
            <Select 
                value={selectedLocation} 
                onValueChange={(value) => setSelectedLocation(value)}
            >
                <SelectTrigger className='w-[280px]'>
                    <SelectValue placeholder="Event location" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Location</SelectLabel>
                            {uniqueLocations.map((location, index) => {
                            return (
                                <SelectItem 
                                    value={location === "All locations" ? null : location}
                                    key={index}
                                    >
                                        {location}
                                </SelectItem>
                            );
                        })}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default EventLocation;