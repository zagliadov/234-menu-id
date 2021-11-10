import { ButtonUserInteractionWrapper } from './components/ButtonUserInteractionWrapper/ButtonUserInteractionWrapper';
import { AvatarUserInteractionWrapper } from './components/AvatarUserInteractionWrapper/AvatarUserInteractionWrapper';
import { NameUserInteractionWrapper } from './components/NameUserInteractionWrapper/NameUserInteractionWrapper';
import { QuestionTimeUserInteractionWrapper } from './components/QuestionTimeUserInteractionWrapper/QuestionTimeUserInteractionWrapper';
import { MoreMenuButtonMoreMenuWrapper } from './components/MoreMenuButtonMoreMenuWrapper/MoreMenuButtonMoreMenuWrapper';
import { UserInteractionWrapperFormHeader } from './components/UserInteractionWrapperFormHeader/UserInteractionWrapperFormHeader';
import { MoreMenuWrapperTopPart } from './components/MoreMenuWrapperTopPart/MoreMenuWrapperTopPart';
import {
    Flex,
} from '@chakra-ui/react';

const data = {
    avatar: "https://s3-alpha-sig.figma.com/img/d110/3b84/2704cfa5e8406c18566e6a0717811b05?Expires=1637539200&Signature=MRN3U2DivUikkrK5EGZpsM10T0OmmqXa00UWnQnKFqBqeLLlj7Wk68JpykrZrfCyuT-8SpwJ0TqPV6qmdEa6JGEQMrFf6abrCiHj~fGuGavFDYQMQ4dGlV-p8DsWsGxxX~UYUjSCETzcpAfHD-xKFEhYRcmfiHkG548oN3gHmviyYjQqJZjJArGxhl-j9okvoCPbFw9~golyQ3jVuqgtWHFfZdB1XFxXdSBgExSjkPwRdMfW9f-8Kn2uIe7ZuZBs7XL4ituSX-3FaVp7PsBB9zKX3IjDqp7YaMAyZhK-WcY8evqMrkmuoIOvZDFyBVbjxHS2NG~9vOJD8adBw8rMNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    name: "Ralph Edwards",
    questionTime: '3',
}


export const FormHeaderWrapperTopPart = () => {

    return (
        <Flex
            w='576px'
            h='44px'
            flex
            justifyContent='space-between'
            alignItems='center'
            bgColor='BackgroundColor'
        >
            <UserInteractionWrapperFormHeader>
                <ButtonUserInteractionWrapper />
                <AvatarUserInteractionWrapper data={data} />
                <NameUserInteractionWrapper data={data} />
                <QuestionTimeUserInteractionWrapper data={data} />
            </UserInteractionWrapperFormHeader>

            <MoreMenuWrapperTopPart>
                <MoreMenuButtonMoreMenuWrapper />
            </MoreMenuWrapperTopPart>

        </Flex>
    )
}