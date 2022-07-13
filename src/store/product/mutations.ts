import {MutationTree} from "vuex";
import {Product, ProductState} from "@/store/product/types";
import {getProducts, setProducts} from "@/utils/productStorage";

export const mutations: MutationTree<ProductState> = {
    SET_PRODUCTS(state) {
      state.products = getProducts();
    },
    PUSH_PRODUCT(state, payload: Product) {
        if (state.products.length === 0) {
            payload.id = 1;
        } else {
            payload.id = state.products[state.products.length - 1].id + 1
        }
        state.products.push(payload);
        setProducts(state.products);
    },

    REMOVE_PRODUCTS(state, payload: Array<number>) {
        payload.forEach((item: number) => {
            const index = state.products.findIndex((i) => i.id === item)
            state.products.splice(index,1)
        });
        setProducts(state.products);
    }
}
