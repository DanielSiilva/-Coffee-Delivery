import styled from "styled-components";

export const HomeContainer = styled.div`




`

export const HomeSection = styled.div`
    display: flex;
    
    h1{
        width: 70%;
        font-family: 'Baloo 2';
        font-weight: bold;
        font-size: 2.5rem;
    }

    p{
        font-family: 'Roboto';
    }


    img{
        width: 25rem;
    }


`

export const HomePresentation = styled.div`
    display: flex;
    flex-direction: column;

`

export const HomeItens = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 5rem;
    gap: 20px;
    width: 30rem;

`
const ItemProps = styled.p`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;

    svg{
        border-radius: 100%;
        padding: 0.4rem;
        font-size: 2rem;
        color: ${(props)=> props.theme['white']};
    }

`

export const FirstItem = styled(ItemProps)`

    svg{
        background: ${(props)=>props.theme['yellow-dark']};
    }
`
export const SecondItem = styled(ItemProps)`

    svg{
        background: ${(props)=>props.theme['base-text']}; 
    }
`
export const ThirdItem = styled(ItemProps)`

    svg{
        background: ${(props)=>props.theme['yellow']};
    }
`
export const FourthItem = styled(ItemProps)`

    svg{
        background: ${(props)=>props.theme['purple-dark']};
    }
`

