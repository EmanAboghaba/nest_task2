import { EntityRepository, Repository } from 'typeorm';
import { Order } from '../entities/order.entity';
import { PaymentMethod } from '../entities/order.model';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
  async findByClientId(clientId: string): Promise<Order[]> {
    return this.find({ where: { clientId } });
  }

  async findByPaymentMethod(paymentMethod: string): Promise<Order[]> {
    return this.find({ where: { payment: PaymentMethod.CASH } });
  }
}
