


import Americano from '../assets/coffee/Americano.svg';
import Arabe from '../assets/coffee/Arabe.svg';
import Cafe_Gelado from '../assets/coffee/Cafe_Gelado.svg';
import Capuccino from '../assets/coffee/Capuccino.svg';
import Chocolate_Quente from '../assets/coffee/Chocolate_Quente.svg';
import Cubano from '../assets/coffee/Cubano.svg';
import Expresso_Cremoso from '../assets/coffee/Expresso_Cremoso.svg';
import Expresso from '../assets/coffee/Expresso.svg';
import Havaiano from '../assets/coffee/Havaiano.svg';
import Irlandes from '../assets/coffee/Irlandes.svg';
import Latte from '../assets/coffee/Latte.svg';
import Macchiato from '../assets/coffee/Macchiato.svg';
import Mochaccino from '../assets/coffee/Mochaccino.svg';

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
        photo: Expresso,
        category: ['TRADICIONAL'],
        title: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price:9.90
    },
    {
        id:2,
        photo: Americano,
        category: ['TRADICIONAL'],
        title: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price:9.90
    },
    {
        id:3,
        photo: Expresso_Cremoso,
        category: ['TRADICIONAL'],
        title: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price:9.90
    },
    {
        id:4,
        photo: Cafe_Gelado,
        category: ['TRADICIONAL', 'GELADO', 'QUENTE'],
        title: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price:9.90
    },
    {
        id:5,
        photo: Expresso_Cremoso,
        category: ['TRADICIONAL', 'COM LEITE'],
        title: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        price:9.90
    },
    {
        id:6,
        photo: Latte,
        category: ['TRADICIONAL', 'COM LEITE'],
        title: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        price:9.90
    },
    {
        id:7,
        photo: Capuccino,
        category: ['TRADICIONAL', 'COM LEITE'],
        title: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        price:9.90
    },
    {
        id:8,
        photo: Macchiato,
        category: ['TRADICIONAL', 'COM LEITE'],
        title: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente ",
        price:9.90
    },
    {
        id:9,
        photo: Mochaccino,
        category: ['TRADICIONAL', 'COM LEITE'],
        title: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        price:9.90
    },
    {
        id:10,
        photo: Chocolate_Quente,
        category: ['ESPECIAL', 'COM LEITE'],
        title: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café ",
        price:9.90
    },
    {
        id:11,
        photo: Cubano,
        category: ['ESPECIAL', 'ALCOÓLICO','GELADO'],
        title: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã ",
        price:9.90
    },
    {
        id:12,
        photo: Havaiano,
        category: ['ESPECIAL'],
        title: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco ",
        price:9.90
    },
    {
        id:13,
        photo: Arabe,
        category: ['ESPECIAL'],
        title: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price:9.90
    },
    {
        id:14,
        photo: Irlandes,
        category: ['ESPECIAL', 'ALCOÓLICO'],
        title: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly ",
        price:9.90
    },
    
    
    
]