import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";
import { PaymentMethod } from "../entities/order.model";

export class UpdateOrderDto {
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  amount?: number;

  @IsOptional()
  @ApiProperty()
  longitude?: number;

  @IsOptional()
  @ApiProperty()
  latitude?: number;

  @IsOptional()
  @ApiProperty()
  payment?: PaymentMethod;

  @IsOptional()
  @ApiProperty()
  clientId?: string;
}
