import { WinterRecommend } from "../components/recommend/winterRecommend.js";

const Winter = ({ convertPrice, setProducts, products }) => {

      return <WinterRecommend
            convertPrice={convertPrice}
            setProducts={setProducts}
            products={products}
      />;

};

export { Winter };
