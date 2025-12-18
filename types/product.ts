export type Product = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    caloriesPerServing?: number;
    quantity?: number
}