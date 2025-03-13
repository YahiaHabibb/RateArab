"use client";
import React, { useEffect, useState } from "react";

const Timer = ({ event }) => {
    // Ensure valid date parsing
    const eventDate = event?.date ? event.date : "";
    const eventHour = event?.hour ? event.hour : "00:00:00"; // Default to midnight if missing

    const [timeRemaining, setTimeRemaining] = useState(null);

    useEffect(() => {
        if (!eventDate) return; // Prevent running if event.date is undefined

        // Parse the event date and time correctly
        const evenDate = new Date(`${eventDate}T${eventHour}`);

        const updateTimer = () => {
            const now = new Date();
            const timeLeft = evenDate - now;

            if (timeLeft <= 0) {
                setTimeRemaining(0);
                return;
            }
            setTimeRemaining(timeLeft);
        };

        // Initialize timer
        updateTimer();

        // Set up interval to update the countdown every second
        const timerId = setInterval(updateTimer, 1000);

        return () => clearInterval(timerId);
    }, [eventDate, eventHour]); // Use string dependencies to avoid infinite re-renders

    if (timeRemaining === null) {
        return <div>Loading...</div>; // Prevent hydration mismatch
    }

    if (timeRemaining <= 0) {
        return <div>Event has already passed</div>;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return (
        <div className="flex flex-wrap gap-4">
            {[["Days", days], ["Hours", hours], ["Minutes", minutes], ["Seconds", seconds]].map(([label, value]) => (
                <div key={label} className="text-center border-[3px] border-accent w-[100px] h-[100px] rounded-full flex items-center justify-center">
                    <div>
                        <div className="text-3xl font-semibold">{value}</div>
                        <div className="text-sm uppercase font-medium">{label}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timer;
