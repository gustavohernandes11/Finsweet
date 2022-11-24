import { Link as ChakraLink } from "@chakra-ui/react";

export const Link = ({ children }: any) => {
    return (
        <ChakraLink color="white" _hover={{ cursor: "pointer" }}>
            {children}
        </ChakraLink>
    );
};
