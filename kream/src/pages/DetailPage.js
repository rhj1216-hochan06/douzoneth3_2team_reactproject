import { Detail } from "../components/detail/Detail.js";

const DetailPage = ({cart, setCart,convertPrice}) => {
  return <Detail cart={cart} setCart={setCart} convertPrice={convertPrice}/>;
};

export default DetailPage;
