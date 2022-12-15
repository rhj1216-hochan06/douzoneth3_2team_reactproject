import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Detail } from "../../components/detail/Detail.js"
import styles from "../../components/pay/pay.module.css"
import $, { data } from 'jquery';

export const CartBuyPay = (convertPrice) => {

    //------------------------------------카트 불러오기
    const [total, setTotal] = useState(0);
    const sessionStorage = window.sessionStorage;
    const [cartLangth, setCartLangth] = useState([]);
    const [cart, setCart] = useState([]);



    const onA = (event) => {
        fetch("/api/cart", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "id": sessionStorage.getItem("loginId"),
            })
        })
            .then((res) => res.json())
            .then(json => {
                setCart(json.cart);
                setCartLangth(Object.keys(json.cart).length);
            }
            );
    }


    //----------------------------------------------------구매
    console.log('구매페이지');

    const SalesloginCheck = () => {
        //로그인했는지 확인하기
        if (sessionStorage.getItem("loginId") === "" || sessionStorage.getItem("loginId") === null) {
            console.log('로그인 안됨');
            alert("로그인이 필요한 서비스 입니다.")
            window.location = '/login';
        }
    }

    const [price, setPrice] = useState();
    const [size, setSize] = useState("");
    const { id } = useParams();



    // -------------------------------------카카오

    useEffect(() => {
        onA();
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

    const onClickPayment = () => {
        let temp1 = ($("#totalprice").html()) * 1;

        const { IMP } = window;
        IMP.init("imp54465658"); // 결제 데이터 정의
        const data = {
            pg: 'kakaopay.TC0ONETIME', // PG사 (필수항목)
            pay_method: 'card', // 결제수단 (필수항목)
            merchant_uid: `mid_${new Date().getTime()}`, // 결제금액 (필수항목)
            name: '결제 테스트', // 주문명 (필수항목)
            amount: `${temp1}`, // 금액 (필수항목)
            // custom_data: { name: '부가정보', desc: '세부 부가정보' },
            // buyer_name: ["asd"], // 구매자 이름
            // buyer_tel: ["01083259911"], // 구매자 전화번호 (필수항목)
            // buyer_email: ["rdfdfa@asda.com"], // 구매자 이메일
            // buyer_addr: ["주소"],
            // buyer_postalcode: ["우편번호"]
        };
        IMP.request_pay(data, callback);
    }


    const callback = (response) => {
        const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status } = response;
        if (success) {
            alert('결제 성공');

            fetch("/api/cart/clear", {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    "id": sessionStorage.getItem("loginId"),
                })
            })
                .then((res) => res.json())
                .then(json => {
                    console.log("카트 삭제 끝");
                }
                );//------카트 삭제 쿼리문 끝


            cart.map((cart) => {

                //-------------1번 쿼리문 
                fetch("/api/purchase/buy/id", {
                    method: "post",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        "id": cart.cart_saleno,
                    })
                })
                    .then((res) => res.json())
                    .then(json => {
                        console.log("1번끝");
                        //------------2번 쿼리문 
                        fetch("/api/buy/stock", {
                            method: "post",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify({
                                "id": json.products[0].SALE_PRODUCTID,
                                "size": cart.sale_size,
                            })
                        })
                            .then((res) => res.json())
                            .then(json => {
                                console.log("2번끝");
                            }
                            );//------2번 쿼리문 끝
                        //구매시 Sale에 상품id, userid, price,size,sale_check = 1 로 설정하여 삽입 3번 쿼리문
                        fetch("/api/purchase/saleinsert", {
                            method: "post",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify({
                                "id": json.products[0].SALE_PRODUCTID,
                                "userid": sessionStorage.getItem("loginId"),
                                "price": cart.sale_price,
                                "size": cart.sale_size,
                            })
                        })
                            .then((res) => res.json())
                            .then(json => {
                                console.log("3번끝");

                            }
                            );//------3번 쿼리문 끝
                        //------------4번 쿼리문 
                    }
                    );//------1번 쿼리문 끝

                fetch("/api/purchase/statusset", {
                    method: "post",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        "no": cart.cart_saleno,
                    })
                })
                    .then((res) => res.json())
                    .then(json => {
                        console.log("4번끝");
                    }
                    );//------4번 쿼리문 끝


            })//맵끝


            window.location.href = "/mypage/profile"
        } else {
            alert(`결제 실패 : ${error_msg}`);
            window.location.href = "/cart"
        }
    }
    //-------------------------------------

    return (
        <>
            <div>
                <div className={styles.info}>
                    <br /><br />
                    <p className={styles.main}> 배송 / 결제 </p>
                </div>
                <div className={styles.background}>
                    <br />
                    <div className={styles.width}>
                        <div className={styles.product}>
                            <p className={styles.productInfo}>상품 정보</p>
                            <p >
                                {/* 여기가 호진이가 작업한 결제 정보 불러오기 */}
                                {
                                    cart.map((cart) => {
                                        let temp = ($("#totalprice").html()) * 1;
                                        temp += (cart.sale_price) * 1;
                                        $("#totalprice").html(temp);
                                        return (
                                            <>

                                                {cart.cart_saleno}
                                                <img src={`${cart.image}`} />
                                                {cart.name}
                                                {cart.sale_price}
                                                {cart.sale_size}
                                                <p />
                                            </>


                                        );
                                    })
                                }
                            </p>
                        </div>
                        <div className={styles.address}>
                            <p className={styles.addressInfo}>배송주소</p>
                            <hr />
                            <p className={styles.addressInfo}>배송 방법</p>
                            <div className={styles.delivery}>
                                <p className={styles.addressInfo}>일반배송</p>
                            </div>
                        </div>
                        <br />
                        <div className={styles.price}>
                            <p className={styles.priceInfo}>최종 결제 정보</p>
                            {cart.map((cart) => {
                                return (
                                    <p> 상품 {cart.name}, {cart.sale_price} 원 </p>
                                );
                            })}
                            <p className={styles.priceInfo}></p>
                            <p className={styles.priceInfo}>배송비 무료</p>
                            <hr />
                            <p className={styles.priceInfo}>총 결제 금액 <span id='totalprice' value="" />원</p>
                        </div>
                        <div className={styles.payment}>
                            <p className={styles.payInfo}>결제 방법</p>
                            <p className={styles.payInfo}>일반 결제</p>
                            <div className={styles.kakao}>
                                <p>카카오페이</p>
                            </div>
                        </div>
                        <div className={styles.check}>
                            <p>판매자의 판매거부, 배송지연, 미입고 등의 사유가 발생할 경우, 거래가 취소될 수 있습니다.
                                앱 알림 해제, 알림톡 차단, 전화번호 변경 후 미등록 시에는 거래 진행 상태 알림을 받을 수 없습니다.</p>
                            <p>‘바로 결제하기’ 를 선택하시면 즉시 결제가 진행되며, 단순 변심이나 실수에 의한 취소가 불가능합니다.
                                본 거래는 개인간 거래로 전자상거래법(제17조)에 따른 청약철회(환불, 교환) 규정이 적용되지 않습니다.</p>
                            <button onClick={onClickPayment}>결제하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


