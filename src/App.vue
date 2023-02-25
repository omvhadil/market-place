<script setup>
import Header from "./components/Header.vue";
// import HeaderKategori from "./components/HeaderKategori.vue";
// import HomeView from "./views/HomeView.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Header />
  <!-- <HeaderKategori /> -->
  <!-- <HomeView /> -->
  <div class="container mt-4 section">
    <!-- <RouterView /> -->
    <router-view v-slot="{ Component }">
      <transition name="slide-right">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped></style>
