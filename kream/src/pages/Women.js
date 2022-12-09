import { WomenRecommend } from "../components/recommend/womenRecommend.js";

const Women = ({ convertPrice, setProducts, products }) => {

    return <WomenRecommend
        convertPrice={convertPrice}
        setProducts={setProducts}
        products={products}
    />;

};

export { Women };
