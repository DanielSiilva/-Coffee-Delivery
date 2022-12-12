import { ReactNode } from "react"
import Expresso from "../assets/Expresso.svg"



export type coffee = {
    id:number,
    photo: ReactNode,
    category: string[]
    title:string,
    description:string,
    price:number,
}

export const DataBase:coffee[] = [
    {
        id:1,
        photo: Expresso,
        category: ['Tradicional'],
        title: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price:9.90
    }
]