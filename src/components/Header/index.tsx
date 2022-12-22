import {MapPin, ShoppingCart} from 'phosphor-react'
import Logo from '../../assets/Logo.svg'

import {NavLink} from "react-router-dom"

import { HeaderContainer, NavHeader, ButtonHeader } from "./styled"

export function Header () {


    return (

        <HeaderContainer>
            <div>
                <NavLink to=''>
                    <img  src={Logo} title='Logo Coffee Delivery'/>
                </NavLink>
                
                <NavHeader>
                    <ButtonHeader variant='purple-dark'>
                        <MapPin size={22} weight='fill'/>
                        Porto Alegre, RS
                    </ButtonHeader>

                    <NavLink to ='/checkout'>
                        <ButtonHeader variant='yellow'>
                            <ShoppingCart size={22} weight='fill'/>
                        </ButtonHeader>
                    </NavLink>
                </NavHeader>
                
            </div>
        </HeaderContainer>
    )
}