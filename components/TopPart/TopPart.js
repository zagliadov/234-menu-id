
import {
    Flex,
} from '@chakra-ui/react';

export const TopPart = ({ children }) => {

    return (
        <Flex
            flexDir='column'
            flex
            align='flex-start'
            padding='32px'
            w='640px'
            h='332px'
            bgColor='BackgroundColor'
            borderRadius='10px 10px 0px 0px '
        >
            {children}
        </Flex>
    )
}