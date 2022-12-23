
import { ShoppingCartSimple, Minus, Plus } from "phosphor-react";
import { useContext, useState } from "react";
import { CheckoutContext } from "../../../../contexts/CheckoutContext";
import { CoffeeContainer, BuyCoffee, ActionsBuy, CoffeeTags } from "./styled";


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
    const {coffees} = useContext(CheckoutContext)
 
    const [quantity, setQuantity] = useState(0)


    function AddQuantity (){
        setQuantity((state) => state +1)
    }

    function WithdrawQuantity (){
        setQuantity((state) => state >= 1? state -1:0)
    }

    return(
        <CoffeeContainer>
            <img src={coffee.photo}/>
            <CoffeeTags>
                {coffee.category.map((tag)=>{
                    return (
                        <span key={tag}>{tag}</span>
                    )
                })}  
            </CoffeeTags>
            <h3>{coffee.title}</h3>
            <p>{coffee.description}</p>

            <BuyCoffee>
                <span>R$ {coffee.price}</span>

                <ActionsBuy>
                    <button onClick={WithdrawQuantity}>
                        <Minus size={18} weight='fill' />
                    </button>

                    <p>{quantity}</p> 
                        
                    <button onClick={AddQuantity}>
                        <Plus  size={18} weight='fill'/>
                    </button>
                </ActionsBuy>

                <button>
                    <ShoppingCartSimple size={18}  weight='fill'/>
                </button>
            </BuyCoffee>

        </CoffeeContainer>
    )
}