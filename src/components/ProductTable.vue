<template>
  <section>
    <b-table :fields="fields" :items="getProducts">
      <template #cell(id)="{item}">
        <b-form-checkbox
            v-model="item.checked"
            :value="true"
            :unchecked-value="false"
        >
        </b-form-checkbox>
      </template>
    </b-table>
    <div class="w-100 d-flex justify-content-between">
      <div>
        <b-button variant="danger" @click="removeProducts">Delete</b-button>
      </div>
      <div>
        <p>Total: {{getSum}}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Vue} from "vue-property-decorator";
import Component from "vue-class-component";
import {mapGetters} from 'vuex';
import {Product} from "@/store/product/types";

@Component({
  computed: {
    ...mapGetters('product', [
        'getProducts',
        'getSum',
    ])
  }
})

export default class ProductTable extends Vue {
  fields = [
    {key: 'id', label: 'ID'},
    {key: 'productName', label: 'Product name'},
    {key: 'price', label: 'Price'},
    {key: 'quantity', label: 'Quantity'},
    {key: 'sum', label: 'Sum'},
  ];
  getProducts: any;

  removeProducts() {
    let products: Array<number> = this.getProducts.filter((item: Product) => item.checked).map((item: Product) => item.id);
    this.$store.dispatch('product/removeProducts', products);

  }
}
</script>

<style scoped>

</style>
