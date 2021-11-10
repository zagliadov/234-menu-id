
import {
    Text,
} from '@chakra-ui/react';


export const MyQuestionTime = ({ data }) => {

    return (
        <Text
            fontFamily='Poppins'
            fontStyle='normal'
            fontWeight='normal'
            fontSize='11px'
            lineHeight='18px'
            opacity='0.7'
            ml='12px'
        >
            {data.questionTime}h ago
        </Text>
    )
}