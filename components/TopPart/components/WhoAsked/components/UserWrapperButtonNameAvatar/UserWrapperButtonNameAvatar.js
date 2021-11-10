
import {
    Flex,
} from '@chakra-ui/react';

export const UserWrapperButtonNameAvatar = ({ children }) => {

    return (
        <Flex
            flex
            alignItems="center"
            w='352px'
            h='44px'
        >
            {children}
        </Flex>
    )
}