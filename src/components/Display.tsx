import { Text } from "@chakra-ui/react";

export const Display = ({ children, ...props }: any) => {
    return (
        <Text
            fontSize={["2rem", "3rem", "4rem"]}
            fontFamily="Sen"
            lineHeight={["2rem", "3rem", "4rem"]}
            {...props}
        >
            {children}
        </Text>
    );
};
