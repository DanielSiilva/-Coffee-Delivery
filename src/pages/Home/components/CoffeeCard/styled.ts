import styled from "styled-components";


export const CoffeeContainer = styled.div`
    background: ${(props)=> props.theme['base-card']};


    width: 16rem;
    height: 19.375rem;
    padding: 1.5rem;

    border-radius: 6px 36px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;


    img{
        margin-top: -2.5rem;
        max-width: 7.5rem;
        min-width:7.5rem;
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

export const CoffeeTags = styled.section`
   
    width: 100%;

    display: flex;
    justify-content:center;
    align-items: center;
    gap: 0.2rem;

    padding: 0.2rem 2rem;


    span{
        color:${(props) => props.theme['yellow-dark']};
        background:${(props) => props.theme['yellow-light']};
        border: none;
        border-radius: 100px;
        padding: 0.375rem 0.75rem;
        font-size: 0.625rem;
        font-weight: bold;
        white-space: nowrap;

       
        

     
    }


`



export const BuyCoffee = styled.section`


    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
       
    padding: 0.5rem 1rem;
    margin-top: 1.5rem;
   
    span{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 400;
        font-size: 1.4rem;
        white-space: nowrap;
        
        border: none;
        background: ${(props) => props.theme['base-card']};
        color: ${(props) => props.theme['base-title']};
    }


    button{
        padding: 0.5rem;
        background: ${(props) => props.theme['purple-dark']};
        border: none;
        border-radius: 6px;
        cursor: pointer;

        svg{
            color: ${(props) => props.theme['background']};  
        }
    }

`


export const ActionsBuy = styled.div`

    display: flex;
    justify-content:center ;
    gap: 0.125rem;
    align-items: center;

  
    background: ${(props)=> props.theme['base-button']};
    border-radius: 8px;
    text-align: center;


    
    p{
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 1.1rem;
        align-items: center;
        
        color:${(props)=> props.theme['base-title']};

       
    }

    button{
        background: ${(props)=> props.theme['base-button']};
        cursor: pointer;

        svg{
            color:${(props)=> props.theme['purple-dark']};
        }
    }
`