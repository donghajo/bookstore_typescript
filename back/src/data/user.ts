import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export interface Signup {
    id: string;
    pwd: string;
    nickname: string;
    zipcode: string;
    defaultAddress: string;
    detailAddress: string;
}

export interface Login {
    id: string;
    pwd: string;
}

export interface JwtUser {
    id: string;
    role: string;
}