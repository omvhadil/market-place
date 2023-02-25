<script setup>
import { useRoute } from "vue-router";
import axios from "axios";
import { onMounted, reactive } from "vue";

const obj = reactive({
  product: [],
});

// const router = useRouter();
const idDetailItem = useRoute().params.id;

const getDetailItem = async () => {
  await axios
    .get(`https://dummyjson.com/products/` + idDetailItem)
    .then((Response) => {
      obj.product = Response.data;
      console.log(Response.data);
    })
    .catch((error) => {
      alert(error);
    });
};

onMounted(() => {
  getDetailItem();
});
</script>
<template>
  <div class="row">
    <div class="col-6">
      <div class="content-image border" style="width: 100%; height: 400px">
        <img :src="obj.product.thumbnail" class="image-product" />
      </div>
    </div>
    <div class="col-6 ps-5">
      <h3>$ {{ obj.product.price }}</h3>
      <h2>{{ obj.product.title }}</h2>
      <span>{{ obj.product.description }}</span>
      <h5 class="mt-3">Stok : {{ obj.product.stock }}</h5>
      <button class="bg-success mt-2 p-2 rounded">
        <i class="ri-star-line text-white me-2"></i>
        <span class="text-white">{{ obj.product.rating }}</span>
      </button>
    </div>
  </div>
</template>
<style scope>
.image-product {
  height: 100%;
  object-fit: cover;
}
</style>
