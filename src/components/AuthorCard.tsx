import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { SocialBar } from "./SocialBar";

export const AuthorCard = ({ alt, name, src, bio, ...props }: any) => {
    return (
        <Flex
            direction="column"
            padding={["1rem", "1.5rem", "2rem"]}
            gap={["0.5rem", "1rem"]}
            bgColor="custom.lightGrey"
            _hover={{
                bgColor: "custom.lightYellow",
            }}
            {...props}
            align="center"
            justify="center"
        >
            <Box height="8rem" width="8rem" mb={["0.75rem", "1.25rem"]}>
                <Image src={src} alt={alt} />
            </Box>
            <Heading
                as="h3"
                fontWeight={600}
                fontSize="1.75rem"
                textAlign="center"
            >
                {name}
            </Heading>
            <Text
                color="custom.mediumGrey"
                textAlign="center"
                mb={["0.75rem", "1.25rem"]}
            >
                {bio}
            </Text>
            <SocialBar />
        </Flex>
    );
};
