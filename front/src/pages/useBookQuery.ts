import { useQuery } from "react-query";
import { allBookApi } from "../api/BookApi";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, BookInfo } from "../types/index";

const useBookQuery = () => {
  return useQuery<AxiosResponse<ListResponse<BookInfo>>, AxiosError>(
    "nowPlayingMovie",
    allBookApi
  );
};

export default useBookQuery;
