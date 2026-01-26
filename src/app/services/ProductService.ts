import axios from "axios";

import { serverApi } from "../../libs/config";
import { Product, ProductInquiry } from "../../libs/types/product";
import { ProductBrand } from "../../libs/enums/product.enum";

class ProductService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getProducts(input: ProductInquiry): Promise<Product[]> {
    try {
      let url = `${this.path}/product/all?order=${input.order}&page=${input.page}&limit=${input.limit}`;
      if (input.productBrand && input.productBrand !== ProductBrand.ALL)
        url += `&productBrand=${input.productBrand}`;
      if (input.search) url += `&search=${input.search}`;

      const result = await axios.get(url);
      console.log("getProducts:", result);

      return result.data;
    } catch (err) {
      console.log("Error, getProducts:", err);
      throw err;
    }
  }

  public async getTopProducts(): Promise<Product[]> {
    const result = await axios.get(`${this.path}/product/topProducts`);
    return result.data;
  }

  public async getProduct(productId: string): Promise<Product> {
    try {
      const url = `${this.path}/product/${productId}`;
      const result = await axios.get(url, { withCredentials: true });

      return result.data;
    } catch (err) {
      console.log("Error, getProducts:", err);
      throw err;
    }
  }
}

export default ProductService;
