import { TechCategory } from "../components/category/techCategory.js";

const Tech = ({ convertPrice, setProducts, products }) => {

    return <TechCategory
        convertPrice={convertPrice}
        setProducts={setProducts}
        products={products}
    />;

};

export { Tech };
