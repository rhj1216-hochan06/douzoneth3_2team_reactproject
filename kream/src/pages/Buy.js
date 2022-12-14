import { BuyPay } from "../components/pay/BuyPay.js";

const Buy = ({convertPrice, setProducts, products}) => {
  return (
    <BuyPay
      convertPrice={convertPrice}
      setProducts={setProducts}
      products={products}
    />
  )
}
export { Buy };