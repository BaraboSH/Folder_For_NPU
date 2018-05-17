import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordersFilter'
})
export class OrdersFilterPipe implements PipeTransform {
  transform(orders, id) {
    return orders.filter(order => {
        return order.orderId.includes(id);
    });
  }
}