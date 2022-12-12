import HomeCoffe from '../../assets/homecoffe.svg'
import {ShoppingCart, Timer, Package, Coffee} from 'phosphor-react'

import {HomeContainer, HomePresentation, HomeSection, HomeItens, FirstItem,SecondItem,ThirdItem,FourthItem} from './styled'



export function Home () {


    return (
        <HomeContainer>
            <HomeSection>
                <HomePresentation>
                    <div>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </div>
                    <HomeItens>
                        <FirstItem> 
                            <ShoppingCart/>
                            Compra simples e segura
                        </FirstItem>

                        <SecondItem> 
                            <Package/>
                            Embalagem mantém o café intacto
                        </SecondItem>

                        <ThirdItem> 
                            <Timer/>
                            Entrega rápida e rastreada
                        </ThirdItem>

                        <FourthItem> 
                            <Coffee />
                            O café chega fresquinho até você
                        </FourthItem>
                    </HomeItens>
                </HomePresentation>
                
                <img src={HomeCoffe} title='Home'/>

            </HomeSection>
        </HomeContainer>
       
    )
}