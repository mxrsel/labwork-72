export interface Pizza {
    id: string;
    name: string;
    price: number;
    image: string
}

export interface PizzaMutation {
    name: string;
    price: number;
    image: string
}

export type ApiPizza = Omit<PizzaMutation, "id">;

export interface PizzaList {
    [id: string]: ApiPizza;
}

export interface PizzaCart {
    pizza: Pizza;
    amount: number
}