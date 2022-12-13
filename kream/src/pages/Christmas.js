import { ChristmasRecommend } from "../components/recommend/christmasRecommend.js";

const Christmas = ({ convertPrice, setProducts, products }) => {

      return <ChristmasRecommend
            convertPrice={convertPrice}
            setProducts={setProducts}
            products={products}
      />;

};

export { Christmas };
