import { ChakraProvider } from "@chakra-ui/provider"
import {myTheme} from '../theme/theme';

export default function MyApp({ Component, pageProps }) {

    return (
        <ChakraProvider resetCSS theme={myTheme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}