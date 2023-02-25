<script setup>
import { RouterLink, useRouter } from "vue-router";
import { dataLogin } from "../store";

const router = useRouter();

const logout = () => {
  localStorage.removeItem("user");
  dataLogin.user = null;
  router.push("/login");
};
</script>
<template>
  <nav class="section header" style="padding-top: 1rem; padding-bottom: 1rem">
    <div
      style="display: flex; justify-content: space-between; align-items: center"
    >
      <RouterLink to="/" class="fw-bold m-0 text-success">ALABIM</RouterLink>

      <div class="d-flex gap-5">
        <div class="nav-icon">
          <i class="ri-shopping-cart-2-line icon"></i>
          <span class="m-0">Keranjang</span>
        </div>
        <div
          v-if="dataLogin.user"
          class="nav-icon"
          @click="router.push('/profile')"
        >
          <div class="user">
            <i class="ri-user-line icon"></i>
            <span class="m-0">{{ dataLogin.user.username }}</span>
          </div>
          <button @click="logout">keluar</button>
        </div>
        <RouterLink v-else to="/login">Login</RouterLink>
      </div>
    </div>
  </nav>
</template>
<style scope>
.nav-icon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
}
.nav-icon:hover {
  color: rgb(2, 128, 29);
  font-weight: 500;
}
.header {
  border-bottom: 5px solid rgb(2, 128, 29);
}
</style>
