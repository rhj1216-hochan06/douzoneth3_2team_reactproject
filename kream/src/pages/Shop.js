import { ShopCategory } from "../components/shop/shopcategory";

const Shop = ({ convertPrice, setProducts, products,search }) => {

    return <ShopCategory
        convertPrice={convertPrice}
        setProducts={setProducts}
        products={products}
        search ={search}
    />;

};

export { Shop };
