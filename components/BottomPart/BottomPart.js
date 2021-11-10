
import {
    Flex,
} from '@chakra-ui/react';

export const BottomPart = ({children}) => {

    return (
        <Flex
            w='640px'
            flexDir='column'
            padding='24px 24px 0px 24px'
            bgColor='BackgroundColor'
            borderRadius='0px 0px 10px 10px '
        >
            {children}
        </Flex>
    )
}