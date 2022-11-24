import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Wrapper } from "components/Wrapper";
import Image from "next/image";
import HugImg from "../../assets/imgs/hug-friends-image.png";

export const SpecialPost = () => {
    return (
        <Wrapper position="relative">
            <Box
                height="100%"
                width={["100%", null, "75%"]}
                position="relative"
            >
                <Image src={HugImg} alt="friends image" />
            </Box>
            <Box
                position={["relative", null, "absolute"]}
                right="0"
                bottom="0"
                padding={["1.25rem", "2.5rem", "5rem"]}
                bgColor="custom.light"
                width={["100%", null, "55%"]}
                transform={["unset", null, "translate(-5rem, -4rem)"]}
            >
                <Text color="custom.black" fontWeight={600} mb="2rem">
                    WHY WE STARTED
                </Text>
                <Heading mb="1rem" fontSize="48px">
                    It started out as a simple idea and evolved into our passion
                </Heading>
                <Text color="custom.mediumGrey" mb="2rem">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                </Text>
                <Button
                    borderRadius={0}
                    fontWeight={900}
                    fontFamily="Sen"
                    padding="1rem 3rem"
                    color="custom.black"
                >{` Discover our story >`}</Button>
            </Box>
        </Wrapper>
    );
};
