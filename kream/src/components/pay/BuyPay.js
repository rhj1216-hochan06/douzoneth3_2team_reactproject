import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";



export const BuyPay = (convertPrice) => {
    console.log('구매페이지');
    const { id } = useParams();
    const [state, setState] = useState([]);
    const [product, setProduct] = useState({});
    fetch("/api/purchase/buy", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            // "id": sessionStorage.getItem("loginId"),
            "ID": id,
        })
    })
        .then((res) => res.json())
        .then(json => {
            setState(json);
        })

    return (
        <>
            <h3> 주문 상품 </h3>
            <p >상품 정보</p>
            <p >상품 사진 / 이름 / 상품번호 /사이즈 / 가격 / 날짜</p>
            <div >
                <span>{product.size}</span>
            </div>

            {state.sale && state.sale.map((product) => {
                console.log("구매 들어오나요");
                return <div >
                    <div class="item" data-aos="slide-up">
                        <Link to={`/products/${product.ID}`}>
                            <div >
                                <img src={product.image} alt="product" />
                            </div>
                        </Link>
                        <div >
                            <span>{product.ID}</span>
                        </div>
                        <br /><br /><br />
                    </div>
                </div>
            })}

        </>
    )
}


