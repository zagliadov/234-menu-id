import {
    Flex,
    Text,
} from '@chakra-ui/react'



export default function ErrorPage() {

    return (
        <Flex
            flex
            justifyContent='center'
            align='center'
            h='100vh'
        >
            <Text fontSize="5xl"
                fontWeight="800"
                fontFamily="'Poppins', sans-serif">
                Error 404!
            </Text>
        </Flex>
    )
}