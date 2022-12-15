import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Detail } from "../../components/detail/Detail.js"
import styles from "../../components/pay/pay.module.css"
import { confirmAlert } from 'react-confirm-alert'; // Import


export const BuyPay = (convertPrice) => {
    console.log('구매페이지');

    const SalesloginCheck = () => {
        //로그인했는지 확인하기
        if (sessionStorage.getItem("loginId") === "" || sessionStorage.getItem("loginId") === null) {
            console.log('로그인 안됨');
            alert("로그인이 필요한 서비스 입니다.")
            window.location = '/login';
        }
    }
    const { id } = useParams();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [saleprice, setSalePrice] = useState();
    const [image, setImage] = useState();
    const [size, setSize] = useState();
    const [provider, setProvider] = useState();
    const [username, serUsername] = useState();
    const [userphonenumber, setUserphonenumber] = useState();
    // -------------------------------------카카오

    const dataReceive = () => {
        fetch("/api/purchase/saleget", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                "no": id,
                "id": sessionStorage.getItem("loginId"),
                //"sale_price": data.buy[0].SALE_PRICE,
            })
        })
            .then((res) => res.json())
            .then(data => {
                setName(data.buy[0].name);
                setSalePrice(data.buy[0].SALE_PRICE);
                setImage(data.buy[0].image);
                setAddress(data.buy[0].address);
                setSize(data.buy[0].SALE_SIZE);
                setProvider(data.buy[0].provider);
                setUserphonenumber(data.buy[0].userphonenumber);
                serUsername(data.buy[0].username);
                //setSale(data);
            })
    }

    useEffect(() => {
        SalesloginCheck();
        dataReceive();
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
        const { IMP } = window;
        IMP.init("imp54465658"); // 결제 데이터 정의
        const data = {
            pg: 'kakaopay.TC0ONETIME', // PG사 (필수항목)
            pay_method: 'card', // 결제수단 (필수항목)
            merchant_uid: `mid_${new Date().getTime()}`, // 결제금액 (필수항목)
            name: '결제 테스트', // 주문명 (필수항목)
            amount: `${saleprice}`, // 금액 (필수항목)
        };
        IMP.request_pay(data, callback);
    }
    const callback = (response) => {
        const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status } = response;
        if (success) {
            alert('결제 성공');
            window.location.href = "/mypage/buylist"
        } else {
            alert(`결제 실패 : ${error_msg}`);
            window.location.href = "/products"
        }
    }
    //-------------------------------------
    //판매 등록 함수
    // const onClicksell = () => {
    //     let content = "최종 금액은 : " + price + "입니다. 등록 하시겠습니까?";
    //     confirmAlert({
    //         title: '고객님!',
    //         message: content,
    //         buttons: [
    //             {
    //                 label: 'Yes',
    //                 onClick: () => {

    //                     //sale에 등록
    //                     fetch("/api/purchase/buy", {
    //                         method: "POST",
    //                         headers: {
    //                             "Content-Type": "application/json; charset=utf-8"
    //                         },
    //                         body: JSON.stringify({
    //                             //product 의 id ,price, size, 로그인된 아이디 넘겨줌
    //                             "id": id,
    //                             "userid": userid,
    //                             "price": `${product.price}`,
    //                             "size": product.size
    //                         })
    //                     }).then((res) => res.json())
    //                         .then(data => {

    //                         })
    //                     window.location.href = "/mypage";
    //                 }
    //             },
    //             {
    //                 label: 'No',
    //                 onClick: () => { }
    //             }
    //         ]
    //     });

    // }
    //-------------------------------------
    return (
        <>

            <div>
                <div className={styles.info}>
                    <br /><br />
                    <p className={styles.main}> 배송 / 결제 </p><br />
                </div>
                <div className={styles.background}>
                    <br /><br />
                    <div className={styles.width}>
                        <div className={styles.productInfoTitle}>
                            <p className={styles.productInfo}>상품 정보</p>
                        </div>
                        <div className={styles.imgdiv}>
                            <img className={styles.img} src={image} alt="product" />
                        </div>
                        <div className={styles.uldiv}>
                            <br />
                            <ul className={styles.sort}>
                                <li className={styles.provider}>{provider}</li><br />
                                <li>{name}</li><br />
                                <li>{size}</li><br />
                            </ul>
                        </div><br /><hr /><br />
                        <p className={styles.addressInfo1}>배송 정보</p>
                        <ul className={styles.addinfo}>
                            <li className={styles.addressInfo}><font color="#999999">받는 분 : </font>{username}</li><br />
                            <li className={styles.addressInfo}><font color="#999999">연락처 : </font>{userphonenumber}</li><br />
                            <li className={styles.addressInfo}><font color="#999999">배송주소 : </font>{address}</li><br />
                        </ul>
                        <br />
                        <p className={styles.addressInfo1}>배송 방법</p>
                        <div className={styles.delivery}>
                            <div>
                                <img className={styles.deliveryimg} src="/images/delivery.png" alt="delivery" />
                            </div>
                            <ul className={styles.deliverysort}>
                                <li className={styles.addressInfo}>배송비 무료</li><br />
                                <li className={styles.addressInfo}>지금 결제시 내일 도착 예정(택배사 상황에 따라 상이합니다.)</li>
                            </ul>
                        </div>
                        <br /><hr /><br />
                        <p className={styles.priceInfo1}>최종 결제 정보</p>
                        <ul className={styles.price}>
                            <li className={styles.priceInfo}>상품금액</li><font size="4">{saleprice}원</font><br />
                            <li className={styles.priceInfo3}>배송비</li><font size="4">무료</font><br />
                        </ul>
                        <br /><hr /><br />
                        <p className={styles.priceInfo1}>결제 수단</p>
                        <ul className={styles.pay}>
                            <li className={styles.payInfo1}>총 결제 금액</li><font size="5" color="red">{saleprice}원</font><br />
                        </ul>
                        <div className={styles.delivery}>
                            <div>
                                <img className={styles.kakaoimg} src="/images/kakao.png" alt="delivery" />
                            </div>
                            <ul className={styles.kakaosort}>
                                <li className={styles.kakaopay}>카카오페이 결제</li><br />
                            </ul>
                        </div><br/>
                    </div>
                    <div className={styles.check}>
                        <p className={styles.ment}>판매자의 판매거부, 배송지연, 미입고 등의 사유가 발생할 경우, 거래가 취소될 수 있습니다.
                            앱 알림 해제, 알림톡 차단, 전화번호 변경 후 미등록 시에는 거래 진행 상태 알림을 받을 수 없습니다.</p>
                            <br/>
                        <p className={styles.ment}>‘바로 결제하기’ 를 선택하시면 즉시 결제가 진행되며, 단순 변심이나 실수에 의한 취소가 불가능합니다.
                            본 거래는 개인간 거래로 전자상거래법(제17조)에 따른 청약철회(환불, 교환) 규정이 적용되지 않습니다.</p>
                        <button onClick={onClickPayment}>결제하기</button>
                    </div><br/><br/>
                </div>
            </div>
        </>
    )
}



