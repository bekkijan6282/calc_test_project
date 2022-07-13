<template>
  <b-row>
    <b-col :lg="4" :xl="4" :md="6" :sm="12" :xs="12">
      <b-form-group>
        <b-form-input v-model="form.productName"></b-form-input>
      </b-form-group>
    </b-col>
    <b-col :lg="2" :xl="2" :md="6" :sm="12" :xs="12">
      <b-form-group>
        <b-form-input v-model="form.price"></b-form-input>
      </b-form-group>
    </b-col>
    <b-col :lg="2" :xl="2" :md="6" :sm="12" :xs="12">
      <b-form-group>
        <b-form-input v-model="form.quantity"></b-form-input>
      </b-form-group>
    </b-col>
    <b-col :lg="2" :xl="2" :md="6" :sm="12" :xs="12">
      <b-button variant="primary" @click="addNewProduct">Add</b-button>
    </b-col>
  </b-row>
</template>

<script lang="ts">

import {Vue} from "vue-property-decorator";
import {Product} from "@/store/product/types";
import Component from "vue-class-component";

@Component
export default class AddProduct extends Vue {
  form: Product = {
    id: 0,
    productName: '',
    price: 0,
    quantity: 0,
    sum: 0,
    checked: false,
  }

  addNewProduct() {
    if (this.form.productName !== '' && this.form.price !== 0 && this.form.quantity !== 0) {
      this.$store.dispatch('product/pushNewProduct', this.form).then(() => {
        this.form = {
          id: 0,
          productName: '',
          price: 0,
          quantity: 0,
          sum: 0,
          checked: false,
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
