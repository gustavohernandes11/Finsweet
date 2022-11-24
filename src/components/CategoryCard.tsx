import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export const CategoryCard = ({
    alt,
    title,
    icon,
    text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
}: any) => {
    return (
        <Flex
            direction="column"
            border="1px solid"
            borderColor="custom.lightGrey"
            padding={["1rem", "1.5rem", "2rem"]}
            _hover={{ bgColor: "custom.yellow", cursor: "pointer" }}
            transition="background-color 0.5s"
            gap={["0.5rem", "1rem"]}
        >
            <Image src={icon} height={48} width={48} alt={alt} />
            <Heading as="h3">{title}</Heading>
            <Text color="custom.mediumGrey">{text}</Text>
        </Flex>
    );
};
