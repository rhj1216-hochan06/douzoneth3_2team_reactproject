//products.js
import styles from "./Products.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { up } from '../../store/counterSlice';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";


export const NewProducts = ({ convertPrice }) => {
    //---------------------------------------------------DAO 시작
    const [state, setState] = useState([]);
    const onA = (event) => {
        fetch("/api/", {
        method: "get",
        headers: {
            "content-type": "application/json"
        },
    })
        .then((res) => res.json())
        .then(json => {
            setState(json);
            
        });
    }
    //--------------------------------------------------------끝

    useEffect(() => {
        AOS.init({
            duration: 1200,
        })
        onA();
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll); //clean up
        };
        
    }, []);

    const handleScroll = () => {
        // console.log(window.scrollY)
        // // 스크롤이 Top에서 5000px 이상 내려오면 true값을 useState에 넣어줌
        // if (window.scrollY >= 3000) {
        // } else {
        //     // 스크롤이 50px 미만일경우 false를 넣어줌

        // }

    };

    return (
        <>
            <main className={styles.flex_wrap}>
                {state.products && state.products.map((product) => { //map을 이용하여 상품 갯수만큼 반복시키기
                    if (!state.products) return 'no data';
                    //product
                    return <div className={styles.product}>
                        <div class="item" data-aos="slide-up">
                            <Link to={`/products/${product.id}`}>
                                <div className={styles.product_image}>
                                    <img src={product.image} alt="product" />
                                </div>
                            </Link>
                            <div className={styles.store}>
                                <span>{product.provider}</span>
                            </div>

                            <div className={styles.product_name}>
                                <span>{product.name}</span>
                            </div>

                            <div className={styles.product_price}>
                                <span className={styles.price}>{convertPrice(product.price)}</span>
                                <span className={styles.unit}>원</span>
                            </div>
                        </div>
                    </div>
                })}
            </main>
        </>
    );

};

