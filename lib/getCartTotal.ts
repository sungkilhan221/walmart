import { Product } from "@/typings/productTypings";

export function getCartTotal(product: Product[]): string {
  const total = product.reduce(
    (acc: number, currentProduct: Product) => acc + currentProduct.price,
    0
  );

  // return `${product[0]?.currency} ${total.toFixed(2)}`;
  return `$${total.toFixed(2)}`;
}
