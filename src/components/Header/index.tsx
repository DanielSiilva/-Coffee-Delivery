import { MapPin } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'

import { HeaderContainer } from "./styled"

export function Header () {


    return (

        <HeaderContainer>
            <nav>
                <img  src={Logo} title='Logo'/>

                <section>
                    <div>
                        <MapPin size={32} />
                        <span> Porto Alegre, RS</span>
                    </div>
                    <button> Carrinho</button>
                </section>
            </nav>
        </HeaderContainer>
    )
}