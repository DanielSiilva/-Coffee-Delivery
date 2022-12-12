import styled from "styled-components";


export const HeaderContainer = styled.header `
 
    height: 15vh;


    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;

        img{
            width: 4rem;
        }
    }

    section{
        display: flex;
        gap: 1rem;


        div{
            padding: 0.5rem;
            background: ${(props)=> props.theme['purple-light']};
            color: ${(props)=> props.theme['purple-dark']};
            border-radius: 8px;
            font-weight: 400;

            span{
                display: flex;
                align-items: center;


                svg {
                    color: ${(props) => props.theme['purple-dark']};
                }
            }
            
        }


        button{
            background-color: ${(props)=> props.theme['yellow-light']};
            border: 0px;
            width: 3rem;
            border-radius: 8px;
        }
    }

`