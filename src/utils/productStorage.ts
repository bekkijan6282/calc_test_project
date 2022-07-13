import {Product} from "@/store/product/types";
const Products_Item: string = 'PRODUCTS_ITEM';

export function getProducts(): Array<Product> {
    let data: string | null = localStorage.getItem(Products_Item);
    let products: Array<Product>
    if (data !== null) {
        products = JSON.parse(data)
        return products;
    } else {
        return []
    }
}

export function setProducts(products: Array<Product>): void {
    localStorage.setItem(Products_Item, JSON.stringify(products))
}

export function removeProducts(): void {
    localStorage.removeItem(Products_Item);
}
