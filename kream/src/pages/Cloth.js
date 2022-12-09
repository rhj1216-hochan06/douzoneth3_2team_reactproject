import { ClothCategory } from "../components/category/clothCategory.js";

const Cloth = ({ convertPrice, setProducts, products }) => {

    return <ClothCategory
        convertPrice={convertPrice}
        setProducts={setProducts}
        products={products}
    />;

};

export { Cloth };
