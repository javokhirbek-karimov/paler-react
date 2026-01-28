import { OrderStatus } from "../enums/order.enum";
import { Product } from "./product";

export interface OrderItem {
  _id: string;
  itemQuantity: number;
  itemDiscount: number;
  orderId: string;
  productId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  _id: string;
  orderTotal: number;
  orderDelivery: number;
  orderStatus: OrderStatus;
  memberId: string;
  createdAt: Date;
  updatedAt: Date;
  /** from Aggregation**/
  orderItems: OrderItem[];
  productData: Product[];
}

export interface OrderItemInput {
  productId: string;
  itemQuantity: number;
  itemDiscount: number;
  orderId?: string;
}

export interface OrderInquiry {
  page?: number;
  limit?: number;
  orderStatus: OrderStatus | OrderStatus[];
}

export interface OrderUpdateInput {
  orderId: string;
  orderStatus: OrderStatus;
}
