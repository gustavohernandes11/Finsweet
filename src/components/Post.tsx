import { Box, Heading, Text } from "@chakra-ui/react";

export const Post = ({ title, author, date }: any) => {
    return (
        <Box
            as="a"
            padding="1rem"
            _hover={{ bgColor: "custom.lightYellow", cursor: "pointer" }}
        >
            <Text noOfLines={1} display="inline-block">
                By
                <Text as="b" color="custom.purple">
                    {" "}
                    {author}{" "}
                </Text>
                | {date}
            </Text>
            <Heading as="h4">{title}</Heading>
        </Box>
    );
};
