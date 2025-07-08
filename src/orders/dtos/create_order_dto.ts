import { ApiProperty } from "@nestjs/swagger";
import { PaymentMethod } from "../entities/order.model";
import { IsNotEmpty, IsOptional, IsEnum } from "class-validator";

export class CreateOrderDto {
  @IsNotEmpty()
  @ApiProperty()
  amount!: number;

  @IsNotEmpty()
  @ApiProperty()
  longitude!: number;

  @IsNotEmpty()
  @ApiProperty()
  latitude!: number;

  @IsNotEmpty()
  @IsEnum(PaymentMethod)
  @ApiProperty({ enum: PaymentMethod })
  payment!: PaymentMethod;

  @IsOptional()
  @ApiProperty()
  clientId?: string;
}
