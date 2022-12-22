import styled from "styled-components";

import BackgroundHome from '../../assets/Background-home.svg'

export const HomeContainer = styled.div`
    height: 100vh;

    display: flex;
    justify-content: center;
    flex-direction: column;

`

export const HomeIntroduction = styled.section`

    background-image: url(${BackgroundHome});

    height: 80vh;
    margin-top: 10rem;
    

    
    
    display: flex;
    justify-content: center;
    
    img{
        width: 29rem;
    }

`
export const HomeItemTitle = styled.div`
    width: 50%;
    padding: 0.25rem;

`


export const HomeTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.20rem;

   

    h1{
        font-size: 3rem;
        font-family: 'Baloo 2'; 
    }

    p{
        font-size: 1.25rem;
        font-family: 'Roboto'; 
    }

`

export const HomeItems = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 4rem;
`

const BaseItem = styled.span`
    display: flex;
    align-items: center;

    font-family: 'Roboto';
    font-size: 1rem;
    gap: 0.5rem;

    svg{
        border: none;
        border-radius: 100%;
        padding: 0.4rem;
        color: ${(props)=> props.theme['background']};
    }

    
`
export const Item01 = styled(BaseItem) `
    svg{
        background: ${(props)=> props.theme['yellow-dark']};
    }

`
export const Item02 = styled(BaseItem) `
    svg{
        background: ${(props)=> props.theme['base-text']};
    }

`
export const Item03 = styled(BaseItem) `
    svg{
        background: ${(props)=> props.theme['yellow']};
    }

`
export const Item04 = styled(BaseItem) `
    svg{
        background: ${(props)=> props.theme['purple']};
    }

`

export const HomeCoffeeLIst = styled.div`

    margin-top: 2rem;
    height: auto;
    padding: 0.5rem 6rem;
`

export const TitleFilter = styled.section`

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0rem 1rem;

  

    h2{
        font-size: 1.5rem;
        font-family: 'Baloo 2';
        font-weight: 800;
    }

    div{
        display: flex;
        gap: 1rem;
    }

`

export const ButtonTag = styled.button`
    color:${(props) => props.theme['yellow']};
    background:${(props) => props.theme['background']};
    border: 1px solid ${(props) => props.theme['yellow']};
    border-radius: 100px;
    padding: 0.375rem 0.75rem;

    font-weight: bold;

    cursor: pointer;

`

export const HomeListCoffe = styled.section`
    border: 2px solid black;
    padding: 1rem 1rem;

    
`