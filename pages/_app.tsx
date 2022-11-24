import type { AppProps } from "next/app";
import GlobalStyles from "../src/styles/GlobalStyles";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../src/theme";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </ChakraProvider>
    );
}

export default MyApp;
