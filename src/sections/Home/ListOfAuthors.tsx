import { Heading, SimpleGrid } from "@chakra-ui/react";
import { AuthorCard } from "components/AuthorCard";
import { Wrapper } from "components/Wrapper";

import Author1Img from "../../assets/avatar/author1.png";
import Author2Img from "../../assets/avatar/author2.png";
import Author3Img from "../../assets/avatar/author3.png";
import Author4Img from "../../assets/avatar/author4.png";

export const ListOfAuthors = () => {
    return (
        <Wrapper>
            <Heading as="h2" textAlign="center">
                List of Authors
            </Heading>
            <SimpleGrid></SimpleGrid>
            <SimpleGrid
                width="100%"
                justifyContent="center"
                columns={[2, null, 4]}
                row={[2, null, 1]}
                spacing={["1rem", "2rem"]}
                mt="3rem"
            >
                <AuthorCard
                    name="Floyd Miles"
                    src={Author1Img}
                    bio="Content Writer @Company"
                />
                <AuthorCard
                    name="Dianne Russell"
                    src={Author2Img}
                    bio="Content Writer @Company"
                />
                <AuthorCard
                    name="Jenny Wilson"
                    src={Author3Img}
                    bio="Content Writer @Company"
                />
                <AuthorCard
                    name="Leslie Alexander"
                    src={Author4Img}
                    bio="Content Writer @Company"
                />
            </SimpleGrid>
        </Wrapper>
    );
};
