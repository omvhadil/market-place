import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com",
});

const getKategory = async () => await instance.get("/products/categories");

export { instance, getKategory };
