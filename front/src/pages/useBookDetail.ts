import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { detailApi } from "../api/BookApi";
import { DetailResponse } from "../types";

const useBookDetail = (id: string) => {
  const queryFn = () => detailApi(id);
  const { isLoading, isError, data } = useQuery<
    AxiosResponse<DetailResponse>,
    AxiosError
  >(["tvDetail", id], queryFn);

  return {
    isLoading,
    isError,
    data: data?.data,
  };
};

export default useBookDetail;
