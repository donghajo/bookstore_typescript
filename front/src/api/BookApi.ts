import axiosInstance from "./index";

export const allBookApi = () => axiosInstance.get("/");

export const detailApi = (bookId: string) =>
  axiosInstance.get(`/book/${bookId}`);
