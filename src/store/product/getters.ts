import {GetterTree} from "vuex";
import {Product, ProductState} from "@/store/product/types";
import {RootState} from "@/store/types";

export const getters: GetterTree<ProductState, RootState> = {
    getProducts(state): Array<Product> {
        return state.products;
    },
    getSum(state): number {
        let sum: number = 0;
        for(let i: number=0;i<state.products.length;i++) {
            sum += state.products[i].sum;
        }

        return sum;
    }
}
