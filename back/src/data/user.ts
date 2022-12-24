import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AddUserDto {
    @IsString
    @IsNotEmpty
    id: string;

    @IsString
    @IsNotEmpty
    pwd: string;

    @IsString
    @IsNotEmpty
    nickname: string;
}

export class User {
    id: string;
    nickname: string;
    point: number;

}