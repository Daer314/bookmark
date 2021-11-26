import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 500px) {
        transition: 0.8s  all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 110px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(Link)`
    justify-self: flex-start;
    margin-left: 24px;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 500px) {
        display: block;
        position: absolute;
        top: 34px;
        right: 20px;
        transform: translate(-100%, 60%);
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;


    @media screen and (max-width:500px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(Link)`
    text-transform: uppercase;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover{
        color: red;
    }

    /* &.active {
        color: red;
    } */
`

export const NavBtn = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 500px){
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    margin: 0 40px;
    border-radius: 5px;
    background-color: hsl(0, 94%, 66%);
    border: 1px solid hsl(0, 94%, 66%);
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: white;
        color: hsl(0, 94%, 66%);
        border: 1px solid hsl(0, 94%, 66%);
    }
`