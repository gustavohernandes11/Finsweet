import {
    Box,
    Flex,
    HStack,
    useMediaQuery,
    Icon,
    IconButton,
    useDisclosure,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";
import { Nav } from "./Nav";
import { SubscribeButton } from "./SubscribeButton";
import { Menu } from "@styled-icons/feather";
import { Modal } from "./Modal";

export const Header = () => {
    const [isMobileScreen] = useMediaQuery("(max-width: 800px)");
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex
                zIndex="overlay"
                position="fixed"
                top="0"
                right="0"
                width="100%"
                maxW="100%"
                bgColor="custom.black"
                height="5rem"
                padding={["0.5rem 1.25rem", "0.75rem 2.5rem", "1.5rem 5rem"]}
                justify="space-between"
                align="center"
            >
                <Logo />
                <HStack marginLeft="auto" spacing="2rem">
                    {isMobileScreen ? (
                        <IconButton aria-label="toggle menu" onClick={onOpen}>
                            <Icon as={Menu} />
                        </IconButton>
                    ) : (
                        <>
                            <Nav />
                            <SubscribeButton />
                        </>
                    )}
                </HStack>
            </Flex>

            <Modal onClose={onClose} isOpen={isOpen} />
        </>
    );
};
