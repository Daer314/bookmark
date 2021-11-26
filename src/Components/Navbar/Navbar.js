import React from 'react'
import logo from './logo-bookmark.svg'
import menu from './icon-hamburger.svg'
import { Nav,
        NavbarContainer,
        NavLogo,
        MobileIcon,
        NavItem,
        NavLinks,
        NavMenu,
        NavBtn,
        NavBtnLink
} from './NavbarElements'

export default function Navbar({toggle}) {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <img src={logo} alt='logo' />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <img src={menu} alt='menu' />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='feature'>
                                Features
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='pricing'>
                                Pricing
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>
                                Contact
                            </NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to='login'>
                                Login
                            </NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}
