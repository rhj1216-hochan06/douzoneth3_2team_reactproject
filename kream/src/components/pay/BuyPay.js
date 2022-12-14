import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Detail } from "../../components/detail/Detail.js"


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
    
    const [productid, setProductid] = useState("");
    const [price, setPrice] = useState();
    const [size, setSize] = useState("");
    const [date, setDate] = useState("");
    const [state, setState] = useState([]);
    const [userid, setUserid] = useState("");
    const { id } = useParams();
    const [product, setProduct] = useState({});

    // -------------------------------------카카오
    const [search, setSearch] = useState("");

    const onSearchHandler = (event) => {
        setSearch(event.currentTarget.value)
    }

    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            console.log(search)
            onClickPayment();
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

    const onClickPayment = () => {
        const { IMP } = window;
        IMP.init("imp54465658"); // 결제 데이터 정의
        const data = {
            pg: 'kakaopay.TC0ONETIME', // PG사 (필수항목)
            pay_method: 'card', // 결제수단 (필수항목)
            merchant_uid: `mid_${new Date().getTime()}`, // 결제금액 (필수항목)
            name: '결제 테스트', // 주문명 (필수항목)
            amount: `${search}`, // 금액 (필수항목)
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
            window.location.href = "/"
        } else {
            alert(`결제 실패 : ${error_msg}`);
            window.location.href = "/products"
        }
    }
    //-------------------------------------

    fetch("/api/purchase/buy", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            "id": sessionStorage.getItem("loginId"),
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
            <p >상품 사진 / 이름 / 상품번호 / 사이즈 / 가격 / 날짜</p>
            <div >
                <span>상품 사이즈 : {Detail.size}</span>
            </div>

            {/* {state.sale && state.sale.map((product) => {
                console.log("구매 들어오나요");
                return <div >
                    <div data-aos="slide-up">
                        <div >
                            <span>상품 사이즈 : {product.setSize}</span>
                        </div>
                        <div >
                             <span>상품 가격 : {product.price}</span> 
                        </div>
                        <br /><br /><br />
                    </div>0
                </div>
            })} */}

            <input className="set" type="text" value={search} placeholder="상품명, 브랜드, 카테고리 검색" onChange={onSearchHandler} onKeyPress={handleOnKeyPress} ></input>
            <button onClick={onClickPayment}>결제하기</button>

        </>
    )
}


