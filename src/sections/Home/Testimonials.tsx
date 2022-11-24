import {
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    IconButton,
    SimpleGrid,
    Text,
    VStack,
} from "@chakra-ui/react";
import NextIcon from "../../assets/imgs/icon/ArrowRight.svg";
import BackIcon from "../../assets/imgs/icon/ArrowLeft.svg";
import { ArrowLeft, ArrowRight } from "@styled-icons/feather";
import { Wrapper } from "components/Wrapper";
import Image from "next/image";
import ProfilePicture from "../../assets/imgs/avatar/Profile picture.png";

export const Testimonials = () => {
    return (
        <Wrapper>
            <SimpleGrid
                width="100%"
                templateColumns={["1fr", null, "2fr 3fr"]}
                gap={["2rem", null, "0"]}
                padding={["2.8rem 1.75rem", "5.75rem 3.5rem", "5.75rem 7rem"]}
                bgColor="custom.lightYellow"
            >
                <Box mr={["0rem", null, "5rem"]}>
                    <Text mb="0.75rem" fontWeight={600}>
                        TESTIMONIALS
                    </Text>
                    <Heading mb="1rem" as="h2">
                        What people say about our blog
                    </Heading>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                    </Text>
                </Box>
                <Box
                    pl={["1.5rem", "3rem", "6rem"]}
                    pt={["1.5rem", null, "0rem"]}
                    borderLeft={["none", null, "1px solid"]}
                    borderTop={["1px solid", null, "none"]}
                    borderColor="custom.mediumGrey"
                    justifyContent="space-between"
                >
                    <Heading
                        width={["100%", null, "80%"]}
                        mb={["2rem", null, "5rem"]}
                        as="h4"
                        fontSize="1.25rem"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Heading>
                    <Flex
                        justify="space-between"
                        flexDirection={["column", null, "row"]}
                    >
                        <Flex>
                            <Box
                                w="3rem"
                                h="3rem"
                                mr="1rem"
                                flexDirection="row"
                            >
                                <Image
                                    src={ProfilePicture}
                                    alt="Profile picture"
                                />
                            </Box>
                            <VStack align="start" spacing={0}>
                                <Heading
                                    as="h4"
                                    color="custom.black"
                                    fontSize="1.5rem"
                                >
                                    Jonathan Vallem
                                </Heading>
                                <Text color="custom.mediumGrey" fontSize="1rem">
                                    New york, USA
                                </Text>
                            </VStack>
                        </Flex>
                        <Flex
                            gap="2rem"
                            align="center"
                            m={["1rem auto", null, "0rem"]}
                        >
                            <Box
                                as="button"
                                w="3rem"
                                h="3rem"
                                aria-label="go-back-testimonials"
                                borderRadius="full"
                                color="custom.black"
                                bgColor="custom.light"
                            >
                                <ArrowLeft size="2rem" />
                            </Box>
                            <Box
                                as="button"
                                w="3.8rem"
                                h="3.8rem"
                                aria-label="go-next-testimonials"
                                borderRadius="full"
                                color="custom.light"
                                bgColor="custom.black"
                            >
                                <ArrowRight size="2.8rem" />
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </SimpleGrid>
        </Wrapper>
    );
};
