import { EntityRepository, Repository } from 'typeorm';
import { Order } from '../entities/order.entity';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
  // Custom methods for querying orders can be added here
  async findByClientId(clientId: string): Promise<Order[]> {
    return this.find({ where: { clientId } });
  }

  async findByPaymentMethod(paymentMethod: string): Promise<Order[]> {
    return this.find({ where: { payment: paymentMethod } });
  }
}