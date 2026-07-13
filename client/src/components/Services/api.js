import axios from "axios";

const BASE_URL = "http://localhost:5000";

const api = axios.create({
    baseURL: BASE_URL
});

export const getAllProducts = () => api.get("/products");

export const getProductById = (id) => api.get(`/products/${id}`);

export const getAllBanners = () => api.get("/banners");
export const getAllCategories = () => api.get("/categories");

export default api;