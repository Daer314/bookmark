import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: hsl(229, 31%, 21%);
    display: grid;
    align-items: flex-start;
    padding-top: 50px;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '0.98' : '0')};
    top: ${({isOpen}) => (isOpen ? '0': '-100%')};
`

export const Icon = styled.div`
    width: 100%;
    padding: 0px 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
`

export const SidebarWrapper = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SidebarMenu = styled.ul`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: (4,  100px);
`

export const SidebarLink = styled(Link)`
    letter-spacing: 2.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    height: 75px;
    padding: 20px 0;
    border-top: 1px solid white;
    list-style: none;
    color: #fff;
    cursor: pointer;
    transition: 0.2 ease-in-out;
    text-transform: uppercase;

    &:hover {
        color: hsl(0, 94%, 66%);
        transition: 0ms.2s ease-in-out;
    }
`

export const SideBtnWrapper = styled.div`
    width: 80%;
    border-top: 1px solid white;
    padding-top: 25px;
    display: flex;
    justify-content: center;
`

export const SidebarBtn = styled(Link)`
    text-align: center;
    width: 100%;
    text-transform: uppercase;
    border-radius: 5px;
    background-color: transparent;
    border: 2px solid white;
    padding: 12px 22px;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 2.5px;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: white;
        color: hsl(0, 94%, 66%);
        border: 2px solid hsl(0, 94%, 66%);
    }
`