import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import {
  ProductBrand,
  ProductMaterial,
  ProductStatus,
} from "../../../libs/enums/product.enum";
import { Product } from "../../../libs/types/product";

const staticBestSelling: Product[] = [
  {
    _id: "1",
    productStatus: ProductStatus.ACTIVE,
    productBrand: ProductBrand.ROLEX,
    productName: "Rolex Submariner",
    productPrice: 12500,
    productDiscount: 10000,
    productMaterial: ProductMaterial.STEEL,
    productImages: ["img/Day-1.png"],
    productViews: 1200,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "2",
    productStatus: ProductStatus.ACTIVE,
    productBrand: ProductBrand.TISSOT,
    productName: "Tissot PRX",
    productPrice: 650,
    productDiscount: 600,
    productMaterial: ProductMaterial.STEEL,
    productImages: ["img/Seastar-1.png"],
    productViews: 980,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "3",
    productStatus: ProductStatus.ACTIVE,
    productBrand: ProductBrand.BREITLING,
    productName: "Breitling Navitimer",
    productPrice: 8900,
    productDiscount: 8500,
    productMaterial: ProductMaterial.STEEL,
    productImages: ["img/Navitimer-1.png"],
    productViews: 760,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "4",
    productStatus: ProductStatus.ACTIVE,
    productBrand: ProductBrand.IWC,
    productName: "IWC Portu Giesser",
    productPrice: 10200,
    productDiscount: 8000,
    productMaterial: ProductMaterial.LEATHER,
    productImages: ["img/PortuGieser-1.png"],
    productViews: 640,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "5",
    productStatus: ProductStatus.ACTIVE,
    productBrand: ProductBrand.RADO,
    productName: "Rado Captain",
    productPrice: 2100,
    productDiscount: 1500,
    productMaterial: ProductMaterial.CERAMIC,
    productImages: ["img/Captain-1.png"],
    productViews: 540,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "6",
    productStatus: ProductStatus.ACTIVE,
    productBrand: ProductBrand.PANERAI,
    productName: "Panerai Luminor",
    productPrice: 7800,
    productDiscount: 7000,
    productMaterial: ProductMaterial.LEATHER,
    productImages: ["img/Summersible.png"],
    productViews: 830,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "7",
    productStatus: ProductStatus.ACTIVE,
    productBrand: ProductBrand.ARMANI,
    productName: "Armani Exchange",
    productPrice: 320,
    productDiscount: 285,
    productMaterial: ProductMaterial.STEEL,
    productImages: ["img/Armani-1.png"],
    productViews: 420,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "8",
    productStatus: ProductStatus.ACTIVE,
    productBrand: ProductBrand.JACOB,
    productName: "Jacob & Co Astronomia",
    productPrice: 25000,
    productDiscount: 21000,
    productMaterial: ProductMaterial.STEEL,
    productImages: ["img/Godfather-1.png"],
    productViews: 310,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function BestSelling() {
  return (
    <div className="bestSellling-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Our Best Selling Products</Box>
          <Box className="category-desc">
            Explore our best-selling watch collections, crafted for style,
            precision, and lasting sophistication.
          </Box>

          <Stack className="cards-frame">
            <CssVarsProvider>
              {staticBestSelling.length ? (
                staticBestSelling.map((product) => {
                  const imagePath = `/${product.productImages?.[0]}`;

                  return (
                    <div className="product-card" key={product._id}>
                      <div className="product-image">
                        <img
                          src={`/${product.productImages?.[0]}`}
                          alt={product.productName}
                        />
                      </div>

                      <div className="product-content">
                        <p className="product-brand">{product.productBrand}</p>

                        <h3 className="product-name">{product.productName}</h3>

                        <div className="price">
                          <div className="product-discount">
                            ${product.productDiscount}
                          </div>
                          <div className="product-price">
                            ${product.productPrice}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <Box className="no-data">
                  Best selling products are not available
                </Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
