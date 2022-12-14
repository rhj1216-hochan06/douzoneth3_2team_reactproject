import React, { useState } from 'react'
import { Link } from 'react-router-dom';



export const BuyPay = (convertPrice) => {
    console.log('구매페이지');
    const [state, setState] = useState([]);
    const [product, setProduct] = useState({});
    fetch("/api/purchase/buy", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            "ID": product.id,
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
            {state.sale && state.sale.map((product) => {
                console.log("구매 들어오나요");
                return <div >
                    <div class="item" data-aos="slide-up">
                        <Link to={`/products/${product.SALE_PRODUCTID}`}>
                            <div >
                                <img src={product.image} alt="product" />
                            </div>
                        </Link>
                        <div >
                            <span>{product.SALE_PRODUCTID}</span>
                        </div>
                        <div>
                            <span>{product.SALE_SIZE}</span>
                        </div>

                        <div >
                            <span>{product.name}</span>
                        </div>
                        <div>
                            <span >{product.SALE_PRICE}</span>
                            <span >원</span>
                        </div>
                        <div>
                            <span>{product.DATE}</span>
                        </div>
                        <br /><br /><br />
                    </div>
                </div>
            })}
        </>
    )
}


