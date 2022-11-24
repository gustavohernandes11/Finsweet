import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Input,
    SimpleGrid,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import { Nav } from "./Header/Nav";
import { Link } from "./Link";
import { SubscribeButton } from "./Header/SubscribeButton";
import { Logo } from "./Logo";
import { SocialBar } from "./SocialBar";
import { Wrapper } from "./Wrapper";

export const Footer = () => {
    return (
        <Wrapper bgColor="custom.black">
            <Flex
                width="100%"
                maxW="100%"
                bgColor="custom.black"
                mb={["2.5rem", "5rem"]}
                justify="space-between"
                align="center"
                direction={["column", null, "row"]}
            >
                <Logo />
                <Stack
                    marginLeft={[0, "auto"]}
                    direction={["column", null, "row"]}
                    spacing="2rem"
                >
                    <Stack
                        as="nav"
                        maxW="100%"
                        spacing="1.5rem"
                        ml="1rem"
                        direction={["column", null, "row"]}
                        mt={["1rem", null, "0rem"]}
                        textAlign={["center", null, "unset"]}
                    >
                        <Link>Home</Link>
                        <Link>Blog</Link>
                        <Link>About Us</Link>
                        <Link>Contact Us</Link>
                        <Link>Privacy Policy</Link>
                    </Stack>
                </Stack>
            </Flex>
            <SimpleGrid
                gap={["2rem", "4rem"]}
                templateColumns={["1fr", "6fr 4fr"]}
                width="100%"
                padding={["1.25rem 2rem", "2.5rem 2rem", "5rem 4rem"]}
                bgColor="custom.darkBlue"
            >
                <Heading
                    as="h2"
                    fontSize="2.25rem"
                    fontWeight={700}
                    letterSpacing="-2px"
                    color="custom.light"
                >
                    Subscribe to our news letter to get latest updates and news
                </Heading>
                <Flex as="form" flexDirection="row" gap="1.5rem">
                    <Input
                        placeholder="Enter Your Email"
                        borderRadius={0}
                        border="1px solid"
                        borderColor="custom.darkGrey"
                        colorScheme="yellow"
                    />
                    <Button borderRadius="0" padding="1rem 3rem">
                        Subscribe
                    </Button>
                </Flex>
            </SimpleGrid>

            <Flex
                width="100%"
                maxW="100%"
                bgColor="custom.black"
                mt={["2.5rem", "5rem"]}
                justify="space-between"
                align="center"
            >
                <Flex width="100%" color="custom.mediumGrey">
                    <VStack alignItems="start">
                        <Text>Finstreet 118 2561 Fintown</Text>
                        <Text>Hello@finsweet.com 020 7993 2905</Text>
                    </VStack>
                    <SocialBar
                        color="custom.mediumGrey"
                        width="min-content"
                        ml="auto"
                    />
                </Flex>
            </Flex>
        </Wrapper>
    );
};
