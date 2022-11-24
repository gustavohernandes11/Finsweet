import { Button } from "@chakra-ui/react";

export const ReadMoreButton = () => {
    return (
        <Button
            width="min-content"
            borderRadius={0}
            fontWeight={900}
            fontFamily="Sen"
            padding="1rem 3rem"
            color="custom.black"
        >{` Read More >`}</Button>
    );
};
