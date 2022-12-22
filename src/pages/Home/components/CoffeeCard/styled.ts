import styled from "styled-components";


export const CoffeeContainer = styled.div`
    background: ${(props)=> props.theme['base-card']};


    width: 16rem;
    height: 19.375rem;
    padding: 1.25rem;

    border-radius: 6px 36px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;


    img{
        margin-top: -2.5rem;
        width: 7.5rem;
    }

    span{
        color:${(props) => props.theme['yellow-dark']};
        background:${(props) => props.theme['yellow-light']};
        border: none;
        border-radius: 100px;
        padding: 0.375rem 0.75rem;
        font-size: 0.625rem;
        font-weight: bold;
    }

    h3{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 130%;
        
    }

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color:${(props) => props.theme['base-label']};
    }



`


export const BuyCoffee = styled.section`
    border: 2px solid red;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
       
    padding: 0.5rem;
    margin: 1rem;
    width: 100%;

    span{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 400;
        font-size: 1.5rem;
        
        border: none;
        background: ${(props) => props.theme['base-card']};
        color: ${(props) => props.theme['base-title']};
    }


    button{
        padding: 0.5rem;
        background: ${(props) => props.theme['purple-dark']};
        border: none;
        border-radius: 6px;

        svg{
            color: ${(props) => props.theme['background']};  
        }
    }

`