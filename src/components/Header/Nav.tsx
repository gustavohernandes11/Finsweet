import {
    HStack,
    Icon,
    IconButton,
    Stack,
    useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "../Link";

export const Nav = ({ ...props }) => {
    return (
        <Stack
            as="nav"
            maxW="100%"
            spacing="1.5rem"
            marginLeft="1rem"
            direction="row"
            {...props}
        >
            <Link>Home</Link>
            <Link>Blog</Link>
            <Link>About Us</Link>
            <Link>Contact Us</Link>
        </Stack>
    );
};
