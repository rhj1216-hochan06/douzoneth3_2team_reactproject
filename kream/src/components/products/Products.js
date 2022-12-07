//products.js
import styles from "./Products.module.css";
import { Product } from "./product";
import {useSelector,useDispatch} from 'react-redux';
import store from '../../store/store';
import {up} from '../../store/counterSlice';

export const Products = ({products, setProducts}) => {
  const dispatch = useDispatch();
    const number = useSelector(state=>{
      return state.counter.value;
    })
  return (
    <>
      Home에서 데이터를 받아 수십개의 상품들 나열

      <button onClick={()=>{
      dispatch(up(2));
    }}>+</button> {number};

      <div className={styles.filter}>
        <p>정렬기준 1</p>
        <p>정렬기준 2</p>
        <p>정렬기준 3</p>
      </div>
      <main className={styles.flex_wrap}>  
        {products.map((product)=>{ //map을 이용하여 상품 갯수만큼 반복시키기
          return <Product key={`key-${product.id}`} product={product} />;
        })}
      </main>
    </>
      //map을 이용하여 상품 갯수만큼 반복시키기
  );
};
