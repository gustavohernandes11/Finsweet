import { Box, Container, Text } from "@chakra-ui/react";
import { Display } from "components/Display";
import { ReadMoreButton } from "components/ReadMoreButton";
import { Wrapper } from "components/Wrapper";

export const HeroContainer = () => {
    return (
        <Wrapper
            padding={["2rem 1.25rem", "4rem 2.5rem", "8rem 5rem"]}
            justifyContent="start"
            objectFit="cover"
            backgroundImage="url('hero-image.png')"
            backgroundSize="cover"
            backgroundPosition="center"
            mt="5rem"
        >
            <Box width={["100%", null, "50rem"]}>
                <Text mb="1.5rem" color="custom.light">
                    POSTED ON <Text as="b">STARTUP</Text>
                </Text>
                <Display mb="1.5rem" color="custom.light">
                    Step-by-step guide to choosing great font pairs
                </Display>
                <Text color="custom.light" noOfLines={1} display="inline-block">
                    By
                    <Text as="b" color="custom.yellow">
                        {" "}
                        James West{" "}
                    </Text>
                    | May 23, 2022
                </Text>
                <Text margin="1rem 0 3rem 0rem" color="custom.light">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occae cat cupidatat non proident.
                </Text>
                <ReadMoreButton />
            </Box>
        </Wrapper>
    );
};
