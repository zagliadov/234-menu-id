import { FormHeaderWrapperTopPart } from '../TopPart/components/FormHeaderWrapperTopPart/FormHeaderWrapperTopPart';
import { TextQuestionTopPart } from '../TopPart/components/TextQuestionTopPart/TextQuestionTopPart';
import { TopPart } from '../TopPart/TopPart';
import { BottomPart } from '../BottomPart/BottomPart';
import { TitleBottomPart } from '../BottomPart/components/TitleBottomPart/TitileBottomPart';
import { InputGroupBottomPart } from '../BottomPart/components/InputGroupBottomPart/InputGroupBottomPart';
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
                <FormHeaderWrapperTopPart />
                <TextQuestionTopPart />
            </TopPart>
            <BottomPart>
                <TitleBottomPart />
                <InputGroupBottomPart />
            </BottomPart>

        </Flex>
    )
}