


import Americano from '../assets/coffee/Americano.svg'

export interface coffee  {
    id:number,
    photo: string;
    category: string[],
    title:string,
    description: string,
    price:number,
}

export const DataBase:coffee[] = [
    {
        id:1,
        photo: Americano,
        category: ['TRADICIONAL'],
        title: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price:9.90
    }
    
]