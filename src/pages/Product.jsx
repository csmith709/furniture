import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumbs/BreadCrumb";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // Find the product by id
  const product = all_product.find((e) => e.id === Number(productId));

  // Check if product exists before rendering
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <BreadCrumb product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
