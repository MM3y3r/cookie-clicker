import { Container, List, ListItem, Box } from "@chakra-ui/react";
import { useContext } from "react";
import { cookieContext } from "../cookieContext";
import CookieButton from "./CookieButton";

export default function BuildingsList() {
    const buildings = useContext(cookieContext).buildings;
    return (
        <Box padding="1em 0em" flex="1 1 33%" bg="#7b3d11">
            <Container
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
            >
                {/* List all existing buildings and upgrades with smilies */}
                <List>
                    <ListItem>
                        {buildings.magicHand || 0} x Magic Hands 🤲
                    </ListItem>
                    <ListItem>{buildings.grandma || 0} x Grandma 👵</ListItem>
                    <ListItem>{buildings.farm || 0} x Farm 🚜</ListItem>
                    <ListItem>{buildings.factory || 0} x Factory 🏭</ListItem>
                    <ListItem>{buildings.mine || 0} x Mine ⛏️</ListItem>
                    <ListItem>{buildings.shipment || 0} x Shipment 🚚</ListItem>
                    <ListItem>
                        {buildings.alchemyLab || 0} x Alchemy Lab 🧪
                    </ListItem>
                    <ListItem>{buildings.portal || 0} x Portal 🌀</ListItem>
                    <ListItem>
                        {buildings.timeMachine || 0} x Time Machine ⏰
                    </ListItem>
                    <ListItem>
                        {buildings.antimatterCondenser || 0} x Antimatter
                        Condenser 🌌
                    </ListItem>
                    <ListItem>{buildings.prism || 0} x Prism 🌈</ListItem>
                    <ListItem>
                        {buildings.chancemaker || 0} x Chancemaker 🎲
                    </ListItem>
                    <ListItem>
                        {buildings.fractalEngine || 0} x Fractal Engine 🌀
                    </ListItem>
                </List>
                <CookieButton />
            </Container>
        </Box>
    );
}
