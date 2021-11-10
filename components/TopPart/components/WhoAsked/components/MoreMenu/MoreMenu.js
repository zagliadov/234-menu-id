
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react';

export const MoreMenu = () => {

    return (
        <Menu isLazy id='234243-menu-id'>
            <MenuButton as={Button} color='rgba(95, 116, 149, 0.501961)'
                pb='9px'
                backgroundColor='transparent'>
                ...
            </MenuButton>
            <MenuList>
                <MenuItem key='Download'>Download</MenuItem>
                <MenuItem key='CreateACopy'> Create a Copy</MenuItem>
                <MenuItem key='MarkAsDraft'>Mark as Draft</MenuItem>
                <MenuItem key='Delete'>Delete</MenuItem>
                <MenuItem key='AttendAWorkshop'>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
    )
}