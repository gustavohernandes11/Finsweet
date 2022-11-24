import { Center, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import BusinessIcon from "../../assets/icon/BusinessIcon.png";
import RocketIcon from "../../assets/icon/RocketIcon.png";
import EconomyIcon from "../../assets/icon/EconomyIcon.png";
import TechnologyIcon from "../../assets/icon/MindIcon.png";
import { CategoryCard } from "components/CategoryCard";
import { Wrapper } from "components/Wrapper";

export const ChooseACategory = () => {
    return (
        <Wrapper justifyContent="center">
            <Heading as="h2" textAlign="center">
                Choose a Category
            </Heading>
            <SimpleGrid
                width="100%"
                justifyContent="start"
                columns={[2, null, 4]}
                row={[2, null, 1]}
                spacing={["1rem", "2rem"]}
                mt="3rem"
            >
                <CategoryCard
                    title="Business"
                    icon={BusinessIcon}
                    alt="Business icon"
                />
                <CategoryCard
                    title="Startup"
                    icon={RocketIcon}
                    alt="Startup icon"
                />
                <CategoryCard
                    title="Economy"
                    icon={EconomyIcon}
                    alt="economy icon"
                />
                <CategoryCard
                    title="Technology"
                    icon={TechnologyIcon}
                    alt="technology icon"
                />
            </SimpleGrid>
        </Wrapper>
    );
};
