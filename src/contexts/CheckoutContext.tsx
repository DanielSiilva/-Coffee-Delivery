import { createContext, ReactNode, useState } from "react"
import { DataBase } from "../DataBase/DataBase"

interface Coffees  {
    id:number,
    photo: string;
    category: string[],
    title:string,
    description: string,
    price:number,
}

interface CheckoutContextType {
    coffees: Coffees[]

}


interface CheckoutContextProviderProps {
    children: ReactNode
}


export const CheckoutContext = createContext({} as CheckoutContextType)


export function CheckoutContextProvider({children}:CheckoutContextProviderProps){
    const [coffees, setCoffees] = useState<Coffees[]>(DataBase)



    return (
        <CheckoutContext.Provider value={{
            coffees
        }}>
            {children}
        </CheckoutContext.Provider>
    )
}