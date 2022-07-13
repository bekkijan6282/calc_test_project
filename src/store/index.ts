import Vue from 'vue'
import Vuex from 'vuex'
import {RootState} from "@/store/types";
import {product} from "@/store/product";

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    product,
  }
})
