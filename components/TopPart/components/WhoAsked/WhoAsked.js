import { MyButton } from './components/MyButton/MyButton';
import { MyAvatar } from './components/MyAvatar/MyAvatar';
import { MyName } from './components/MyName/MyName';
import { MyQuestionTime } from './components/MyQuestionTime/MyQuestionTime';
import { MoreMenuWrapper } from './components/MoreMenuWrapper/MoreMenuWrapper';
import { UserWrapperButtonNameAvatar } from './components/UserWrapperButtonNameAvatar/UserWrapperButtonNameAvatar';
import { MoreMenu } from './components/MoreMenu/MoreMenu';
import {
    Flex,
} from '@chakra-ui/react';

const data = {
    avatar: "https://s3-alpha-sig.figma.com/img/d110/3b84/2704cfa5e8406c18566e6a0717811b05?Expires=1637539200&Signature=MRN3U2DivUikkrK5EGZpsM10T0OmmqXa00UWnQnKFqBqeLLlj7Wk68JpykrZrfCyuT-8SpwJ0TqPV6qmdEa6JGEQMrFf6abrCiHj~fGuGavFDYQMQ4dGlV-p8DsWsGxxX~UYUjSCETzcpAfHD-xKFEhYRcmfiHkG548oN3gHmviyYjQqJZjJArGxhl-j9okvoCPbFw9~golyQ3jVuqgtWHFfZdB1XFxXdSBgExSjkPwRdMfW9f-8Kn2uIe7ZuZBs7XL4ituSX-3FaVp7PsBB9zKX3IjDqp7YaMAyZhK-WcY8evqMrkmuoIOvZDFyBVbjxHS2NG~9vOJD8adBw8rMNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    name: "Ralph Edwards",
    questionTime: '3',
}


export const WhoAsked = () => {

    return (
        <Flex
            w='576px'
            h='44px'
            flex
            justifyContent='space-between'
            alignItems='center'
            bgColor='BackgroundColor'
            borderRadius='100px'
        >
            <UserWrapperButtonNameAvatar>
                <MyButton />
                <MyAvatar data={data} />
                <MyName data={data} />
                <MyQuestionTime data={data} />
            </UserWrapperButtonNameAvatar>

            <MoreMenuWrapper>
                <MoreMenu />
            </MoreMenuWrapper>

        </Flex>
    )
}