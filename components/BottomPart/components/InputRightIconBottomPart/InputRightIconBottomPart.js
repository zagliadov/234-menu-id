
import {
    InputRightElement,
    Icon,
} from "@chakra-ui/react"

export const InputRightIconBottomPart = () => {

    const svg = <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 4V0L18 7L11 14V9.9C6 9.9 2.5 11.5 0 15C1 10 4 5 11 4Z" fill="#5F7495" />
    </svg>

    const handleClick = () => {
        console.log('hello')
    }

    return (
        <InputRightElement mt='18px'>
            <Icon onClick={() => handleClick()} cursor='pointer'>
                {svg}
            </Icon>
        </InputRightElement>
    )
}