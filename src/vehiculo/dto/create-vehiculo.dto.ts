import { IsNumber } from "class-validator";
import {IsString} from "class-validator";

export class CreateVehiculoDto {
    @IsString()
    placa : string;
    @IsNumber()
    modelo : number;
    @IsString()
    marca : string
}