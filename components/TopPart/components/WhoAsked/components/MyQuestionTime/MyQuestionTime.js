
import {
    Text,
} from '@chakra-ui/react';


export const MyQuestionTime = ({ data }) => {

    return (
        <Text
            fontFamily='Poppins'
            fontStyle='normal'
            fontWeight='normal'
            fontSize='12px'
            lineHeight='18px'
            opacity='0.5'
            ml='12px'
        >
            {data.questionTime}h ago
        </Text>
    )
}