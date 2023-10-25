"use client";

import { useContext } from "react";
import { cookieContext } from "./cookieContext";
import { Container, Flex, Text } from "@chakra-ui/react";

export default function CookieCounter() {
    const { cookies } = useContext(cookieContext);

    return (
        <Flex>
            <Text fontSize={"4xl"}>🍪🍪🍪</Text>
            <Text fontSize="4xl">{cookies} </Text>
            <Text fontSize={"4xl"}>🍪🍪🍪</Text>
        </Flex>
    );
}
