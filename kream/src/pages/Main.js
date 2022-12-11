import { MainCategory } from "../components/category/main.js";

const Main = ({ convertPrice, setProducts, products }) => {

    return <MainCategory
        convertPrice={convertPrice}
        setProducts={setProducts}
        products={products}
    />;

};

export { Main };
