import React from 'react'
import close from './icon-close.svg'
import logo from './logo-bookmark.svg'
import { 
    SidebarContainer,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrapper,
    SidebarBtn
} from './SidebarElements'

export default function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <img src={logo} alt='logo' />
                <img src={close} alt='close'/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='feature' onClick={toggle}>Features</SidebarLink>
                    <SidebarLink to='pricing' onClick={toggle}>Pricing</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWrapper>
                    <SidebarBtn to='login' onClick={toggle}>Login</SidebarBtn>
                </SideBtnWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
