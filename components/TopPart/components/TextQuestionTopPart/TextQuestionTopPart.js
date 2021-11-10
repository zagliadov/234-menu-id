
import {
    Flex,
} from '@chakra-ui/react'

export const TextQuestionTopPart = () => {

    return (
        <Flex
            w='576px'
            h='200px'
            fontFamily="Lato"
            flexDir="column"
            mt='24px'
            color='#fffff'
            fontStyle='normal'
            lineHeight='25px'
            alignSelf='stretch'
            fontSize='18px'
            letterSpacing='0.3px'
            fontWeight='900'
        >
            <p style={{
                color: '#ffffff',
                fontStyle: 'noraml',
                lineHeight: '25px',
                alignSelf: 'center',
                fontSize: '18px',
                letterSpacing: '0.3px',
                fontWeight: '900',
                fontFamily: 'Lato',
            }}>
                Velit ut ultrices quis viverra eu, ultricies nulla at nec.
                Ut diam venenatis egestas massa vulputate nam. Pretium eros, imperdiet odio sit.
                Natoque quam mi ut leo. Sed ut sit cursus nunc, sit. Magna neque vel amet sem vulputate lacus ut.
            </p>
            <p style={{
                color: '#ffffff',
                fontStyle: 'noraml',
                lineHeight: '25px',
                alignSelf: 'center',
                fontSize: '18px',
                letterSpacing: '0.301px',
                fontWeight: '900',
                marginTop: '24px',
                fontFamily: 'Lato',
            }}>
                Diam lacus sed ornare vulputate. Vulputate magna id suspendisse aliquam.
                Sit fames est proin diam morbi purus non. Purus donec eu arcu euismod. Volutpat facilisi venenatis phasellus maecenas in.
            </p>
        </Flex>
    )
}