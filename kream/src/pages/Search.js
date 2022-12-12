import { Searchfind } from "../components/search/searchfind";

const Search = ({ convertPrice, setProducts, products }) => {

    return <Searchfind
        convertPrice={convertPrice}
        setProducts={setProducts}
        products={products}
       
    />;

};

export { Search };
