import { ShopCategory } from "../components/shop/shopcategory";

const Shop = ({ convertPrice, setProducts, products }) => {

    return <ShopCategory
        convertPrice={convertPrice}
        setProducts={setProducts}
        products={products}
    />;

};

export { Shop };
