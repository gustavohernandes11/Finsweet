import { Container } from "@chakra-ui/react";
import { NextPage } from "next";
import { HeroContainer } from "sections/Home/HeroContainer";
import { FeaturedPosts } from "sections/Home/FeaturedPosts";
import { AboutUsMission } from "sections/Home/AboutUsMission";
import { ChooseACategory } from "sections/Home/ChooseACategory";
import { SpecialPost } from "sections/Home/SpecialPost";
import { ListOfAuthors } from "sections/Home/ListOfAuthors";
import { LogoContainer } from "sections/Home/LogoContainer";
import { Testimonials } from "sections/Home/Testimonials";
import { JoinUrTeam } from "sections/JoinUrTeam";
const Home: NextPage = () => {
    return (
        <>
            <title>Finsweet</title>
            <HeroContainer />
            <FeaturedPosts />
            <AboutUsMission />
            <ChooseACategory />
            <SpecialPost />
            <ListOfAuthors />
            <LogoContainer />
            <Testimonials />
            <JoinUrTeam />
        </>
    );
};
export default Home;
