import axios from "axios";
import { serverApi } from "../../libs/config";
import {
  Order,
  OrderInquiry,
  OrderItemInput,
  OrderUpdateInput,
} from "../../libs/types/order";
import { CardItem } from "../../libs/types/search";

class OrderService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async createOrder(input: CardItem[]): Promise<Order> {
    try {
      const orderItems: OrderItemInput[] = input.map((cardItem: CardItem) => {
        return {
          itemQuantity: cardItem.quantity,
          itemDiscount: cardItem.discount,
          productId: cardItem._id,
        };
      });

      const url = `${this.path}/order/create`;
      const result = await axios.post(url, orderItems, {
        withCredentials: true,
      });

      console.log("createOrder:", result);

      return result.data;
    } catch (err) {
      console.log("Err, CreateOrder:", err);
      throw err;
    }
  }

  public async cancelOrder(input: OrderUpdateInput) {
    const url = `${this.path}/order/cancelOrder`;
    const result = await axios.post(url, input, { withCredentials: true });
    return result.data;
  }

  public async getMyOrders(input: OrderInquiry): Promise<Order[]> {
    try {
      const url = `${this.path}/order/all`;

      const params = new URLSearchParams();
      params.append("page", String(input.page));
      params.append("limit", String(input.limit));

      if (Array.isArray(input.orderStatus)) {
        input.orderStatus.forEach((status) =>
          params.append("orderStatus", status),
        );
      } else {
        params.append("orderStatus", input.orderStatus);
      }

      const result = await axios.get(`${url}?${params.toString()}`, {
        withCredentials: true,
      });

      return result.data;
    } catch (err) {
      console.log("Err, getMyOrders:", err);
      throw err;
    }
  }

  public async payOrder(input: OrderUpdateInput): Promise<Order> {
    try {
      const url = `${this.path}/order/payOrder`;
      const result = await axios.post(url, input, { withCredentials: true });

      console.log("payOrder:", result);

      return result.data;
    } catch (err) {
      console.log("Err, payOrders:", err);
      throw err;
    }
  }

  public async receiveOrder(input: OrderUpdateInput): Promise<Order> {
    try {
      const url = `${this.path}/order/recieveOrder`;
      const result = await axios.post(url, input, { withCredentials: true });

      console.log("recieveOrder:", result);

      return result.data;
    } catch (err) {
      console.log("Err, recieveOrder:", err);
      throw err;
    }
  }
}

export default OrderService;
