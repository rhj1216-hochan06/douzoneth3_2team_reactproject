import { LifeCategory } from "../components/category/lifeCategory.js";

const Life = ({ convertPrice, setProducts, products }) => {

    return <LifeCategory
        convertPrice={convertPrice}
        setProducts={setProducts}
        products={products}
    />;

};

export { Life };
