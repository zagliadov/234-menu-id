
import {
    Flex,
    Text,
} from '@chakra-ui/react'

export const MyQuestion = () => {

    return (
        <Flex
            w='576px'
            h='200px'
            fontFamily="Lato"
            flexDir="column"
            mt='24px'
            color='#fffff'
            opacity='0.8'
            fontStyle='normal'
            lineHeight='25px'
            alignSelf='stretch'
            fontSize='18px'
            letterSpacing='0.3px'
            fontWeight='600'
        >
            <Text
            >
                Velit ut ultrices quis viverra eu, ultricies nulla at nec.
                Ut diam venenatis egestas massa vulputate nam. Pretium eros, imperdiet odio sit.
                Natoque quam mi ut leo. Sed ut sit cursus nunc, sit. Magna neque vel amet sem vulputate lacus ut.

            </Text>
            <Text mt='24px' letterSpacing='0.301px'>
                Diam lacus sed ornare vulputate. Vulputate magna id suspendisse aliquam.
                Sit fames est proin diam morbi purus non. Purus donec eu arcu euismod. Volutpat facilisi venenatis phasellus maecenas in.
            </Text>
        </Flex>
    )
}