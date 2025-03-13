"use client";

import { TicketContext } from '@/contexts/TicketContext';
import React, { useContext, useEffect } from 'react';
import { PiChairFill } from 'react-icons/pi';
import { BiCheck } from 'react-icons/bi'; // Add check icon for selected seats

const CustomSelect = ({ event }) => {
    const { seat, showMenu, initializeEvent, handleSeat, setShowMenu } = useContext(TicketContext);

    useEffect(() => {
        initializeEvent(event);
    }, [event, initializeEvent]);

    return (
        <div 
            onClick={(e) => {setShowMenu((prev) => !prev);
                e.stopPropagation()
            }} 
            className="custom-select bg-secondary w-full h-[64px] rounded-full flex items-center justify-between px-8 relative cursor-pointer select-none"
        >
            <div className="flex items-center gap-2 w-full">
                <div className="text-xl text-accent">
                    <PiChairFill />
                </div>
                <div className="flex-1 capitalize">
                    {seat?.seat || 'Select Seat'} {/* If no seat is selected, show placeholder */}
                </div>
            </div>
            <div className="flex items-center justify-end w-full">
                <div className="flex items-center gap-2">
                    <div className="font-semibold">${seat?.price || '0.00'}</div> {/* Show price with fallback */}
                    <div className="text-sm text-white/60">each</div>
                </div>
            </div>

            {showMenu && (
                <ul className="bg-secondary absolute top-[70px] left-0 w-full rounded-3xl overflow-hidden">
                    {event?.seats?.map((seatOption, index) => (
                        <li 
                            key={index} 
                            onClick={(e) => {
                                handleSeat(seatOption.seat, seatOption.price);
                                e.stopPropagation()

                            }}
                            className="cursor-pointer hover:bg-white/5 px-8 py-5"
                        >
                            <div className="flex justify-between">
                                <div className="capitalize">{seatOption.seat}</div>
                                <div>${seatOption.price}</div>
                            </div>
                            {seat.seat === seatOption.seat && (
                                <div className="text-accent">
                                    <BiCheck /> {/* Show checkmark for selected seat */}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
