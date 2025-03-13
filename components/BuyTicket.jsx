"use client";

import { TicketContext } from '@/contexts/TicketContext'
import React, { useContext, useState } from 'react'
import { BiPlus, BiMinus } from 'react-icons/bi'
import { HiTicket } from 'react-icons/hi2'

const BuyTicket = ({ event }) => {
  const { buyNow, itemAmount, totalPrice, increaseAmount, decreaseAmount } = useContext(TicketContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyNow = () => {
    setIsLoading(true)
    buyNow(event)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000) // Simulate an async operation with a 1-second delay
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-4">
      {/* Quantity Selector */}
      <div className="w-[200px] md:w-[300px] flex items-center rounded-full justify-between bg-secondary p-2">
        {/* Decrease button */}
        <div
          onClick={ () => decreaseAmount() }
          className="cursor-pointer w-[48px] h-[48px] bg-accent flex items-center justify-center rounded-full select-none"
        >
          <BiMinus className="text-xl" />
        </div>
    
        {/* Display item amount */}
        <div>{itemAmount}</div>

        {/* Increase button */}
        <div
          onClick={ () => increaseAmount() }
          className="cursor-pointer w-[48px] h-[48px] bg-accent flex items-center justify-center rounded-full select-none"
        >
          <BiPlus className="text-xl" />
        </div>
      </div>

      {/* Buy Now Button */}
      <button onClick={handleBuyNow} className="bg-accent hover:bg-accent-hover transition-all p-4 w-full rounded-full">
        <div className="flex items-center justify-center">
          {isLoading ? (
            <div>Processing...</div>
          ) : (
            <div className="flex items-center gap-4">
              <HiTicket className="text-2xl" />
              <div>{`${itemAmount} x ticket - $${totalPrice}`}</div>
            </div>
          )}
        </div>
      </button>
    </div>
  )
}

export default BuyTicket
