import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { PaymentMethod } from "./order.model";

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  amount!: number;

  @Column()
  longitude!: number;

  @Column()
  latitude!: number;

  @Column({ nullable: true })
  clientId?: string;

  @Column({
    type: "enum",
    enum: PaymentMethod,
  })
  payment!: PaymentMethod;
}
