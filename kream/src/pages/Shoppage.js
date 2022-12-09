import {Shop} from "../components/shop/shop.js";


const Shoppage = ({ convertPrice, setProducts, products }) => {

    return <Shop
        convertPrice={convertPrice}
        setProducts={setProducts}
        products={products}
    />;

};

export  { Shoppage };
