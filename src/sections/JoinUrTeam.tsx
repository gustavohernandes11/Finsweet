import {
    Button,
    Center,
    Container,
    Flex,
    Heading,
    Text,
} from "@chakra-ui/react";
import { Wrapper } from "components/Wrapper";

export const JoinUrTeam = () => {
    return (
        <Wrapper>
            <Flex
                alignItems="center"
                m={[
                    "4rem auto 4rem auto",
                    "2rem auto 8rem auto",
                    "0rem auto 8rem auto",
                ]}
                direction="column"
                width={["100%", "50%"]}
            >
                <Heading as="h2" color="custom.dark" textAlign="center">
                    Join our team to be a part of our story
                </Heading>
                <Text
                    mt="1rem"
                    mb="2rem"
                    color="custom.mediumGrey"
                    textAlign="center"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                </Text>
                <Button
                    m="auto"
                    width="min-content"
                    borderRadius={0}
                    fontWeight={700}
                    fontFamily="Sen"
                    padding="1rem 3rem"
                    color="custom.black"
                >{`Join Now`}</Button>
            </Flex>
        </Wrapper>
    );
};
