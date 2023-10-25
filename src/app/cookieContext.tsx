"use client";
import { createContext, useState } from "react";

type buildingsType = {
    magicHand: number;
    grandma: number;
    farm: number;
    factory: number;
    mine: number;
    shipment: number;
    alchemyLab: number;
    portal: number;
    timeMachine: number;
    antimatterCondenser: number;
    prism: number;
    chancemaker: number;
    fractalEngine: number;
};

type cookieContextType = {
    cookies: number;
    buildings: buildingsType;
    updateCookies: (cookies: number) => void;
    updateBuildings: (buildings: {
        magicHand: number;
        grandma: number;
        farm: number;
        factory: number;
        mine: number;
        shipment: number;
        alchemyLab: number;
        portal: number;
        timeMachine: number;
        antimatterCondenser: number;
        prism: number;
        chancemaker: number;
        fractalEngine: number;
    }) => void;
};

export const cookieContext = createContext<cookieContextType>({
    cookies: 0,
    buildings: {
        magicHand: 0,
        grandma: 0,
        farm: 0,
        factory: 0,
        mine: 0,
        shipment: 0,
        alchemyLab: 0,
        portal: 0,
        timeMachine: 0,
        antimatterCondenser: 0,
        prism: 0,
        chancemaker: 0,
        fractalEngine: 0,
    },
    updateCookies: (cookies: number) => {},
    updateBuildings: (buildings: {
        magicHand: number;
        grandma: number;
        farm: number;
        factory: number;
        mine: number;
        shipment: number;
        alchemyLab: number;
        portal: number;
        timeMachine: number;
        antimatterCondenser: number;
        prism: number;
        chancemaker: number;
        fractalEngine: number;
    }) => {},
});

export const CookieProvider = ({ children }: { children: React.ReactNode }) => {
    const [cookies, setCookies] = useState(0);
    const [buildings, setBuildings] = useState({
        magicHand: 0,
        grandma: 0,
        farm: 0,
        factory: 0,
        mine: 0,
        shipment: 0,
        alchemyLab: 0,
        portal: 0,
        timeMachine: 0,
        antimatterCondenser: 0,
        prism: 0,
        chancemaker: 0,
        fractalEngine: 0,
    });

    const updateCookies = (cookies: number) => {
        setCookies(cookies);
    };

    const updateBuildings = (buildings: buildingsType) => {
        setBuildings(buildings);
    };

    return (
        <cookieContext.Provider
            value={{ cookies, buildings, updateCookies, updateBuildings }}
        >
            {children}
        </cookieContext.Provider>
    );
};
