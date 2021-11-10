import { WhoAsked } from '../TopPart/components/WhoAsked/WhoAsked';
import { MyQuestion } from '../TopPart/components/MyQuestion/MyQuestion';
import { TopPart } from '../TopPart/TopPart';
import { BottomPart } from '../BottomPart/BottomPart';
import { WhatCanYou } from '../BottomPart/components/WhatCanYou/WhatCanYou';
import { InputHowCanYouHelp } from '../BottomPart/components/InputHowCanYouHelp/InputHowCanYouHelp';
import {
    Flex,
} from '@chakra-ui/react';



export const MyForm = () => {

    return (
        <Flex
            flexDir='column'
            ml='400px'
            mr='400px'
            mt='287px'
            mb='273px'
        >
            <TopPart>
                <WhoAsked />
                <MyQuestion />
            </TopPart>
            <BottomPart>
                <WhatCanYou />
                <InputHowCanYouHelp />
            </BottomPart>

        </Flex>
    )
}