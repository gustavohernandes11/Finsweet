import { extendTheme } from "@chakra-ui/react";

const components = {
    Button: {
        defaultProps: {
            colorScheme: "yellow",
            borderRadius: 0,
            padding: "1rem 3rem",
        },
    },
    styles: {
        global: {
            h1: {
                fontFamily: "'Sen', sans-serif",
                color: "custom.black",
                fontSize: "3rem",
                margin: "0 2rem",
                fontWeight: 700,
            },
            h2: {
                fontFamily: "'Sen', sans-serif",
                fontSize: "3rem",
                color: "custom.black",
                margin: "0 2rem",
                fontWeight: 700,
            },
            h3: {
                fontFamily: "'Sen', sans-serif",
                color: "custom.black",
                fontSize: "1.75rem",
                fontWeight: 700,
            },
            h4: {
                fontFamily: "'Sen', sans-serif",
                color: "custom.black",
                fontSize: "1.5rem",
                fontWeight: 700,
            },
            h5: {
                fontFamily: "'Sen', sans-serif",
                color: "custom.black",
                fontSize: "1.25rem",
                fontWeight: 700,
            },
            h6: {
                fontFamily: "'Sen', sans-serif",
                color: "custom.black",
                fontSize: "1rem",
                fontWeight: 700,
            },
            P: {
                fontFamily: "'Inter', sans-serif",
            },
            body: {
                bg: "#E5E5E5",
                color: "black",
            },
            a: {
                color: "teal.500",
                _hover: {
                    textDecoration: "underline",
                },
            },
        },
    },
};
const colors = {
    custom: {
        black: "#232536",
        light: "#FFFFFF",
        yellow: "#FFD050",
        purple: "#592EA9",
        darkBlue: "#282938",
        darkGrey: "#4C4C4C",
        mediumGrey: "#6D6E76",
        lightGrey: "#F4F4F4",
        lavender: "#F4F0F8",
        lightYellow: "#FBF6EA",
    },
};

export const theme = extendTheme({ colors, components });
