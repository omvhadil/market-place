<script setup>
import axios from "axios";
import { onMounted, reactive, watchEffect } from "vue";
import { getKategory } from "../plugins/Api";
import { useRouter } from "vue-router";
import debounce from "../utils/debounce";

const router = useRouter();

const obj = reactive({
  kategori: [],
  data: [],
  totalData: null,
  limitData: [5, 10, 25, 50, 100],
  formLimit: 10,
  formSearch: "",
  loading: false,
  skip: 0,
  totalPage: 0,
  page: 1,
});

const onGetData = async () => {
  obj.loading = true;
  await axios
    // .get(
    //   `https://dummyjson.com/products/search?q=${obj.formSearch}&limit=${obj.formLimit}&skip=0`
    // )
    .get(`https://dummyjson.com/products/search`, {
      params: {
        q: obj.formSearch,
        limit: obj.formLimit,
        skip: obj.skip,
      },
    })
    .then((Response) => {
      obj.loading = false;
      obj.data = Response.data.products;
      obj.totalData = Response.data.total;
      obj.skip = Response.data.skip;
      obj.totalPage = Math.ceil(obj.totalData / obj.formLimit);
      // console.log(Response.data.products);
    })
    .catch((error) => {
      obj.loading = false;
      alert(error);
    });
};

// funtion untuk getKategori
const onGetKategory = () => {
  getKategory()
    .then(({ data }) => {
      obj.kategori = data;
    })
    .catch((error) => {
      alert(error);
    });
};

// Function untuk pagination
const paginate = (page) => {
  obj.page = page;
  obj.skip = (obj.page - 1) * obj.formLimit;
};

//function untuk next page
const nextPage = () => {
  if (obj.page < obj.totalPage) {
    obj.page++;
    obj.skip = (obj.page - 1) * obj.formLimit;
  }
};

//function untuk prev page
const prevPage = () => {
  if (obj.page > 1) {
    obj.page--;
    obj.skip = (obj.page - 1) * obj.formLimit;
  }
};

const delaySearch = debounce((e) => {
  obj.formSearch = e.target.value;
}, 500);

watchEffect(() => {
  onGetData();
});

onMounted(() => {
  onGetKategory();
});
</script>
<template>
  <div class="container-list-items p-3">
    <div class="d-flex gap-3">
      <div class="col-1">
        <select
          v-model="obj.formLimit"
          class="form-select"
          aria-label="Default select example"
        >
          <option
            v-for="(item, index) in obj.limitData"
            :key="index"
            :value="item"
          >
            {{ item }}
          </option>
        </select>
      </div>
      <div class="col-3">
        <input
          @input="delaySearch"
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div class="col-3">
        <select class="form-select" aria-label="Default select example">
          <option value="">Open this select menu</option>
          <option
            v-for="(item, index) in obj.kategori"
            :key="index"
            :value="item"
          >
            {{ item }}
          </option>
        </select>
      </div>
    </div>

    <div v-if="obj.loading" class="spinner text-center">
      <div class="spinner-border text-white" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <h6 class="mt-2 text-success">Total Data : {{ obj.totalData }}</h6>
    {{ obj.totalPage }}
    <!-- ========= pagination ============== -->
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          class="page-item"
          @click="prevPage"
          :class="obj.page === 1 ? 'disabled' : ''"
        >
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="(item, index) in obj.totalPage"
          :class="obj.page === item ? 'active' : ''"
          :key="index"
        >
          <a class="page-link" @click="paginate(item)" href="#">{{ item }}</a>
        </li>

        <li
          class="page-item"
          @click="nextPage"
          :class="obj.page === obj.totalPage ? 'disabled' : ''"
        >
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    <div class="content-list d-flex mt-3 gap-3" style="flex-wrap: wrap">
      <button
        @click="router.push('/detailitem/' + item.id)"
        v-for="item in obj.data"
        :key="item.id"
        class="card"
        style="width: 15rem"
      >
        <div
          style="width: 100%; height: 200px"
          class="d-flex align-items-center justify-content-center overflow-hidden"
        >
          <img :src="item.thumbnail" class="card-img-top" alt="..." />
        </div>
        <div class="card-body">
          <div class="card-price">
            <h5>$ {{ item.price }}</h5>
            <!-- <del>{{ item. }}</del> -->
          </div>
          <h6 class="card-title">{{ item.title }} ({{ item.brand }})</h6>
          <p class="card-text">{{ item.description }}</p>
          <div class="d-flex align-items-center justify-content-between">
            <div
              class="rating d-flex bg-success rounded align-items-center"
              style="padding: 0.3rem 0.5rem"
            >
              <i class="ri-star-fill text-white"></i>
              <h6 class="m-0 ms-2 text-white">{{ item.rating }}</h6>
            </div>
            <button class="btn btn-warning" type="button">
              <i
                class="ri-shopping-cart-2-line text-white"
                style="font-size: 1.3rem"
              ></i>
            </button>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
<style scope>
.card-text {
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.card-title {
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.spinner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.486);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
