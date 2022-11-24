import { HStack, Icon } from "@chakra-ui/react";
import {
    LinkedinSquare,
    Twitter,
    FacebookCircle,
    Instagram,
} from "@styled-icons/boxicons-logos";

const CustomIcon = ({ as, color }: any) => {
    return (
        <Icon
            color={color ? color : "custom.black"}
            w="1rem"
            h="1rem"
            as={as}
        />
    );
};

export const SocialBar = ({ color, ...props }: any) => {
    return (
        <HStack spacing="1rem" width="100%" justifyContent="center" {...props}>
            <CustomIcon as={FacebookCircle} color={color} />
            <CustomIcon as={Twitter} color={color} />
            <CustomIcon as={Instagram} color={color} />
            <CustomIcon as={LinkedinSquare} color={color} />
        </HStack>
    );
};
