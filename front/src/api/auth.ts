import axiosInstance from "./index";
interface SignUpdata {
  id: string;
  pwd: string;
  nickname: string;
  zipcode: string;
  defaultAddress: string;
  detailAddress: string;
}

interface LoginUpdate {
  id: string;
  password: string;
}
export const signUpApi = (data: SignUpdata) =>
  axiosInstance.post("/signup", data);

export const logInApi = (data: LoginUpdate) =>
  axiosInstance.post("/login", data);
