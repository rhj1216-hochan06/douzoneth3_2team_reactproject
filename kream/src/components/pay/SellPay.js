import { formToJSON } from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Detail } from "../../components/detail/Detail.js"
import styles from "./pay.module.css";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export const SellPay = (convertPrice) => {
    const SalesloginCheck = () => {
        //로그인했는지 확인하기
        if (sessionStorage.getItem("loginId") === "" || sessionStorage.getItem("loginId") === null) {
            console.log('로그인 안됨');
            alert("로그인이 필요한 서비스 입니다.")
            window.location = '/login';
        }
    }
    const [price, setPrice] = useState();
    const [userid, setUserid] = useState(sessionStorage.getItem("loginId"));
    const { id } = useParams();
    const { size } = useParams();
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth());
    const day = String(date.getDate());
    const [product, setProduct] = useState({});
    //오늘 날짜
    const today = year + "-" + month + "-" + day;
    // -------------------------------------카카오


    const onPriceHandler = (event) => {
        setPrice(event.currentTarget.value.replace(/[^0-9]/g, ""));
    }

    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            console.log(price)
            onClicksell();
            //   onSearch(); // Enter 입력이 되면 클릭 이벤트 실행
        }
    };

    useEffect(() => {
        SalesloginCheck();
        const jquery = document.createElement("script");
        jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        }
    }, []);
    //판매 등록 함수
    const onClicksell = () => {

        let content = "최종 금액은 : " + price + "입니다. 등록 하시겠습니까?";

        confirmAlert({
            title: '고객님!',
            message: content,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {

                        //sale에 등록
                        fetch("/api/purchase/sell", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json; charset=utf-8"
                            },
                            body: JSON.stringify({
                                //product 의 id ,price, size, 로그인된 아이디 넘겨줌
                                "id": id,
                                "userid": userid,
                                "price": price,
                                "size": size
                            })
                        }).then((res) => res.json())
                            .then(data => {

                                //stock 갯수 update
                                fetch("/api/sell/stock", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json; charset=utf-8"
                                    },
                                    body: JSON.stringify({
                                        //product 의 id ,price, size, 로그인된 아이디 넘겨줌
                                        "id": id,
                                        "size": size
                                    })
                                }).then((res) => res.json())
                                    .then(data => {

                                    })
                            })
                        window.location.href = "/mypage";
                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });

    }

    const callback = (response) => {
        const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status } = response;
        if (success) {
            alert('결제 성공');
            window.location.href = "/"
        } else {
            alert(`결제 실패 : ${error_msg}`);
            window.location.href = "/products"
        }
    }
    //-------------------------------------

    fetch("/api/purchase/sell", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            "id": id,

        })
    })
        .then((res) => res.json())
        .then(data => {

        })

    fetch("/api/detail", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            "productId": id,
        })
    })
        .then((res) => res.json())
        .then(data => {
            setProduct(data);
        });

    return (
        <>
            <table class="type10">
                <thead>
                    <tr>
                        <th className={styles.jb_th_1} scope="cols">상품</th>
                        <th scope="cols">상품번호</th>
                        <th className={styles.jb_th_3} scope="cols">이름</th>
                        <th scope="cols">사이즈</th>
                        <th scope="cols">날짜</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={product.image} alt="product" />
                        </td>
                        <td>{id}</td>
                        <td>{product.name}</td>
                        <td>{size}</td>
                        <td>{today}</td>
                    </tr>
                </tbody>
            </table>
            <input className="set" type="text" value={price} placeholder="판매가격결정" onChange={onPriceHandler} onKeyPress={handleOnKeyPress} ></input>
            <button onClick={onClicksell}>판매등록하기</button>

        </>
    )
}


