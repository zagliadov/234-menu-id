
import {
    Text,
} from '@chakra-ui/react';

export const MyName = ({ data }) => {
    const { name } = data;
    return (
        <p style={{ 
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '18px',
            lineHeight: '27px',
            marginLeft: '12px', 
        }}>
            {name}
        </p>
        // <Text
        //     fontFamily='Poppins'
        //     fontStyle='normal'
        //     fontWeight='600'
        //     fontSize='18px'
        //     lineHeight='27px'
        //     ml='12px'
        // >
        //     {name}
        // </Text>
    )
}