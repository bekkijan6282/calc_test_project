export interface Product {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    sum: number;
    checked: boolean;
}

export interface ProductState {
    products: Product[];
}
