import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Wrapper } from "components/Wrapper";

export const AboutUsMission = () => {
    return (
        <Wrapper>
            <Flex width="100%" justify="end" flexDirection="row">
                <Box
                    width="50%"
                    height={["0.75rem", "1.25rem"]}
                    bgColor="custom.yellow"
                ></Box>
                <Box
                    width="25%"
                    height={["0.75rem", "1.25rem"]}
                    bgColor="custom.purple"
                ></Box>
            </Flex>
            <SimpleGrid
                width="100%"
                justifyContent="start"
                templateColumns={["1fr", null, "1fr 1fr"]}
                bgColor="custom.lavender"
                padding={["1.5rem 1.25rem", "3rem 2.5rem", "6rem 5rem"]}
                columns={[1, null, 2]}
                spacing={["1.87rem", "3.75rem"]}
                minChildWidth="300px"
            >
                <Flex direction="column" gap="1rem">
                    <Text fontWeight={600}>ABOUT US</Text>
                    <Heading as="h2">
                        We are a community of content writers who share their
                        learnings
                    </Heading>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Text>
                    <Button
                        width="min-content"
                        borderRadius={0}
                        fontWeight={900}
                        fontFamily="Sen"
                        padding="1rem 0rem"
                        bgColor="transparent"
                        _hover={{
                            bgColor: "transparent",
                            textDecoration: "underline",
                        }}
                        color="custom.purple"
                    >
                        {` Read More >`}
                    </Button>
                </Flex>
                <Flex direction="column" gap="1rem">
                    <Text fontWeight={600}>OUR MISSION</Text>
                    <Heading as="h3">
                        Creating valuable content for creatives all around the
                        world
                    </Heading>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Text>
                </Flex>
            </SimpleGrid>
        </Wrapper>
    );
};
