import { reactive } from "vue";

export const dataLogin = reactive({
  user: JSON.parse(localStorage.getItem("user")) || null,
});
