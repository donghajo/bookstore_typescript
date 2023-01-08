import axiosInstance from "./index";
interface SignUpdata {
  id: string;
  password: string;
  nickname: string;
  address: string;
  detailAddress: string;
  recommender: string;
}

export const signUpApi = (data: SignUpdata) =>
  axiosInstance.post("/signup", data);
