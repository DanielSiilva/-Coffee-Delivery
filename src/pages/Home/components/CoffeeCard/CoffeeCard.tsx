
import { ShoppingCartSimple } from "phosphor-react";
import { CoffeeContainer, BuyCoffee } from "./styled";


export interface Coffee  {
    id:number,
    photo: string;
    category: string[],
    title:string,
    description: string,
    price:number,
}

interface CoffeeProps{
    coffee: Coffee
}


export function CoffeeCard({coffee}:CoffeeProps){
 


    return(
        <CoffeeContainer>
            <img src={coffee.photo}/>
            <span>{coffee.category}</span>
            <h3>{coffee.title}</h3>
            <p>{coffee.description}</p>

            <BuyCoffee>
                <span>R$ {coffee.price}</span>
                <button>
                    <ShoppingCartSimple size={22}  weight='fill'/>
                </button>
            </BuyCoffee>

        </CoffeeContainer>
    )
}