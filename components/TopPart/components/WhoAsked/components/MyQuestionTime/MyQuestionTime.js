
import {
    Text,
} from '@chakra-ui/react';


export const MyQuestionTime = ({ data }) => {

    return (
        <p style={{ 
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '11px',
            color: '#ffffff',
            lineHeight: '18px',
            marginLeft: '12px', 
            opacity: '0.7',
        }}>
            {data.questionTime}h ago
        </p>
        // <Text
        //     fontFamily='Poppins'
        //     fontStyle='normal'
        //     fontWeight='normal'
        //     fontSize='11px'
        //     lineHeight='18px'
        //     opacity='0.7'
        //     ml='12px'
        // >
        //     {data.questionTime}h ago
        // </Text>
    )
}