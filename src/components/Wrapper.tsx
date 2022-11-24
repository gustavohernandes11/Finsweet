import { Container } from "@chakra-ui/react";

export const Wrapper = ({ children, ...props }: any) => {
    return (
        <Container
            width="100%"
            maxW="100%"
            margin={0}
            padding={["1rem 1.25rem", "2rem 2.5rem", "4rem 5rem"]}
            {...props}
        >
            {children}
        </Container>
    );
};
