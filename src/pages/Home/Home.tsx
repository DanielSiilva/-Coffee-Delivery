import { 
    HomeContainer, 
    HomeIntroduction, 
    HomeTitle, 
    HomeItems, 
    HomeItemTitle, 
    Item01, 
    Item02, 
    Item03, 
    Item04 , 
    HomeCoffeeLIst, 
    TitleFilter, 
    ButtonTag, 
    HomeListCoffe,

} from "./styled";

import { ShoppingCart, Package, Timer, Coffee} from "phosphor-react";

import Homecoffe from "../../assets/homecoffe.svg"
import { useContext } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";
import { CoffeeCard } from "./components/CoffeeCard/CoffeeCard";


const  TYPE_TAGS = [
    'TRADICONAL',
    'ESPECIAL',
    'COM LEITE',
    'ALCOÓLICO',
    'GELADO'
]

export function Home () {
    const {coffees} = useContext(CheckoutContext)

 

    return (
        <HomeContainer>
            <HomeIntroduction>
                <HomeItemTitle>
                    <HomeTitle>
                        <h1>
                            Encontre o café perfeito para qualquer hora do dia
                        </h1>

                        <p>
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </p>
                    </HomeTitle>

                    <HomeItems>
                        <Item01>
                            <ShoppingCart size={28} weight='fill'/>
                            Compra simples e segura
                        </Item01>

                        <Item02>
                            <Package size={28} weight='fill'/>
                            Embalagem mantém o café intacto
                        </Item02>

                        <Item03>
                            <Timer size={28} weight='fill'/>
                            Entrega rápida e rastreada
                        </Item03>

                        <Item04>
                            <Coffee size={28} weight='fill'/>
                            O café chega fresquinho até você
                        </Item04>
                        
                    </HomeItems>
                     
                </HomeItemTitle>

                <img src={Homecoffe} />
            </HomeIntroduction>

            <HomeCoffeeLIst>
                <TitleFilter>
                    <h2> Nossos cafés</h2>

                   <div> 
                        {TYPE_TAGS.map((tag) =>{
                            return (
                                <ButtonTag
                                    key={tag}
                                >
                                    {tag}
                                </ButtonTag>
    
                            )
                        })}
                   </div>
                    
                </TitleFilter>

                <HomeListCoffe>
                    {coffees.map((coffee)=>{
                        return(
                            <CoffeeCard 
                                key={coffee.id}
                                coffee={coffee}
                            />
                        )
                    })}
                </HomeListCoffe>         
            </HomeCoffeeLIst>
        </HomeContainer>
       
    )
}