import {ProductState} from "@/store/product/types";
import { Module } from 'vuex';
import {RootState} from "@/store/types";
import {actions} from "@/store/product/actions";
import {getters} from "@/store/product/getters";
import {mutations} from "@/store/product/mutations";

export const state: ProductState = {
    products: []
}

const namespaced: boolean = true;

export const product: Module<ProductState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
}
