import { Flex, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { Post } from "components/Post";
import { ReadMoreButton } from "components/ReadMoreButton";
import Image from "next/image";
import WhiteBuildingIMG from "../../assets/imgs/white-building.png";

export const FeaturedPosts = () => {
    return (
        <SimpleGrid
            width="100%"
            minH="100vh"
            padding={["1rem 1.25rem", "2rem 2.5rem", "4rem 5rem"]}
            justifyContent="start"
            templateColumns={["1fr", null, "6fr 4fr"]}
            columns={[1, 2]}
            spacing={["1.5rem", "2rem"]}
        >
            <Flex direction="column">
                <Heading as="h2">Featured Posts</Heading>
                <Flex
                    gap="2rem"
                    p="2rem"
                    direction="column"
                    mt="2rem"
                    border="1px solid"
                    borderColor="custom.lightGrey"
                >
                    <Image
                        src={WhiteBuildingIMG}
                        alt="white building construction"
                    />
                    <Text noOfLines={1} display="inline-block">
                        By
                        <Text as="b" color="custom.yellow">
                            {" "}
                            Jhon Doe{" "}
                        </Text>
                        | May 23, 2022
                    </Text>
                    <Heading as="h3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                    </Heading>
                    <Text>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                    </Text>
                    <ReadMoreButton />
                </Flex>
            </Flex>
            <Flex direction="column">
                <Flex width="100%" justify="space-between" flexDirection="row">
                    <Heading as="h2" mb="2rem">
                        All Posts
                    </Heading>
                    <Link>
                        <Text
                            color="custom.purple"
                            as="b"
                        >{`View more >`}</Text>
                    </Link>
                </Flex>
                <Post
                    author="Jhon Doe"
                    title="8 Figma design systems that you can download for free today."
                    date="Aug 23, 2021"
                />
                <Post
                    author="Jhon Doe"
                    title="8 Figma design systems that you can download for free today."
                    date="Aug 23, 2021"
                />
                <Post
                    author="Jhon Doe"
                    title="8 Figma design systems that you can download for free today."
                    date="Aug 23, 2021"
                />
                <Post
                    author="Jhon Doe"
                    title="8 Figma design systems that you can download for free today."
                    date="Aug 23, 2021"
                />
            </Flex>
        </SimpleGrid>
    );
};
