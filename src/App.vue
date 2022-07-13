<template>
  <div class="mt-4">
    <b-container>
      <AddProduct />
      <ProductTable class="mt-4" />
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddProduct from "@/components/AddProduct.vue";
import ProductTable from '@/components/ProductTable.vue';

@Component({
  components: {
    AddProduct,
    ProductTable,
  },
  mounted() {
    this.$store.dispatch('product/setProducts');
  }
})
export default class App extends Vue {

}
</script>


