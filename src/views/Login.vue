<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { dataLogin } from "../store";

const router = useRouter();

const login = reactive({
  form: {
    username: "",
    password: "",
  },
  loading: false,
});

const onLogin = async () => {
  login.loading = true;
  const getLogin = {
    username: login.form.username,
    password: login.form.password,
  };
  await axios
    .post("https://dummyjson.com/auth/login", getLogin)
    .then(({ data }) => {
      //   console.log(data);
      dataLogin.user = data;
      //untuk menyimpan data di localStorege
      localStorage.setItem("user", JSON.stringify(data));
      router.replace("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
<template>
  <div class="container">
    <div class="card-login ms-auto me-auto border p-4 bg-success rounded">
      <h3 class="text-center">Login</h3>

      <form @submit.prevent="onLogin">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Username</label>
          <input
            type="text"
            v-model="login.form.username"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            v-model="login.form.password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" class="btn btn-dark">
          <span>
            <!-- {{ login.loading ? "loading..." : "login" } -->
            Login
          </span>
        </button>
      </form>
    </div>
  </div>
</template>
<style scope>
.card-login {
  width: 500px;
  height: auto;
}
</style>
