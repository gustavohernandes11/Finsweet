import {
    Center,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
} from "@chakra-ui/react";
import { Nav } from "./Nav";
import { SubscribeButton } from "./SubscribeButton";

export const Modal = ({ isOpen, onClose }: any) => {
    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>

                <DrawerBody bgColor="custom.black">
                    <Nav
                        fontSize="1.2rem"
                        alignItems="center"
                        m="1rem 0"
                        direction="column"
                    />
                    <Center mt="2rem">
                        <SubscribeButton marginInline="auto" />
                    </Center>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};
