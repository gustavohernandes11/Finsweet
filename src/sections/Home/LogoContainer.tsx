import {
    Box,
    Flex,
    Heading,
    HStack,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import { Wrapper } from "components/Wrapper";
import Image from "next/image";

import Logo1Img from "../../assets/logo/Logo 1.png";
import Logo2Img from "../../assets/logo/Logo 2.png";
import Logo3Img from "../../assets/logo/Logo 3.png";
import Logo4Img from "../../assets/logo/Logo 4.png";
import Logo5Img from "../../assets/logo/Logo 5.png";

export const LogoContainer = () => {
    return (
        <Wrapper>
            <Flex
                flexDirection={["column", null, "row"]}
                gap={["2rem", null, "unset"]}
                width="100%"
                align={["center", null, "end"]}
            >
                <Flex flexDirection="column" color="custom.mediumGrey">
                    <Text>WE ARE</Text>
                    <Heading as="h4">Featured in</Heading>
                </Flex>
                <Flex
                    color="custom.darkBlue"
                    justify="space-evenly"
                    marginLeft={["0", null, "auto"]}
                    direction={["column", null, "row"]}
                    flexWrap="wrap"
                    gap={["2rem", null, "3.6rem"]}
                >
                    <Image src={Logo1Img} alt="logo 1 image" />
                    <Image src={Logo2Img} alt="logo 2 image" />
                    <Image src={Logo3Img} alt="logo 3 image" />
                    <Image src={Logo4Img} alt="logo 4 image" />
                    <Image src={Logo5Img} alt="logo 5 image" />
                </Flex>
            </Flex>
        </Wrapper>
    );
};
