// a very large cookie icon which acts as a button

import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { cookieContext } from "../cookieContext";

export default function CookieButton() {
    const updateCookies = useContext(cookieContext).updateCookies;
    const cookies = useContext(cookieContext).cookies;
    const buildings = useContext(cookieContext).buildings;

    return (
        <Button
            colorScheme="yellow"
            bg={"#8B5D3B"}
            _hover={{ bg: "#7b3d11" }}
            color="#f5fffa"
            onClick={() => updateCookies(cookies + 1 + buildings.magicHand)}
        >
            Spawn Cookie!
        </Button>
    );
}
