import { Detail } from "../components/detail/Detail.js";

const DetailPage = ({cart, setCart,convertPrice}) => {
  return <Detail cart={cart} setCart={setCart} />;
};

export default DetailPage;
