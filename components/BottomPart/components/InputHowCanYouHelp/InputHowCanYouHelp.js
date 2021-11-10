
import {
    Input,
    InputGroup,
    InputRightElement,
    Icon,
} from "@chakra-ui/react"

const svg = <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4V0L18 7L11 14V9.9C6 9.9 2.5 11.5 0 15C1 10 4 5 11 4Z" fill="#5F7495" />
</svg>



export const InputHowCanYouHelp = () => {

    const handleClick = () => {
        console.log('hello')
    }

    return (
        <InputGroup>
            <Input
                w='592px'
                padding='12px 12px 12px 20px'
                borderRadius='100px'
                margin='12px 0px 24px 0px'
                boxSizing='border-box'
                bgColor='BackgroundColor'
                h='48px'
                fontFamily='Lato'
                fontStyle='normal'
                fontWeight='600'
                fontSize='16px'
                lineHeight='19px'
                mixBlendMode='normal'
                placeholder="type here..." />
            <InputRightElement mt='18px'>
                <Icon onClick={() => handleClick()} cursor='pointer'>
                    {svg}
                </Icon>
            </InputRightElement>
        </InputGroup>

    )
}