"use client";

import React, {createContext, useEffect, useState, useMemo} from 'react'

export const EventContext = createContext('');

const EventProvider = ({children}) => {
    return (
        <EventContext.Provider value={''}>{children}</EventContext.Provider>
    )
}