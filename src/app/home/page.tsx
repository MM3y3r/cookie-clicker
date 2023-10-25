"use client";

import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Container,
    Flex,
    Heading,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { cookieContext } from "../cookieContext";
import BuildingsList from "./BuildingsList";

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

    return (
        <Box display="flex" flex={"1 1 100%"}>
            <Flex color="white" direction="row" flex={"1 1 100%"}>
                <BuildingsList />
                <Box
                    flex="1 1 100%"
                    bg="#f5fffa"
                    overflowY="auto"
                    maxHeight="80vh"
                >
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
                                        Hire ancient Grandma!
                                    </Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>Very good at baking.</Text>
                                </CardBody>
                                <CardFooter>
                                    <Flex
                                        justifyContent="space-between"
                                        width="100%"
                                    >
                                        <Button bg="#f5fffa">50 🍪</Button>
                                        <Button
                                            bg="#f5fffa"
                                            onClick={() =>
                                                handleBuild("grandma")
                                            }
                                        >
                                            Build
                                        </Button>
                                    </Flex>
                                </CardFooter>
                            </Card>
                            <Card bg={"#ffdead"}>
                                <CardHeader>
                                    <Heading size="md">Buy a farm!</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>
                                        Produces large quantities of cookies.
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Flex
                                        justifyContent="space-between"
                                        width="100%"
                                    >
                                        <Button bg="#f5fffa">500 🍪</Button>
                                        <Button
                                            bg="#f5fffa"
                                            onClick={() => handleBuild("farm")}
                                        >
                                            Build
                                        </Button>
                                    </Flex>
                                </CardFooter>
                            </Card>
                            <Card bg={"#ffdead"}>
                                <CardHeader>
                                    <Heading size="md">
                                        Build a factory!
                                    </Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>
                                        Produces large quantities of cookies.
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Flex
                                        justifyContent="space-between"
                                        width="100%"
                                    >
                                        <Button bg="#f5fffa">5,000 🍪</Button>
                                        <Button
                                            bg="#f5fffa"
                                            onClick={() =>
                                                handleBuild("factory")
                                            }
                                        >
                                            Build
                                        </Button>
                                    </Flex>
                                </CardFooter>
                            </Card>
                            <Card bg={"#ffdead"}>
                                <CardHeader>
                                    <Heading size="md">Build a mine!</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>
                                        Produces large quantities of cookies.
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Flex
                                        justifyContent="space-between"
                                        width="100%"
                                    >
                                        <Button bg="#f5fffa">10,000 🍪</Button>
                                        <Button
                                            bg="#f5fffa"
                                            onClick={() => handleBuild("mine")}
                                        >
                                            Build
                                        </Button>
                                    </Flex>
                                </CardFooter>
                            </Card>
                            <Card bg={"#ffdead"}>
                                <CardHeader>
                                    <Heading size="md">
                                        Build a shipment!
                                    </Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>
                                        Produces large quantities of cookies.
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Flex
                                        justifyContent="space-between"
                                        width="100%"
                                    >
                                        <Button bg="#f5fffa">50,000 🍪</Button>
                                        <Button
                                            bg="#f5fffa"
                                            onClick={() =>
                                                handleBuild("shipment")
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
                                        Build an alchemy lab!
                                    </Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>
                                        Produces large quantities of cookies.
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Flex
                                        justifyContent="space-between"
                                        width="100%"
                                    >
                                        <Button bg="#f5fffa">100,000 🍪</Button>
                                        <Button
                                            bg="#f5fffa"
                                            onClick={() =>
                                                handleBuild("alchemyLab")
                                            }
                                        >
                                            Build
                                        </Button>
                                    </Flex>
                                </CardFooter>
                            </Card>
                        </SimpleGrid>
                    </Container>
                </Box>
            </Flex>
        </Box>
    );
}
