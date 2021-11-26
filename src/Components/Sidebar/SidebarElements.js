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
    align-items: center;
    flex-direction: column;
`

export const SidebarMenu = styled.ul`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: (4,  100px);
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    height: 50px;
    margin: 10px 0;
    border-top: 1px solid white;
    list-style: none;
    color: #fff;
    cursor: pointer;
    transition: 0.2 ease-in-out;
    text-transform: uppercase;

    &:hover {
        border: 1px solid white;
        transition: 0ms.2s ease-in-out;
    }
`

export const SideBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarBtn = styled(Link)`
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