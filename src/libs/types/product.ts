import {
  ProductBrand,
  ProductMaterial,
  ProductStatus,
} from "../enums/product.enum";

export interface Product {
  _id: string;
  productStatus?: ProductStatus;
  productBrand: ProductBrand;
  productName: string;
  productPrice: number;
  productDiscount: number;
  productMaterial?: ProductMaterial;
  productVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductInquiry {
  order: string;
  page: number;
  limit: number;
  productBrand?: ProductBrand;
  search?: string;
}
