import { Button } from "@chakra-ui/react";

export const SubscribeButton = ({ ...props }) => {
    return (
        <Button
            color="custom.black"
            bgColor="custom.light"
            padding="1rem 3rem"
            borderRadius="0"
            {...props}
        >
            Subscribe
        </Button>
    );
};
