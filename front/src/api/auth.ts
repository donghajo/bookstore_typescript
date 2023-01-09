import axiosInstance from "./index";
interface SignUpdata {
  id: string;
  password: string;
  nickname: string;
  address: string;
  detailAddress: string;
  recommender: string;
}

interface LoginUpdate {
  id: string;
  password: string;
}
export const signUpApi = (data: SignUpdata) =>
  axiosInstance.post("/signup", data);

export const logInApi = (data: LoginUpdate) =>
  axiosInstance.post("/login", data);
