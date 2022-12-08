import {ManRecommend} from "../components/recommend/manRecommend.js";

const Man = ({convertPrice, setProducts, products}) => {

      return <ManRecommend 
       convertPrice={convertPrice}
       setProducts={setProducts}
       products={products}
      />;
    
};

export {Man};
