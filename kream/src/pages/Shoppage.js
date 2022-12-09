import { Shop } from "../components/shopper/shop.js";


const Shoppage = ({ convertPrice, setProducts, products }) => {

    return <Shop
        convertPrice={convertPrice}
        setProducts={setProducts}
        products={products}
    />;

};

export  { Shoppage };
