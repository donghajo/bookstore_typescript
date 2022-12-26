import axiosInstance from "./index";

export const allBookApi = () => axiosInstance.get("/book");

export const detailApi = (bookId: string) =>
  axiosInstance.get(`/book/${bookId}`);
