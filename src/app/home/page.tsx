"use client";

import styles from "./page.module.css";
import TodoList from "./TodoList";
import Sidebar from "./Sidebar";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Center,
    Container,
    Flex,
    Heading,
    List,
    ListIcon,
    ListItem,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { cookieContext } from "../cookieContext";

export default function Home() {
    const cookies = useContext(cookieContext).cookies || 0;
    const buildings = useContext(cookieContext).buildings;
    const setCookies = useContext(cookieContext).updateCookies;
    const setBuildings = useContext(cookieContext).updateBuildings;

    function handleBuild(building: string): void {
        switch (building) {
            case "magicHand":
                if (cookies >= 10) {
                    setCookies(cookies - 10);
                    setBuildings({
                        ...buildings,
                        magicHand: buildings.magicHand + 1,
                    });
                }
                break;
            default:
                break;
        }
    }

    return (
        <Box display="flex" flex={"1 1 100%"}>
            <Flex color="white" flex={"1 1 100%"}>
                <Box flex="1 1 33%" bg="#7b3d11">
                    <Container>
                        {/* List all existing buildings and upgrades with smilies */}
                        <List>
                            <ListItem>
                                {buildings.magicHand || 0} x Magic Hands 🤲
                            </ListItem>
                            <ListItem>
                                {buildings.grandma || 0} x Grandma 👵
                            </ListItem>
                            <ListItem>{buildings.farm || 0} x Farm 🚜</ListItem>
                            <ListItem>
                                {buildings.factory || 0} x Factory 🏭
                            </ListItem>
                            <ListItem>{buildings.mine || 0} x Mine ⛏️</ListItem>
                            <ListItem>
                                {buildings.shipment || 0} x Shipment 🚚
                            </ListItem>
                            <ListItem>
                                {buildings.alchemyLab || 0} x Alchemy Lab 🧪
                            </ListItem>
                            <ListItem>
                                {buildings.portal || 0} x Portal 🌀
                            </ListItem>
                            <ListItem>
                                {buildings.timeMachine || 0} x Time Machine ⏰
                            </ListItem>
                            <ListItem>
                                {buildings.antimatterCondenser || 0} x
                                Antimatter Condenser 🌌
                            </ListItem>
                            <ListItem>
                                {buildings.prism || 0} x Prism 🌈
                            </ListItem>
                            <ListItem>
                                {buildings.chancemaker || 0} x Chancemaker 🎲
                            </ListItem>
                            <ListItem>
                                {buildings.fractalEngine || 0} x Fractal Engine
                                🌀
                            </ListItem>
                        </List>
                    </Container>
                </Box>
                <Box flex="1 1 100%" bg="#f5fffa">
                    <Container
                        display={"flex"}
                        flexDirection={"column"}
                        padding={"20px 0px"}
                    >
                        <SimpleGrid
                            paddingBottom={"1em"}
                            spacing={4}
                            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                        >
                            <Card bg={"#ffdead"}>
                                <CardHeader>
                                    <Heading size="md">
                                        Improve magic hand!
                                    </Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>
                                        A mighty factory churning out cookies at
                                        a staggering rate.
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Flex
                                        justifyContent="space-between"
                                        width="100%"
                                    >
                                        <Button bg="#f5fffa">10 🍪</Button>
                                        <Button
                                            bg="#f5fffa"
                                            onClick={() =>
                                                handleBuild("magicHand")
                                            }
                                        >
                                            Build
                                        </Button>
                                    </Flex>
                                </CardFooter>
                            </Card>
                            <Card bg={"#ffdead"}>
                                <CardHeader>
                                    <Heading size="md">
                                        Build Cookie Factory!
                                    </Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>
                                        A mighty factory churning out cookies at
                                        a staggering rate.
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Flex
                                        justifyContent="space-between"
                                        width="100%"
                                    >
                                        <Button bg="#f5fffa">1000 🍪</Button>
                                        <Button bg="#f5fffa">Build</Button>
                                    </Flex>
                                </CardFooter>
                            </Card>
                            <Card bg={"#ffdead"}>
                                <CardHeader>
                                    <Heading size="md">
                                        Order Cookies from Mars!
                                    </Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>
                                        Cookies freshly delivered via Space-Ship
                                        from another planet.
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Flex
                                        justifyContent="space-between"
                                        width="100%"
                                    >
                                        <Button bg="#f5fffa">10.000 🍪</Button>
                                        <Button bg="#f5fffa">Build</Button>
                                    </Flex>
                                </CardFooter>
                            </Card>
                            <Card bg={"#ffdead"}>
                                <CardHeader>
                                    <Heading size="md">
                                        Build Cookie Mine!
                                    </Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>
                                        A mine that mines cookies. It's a cookie
                                        mine.
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Flex
                                        justifyContent="space-between"
                                        width="100%"
                                    >
                                        <Button bg="#f5fffa">100.000 🍪</Button>
                                        <Button bg="#f5fffa">Build</Button>
                                    </Flex>
                                </CardFooter>
                            </Card>
                        </SimpleGrid>
                        <Button
                            colorScheme="yellow"
                            bg={"#8B5D3B"}
                            _hover={{ bg: "#7b3d11" }}
                            color="#f5fffa"
                            onClick={() =>
                                setCookies(cookies + 1 + buildings.magicHand)
                            }
                        >
                            Spawn Cookie!
                        </Button>
                    </Container>
                </Box>
            </Flex>
        </Box>
    );
}
