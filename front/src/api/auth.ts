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
export const signUpApi = (data: SignUpdata) => {
  return axiosInstance.post("/signup", data);
};

export const logInApi = (data: LoginUpdate) => {
  return axiosInstance.post("/login", data, { withCredentials: true });
};
