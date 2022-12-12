import {MapPin, ShoppingCart} from 'phosphor-react'
import Logo from '../../assets/Logo.svg'

import { HeaderContainer } from "./styled"

export function Header () {


    return (

        <HeaderContainer>
            <nav>
                <img  src={Logo} title='Logo'/>

                <section>
                    <div>
                        <span> 
                            <MapPin  size={22}/>
                            Porto Alegre, RS
                        </span>
                    </div>
                    <button>
                        <ShoppingCart size={22}/>
                    </button>
                </section>
            </nav>
        </HeaderContainer>
    )
}