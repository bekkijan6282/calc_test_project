import {ActionTree} from "vuex";
import {Product, ProductState} from "@/store/product/types";
import {RootState} from "@/store/types";

export const actions: ActionTree<ProductState, RootState> = {
    setProducts({commit}) {
        commit('SET_PRODUCTS');
    },
    pushNewProduct({commit}, product: Product) {
        product.sum = product.price * product.quantity;
        commit('PUSH_PRODUCT', product);
    },

    removeProducts({commit}, productIds: Array<number>) {
        commit('REMOVE_PRODUCTS', productIds);
    }
}
