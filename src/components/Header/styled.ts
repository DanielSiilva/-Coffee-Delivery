import styled, { css } from "styled-components";


export const HeaderContainer = styled.header `
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 15vh;
    padding: 2rem 6rem;



    

    div{
        width: 100%;
        padding: 0.313rem;


        display: flex;
        justify-content: space-between;
        align-items: center;

  
    }
`

export const NavHeader = styled.nav`
    display: flex;
    gap: 0.625rem;

`

interface ButtonHeaderProps{
    variant: 'purple-dark' | 'yellow' 
}

export const ButtonHeader = styled.button<ButtonHeaderProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size:0.875rem;
    font-weight: 400;
    font-family: 'Roboto';
    padding: 0.5rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    
    ${(props) =>
        props.variant === 'purple-dark' &&
    css`
        color: ${(props)=> props.theme['purple']};
        background: ${(props)=> props.theme['purple-light']};
    `}

    ${(props) =>
        props.variant === 'yellow' &&
    css`
        color: ${(props)=> props.theme['yellow-dark']};
        background: ${(props)=> props.theme['yellow-light']};

    `}



`