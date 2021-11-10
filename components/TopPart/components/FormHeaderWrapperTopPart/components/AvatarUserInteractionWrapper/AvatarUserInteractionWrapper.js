
import {
    Avatar,
} from '@chakra-ui/react';

export const AvatarUserInteractionWrapper = ({ data } ) => {
    const {avatar, name } = data;
    return (
        <Avatar
            width='44px'
            height='44px'
            marginLeft='12px'
            name={name} src={avatar} />
    )
}