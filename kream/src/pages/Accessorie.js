
import { AccessorieCategory } from "../components/category/accessorieCategory.js";

const Accessorie = ({ convertPrice, setProducts, products }) => {

    return <AccessorieCategory
        convertPrice={convertPrice}
        setProducts={setProducts}
        products={products}
    />;

};

export { Accessorie };
