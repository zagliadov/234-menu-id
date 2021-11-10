
import {
    Flex,
} from '@chakra-ui/react'


export const MoreMenuWrapper = ({children}) => {

    return (
        <Flex
            position='relative'
            
            >
            {children}
        </Flex>
    )
}