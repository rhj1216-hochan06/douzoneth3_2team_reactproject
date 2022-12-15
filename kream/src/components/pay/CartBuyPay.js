import styles from "./pay.module.css";
import { useEffect, useState } from "react";

export const CartBuyPay = ({ convertPrice }) => {

    const [total, setTotal] = useState("");
    const sessionStorage = window.sessionStorage;
    const [cartLangth, setCartLangth] = useState([]);
    const [cart, setCart] = useState([]);


    //로그인했는지 확인하기
    if (sessionStorage.getItem("loginId") === "" || sessionStorage.getItem("loginId") === null) {
        console.log('로그인 안됨');
        alert("로그인이 필요한 서비스 입니다.")
        window.location = '/login';
    }


    //장바구니 목록 상시 출력
    useEffect(() => {
        onA();
    }, [])

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


    // 상품삭제기능 : id값이 일치하면 삭제
    const handleRemove = (saleno) => {
        console.log("클릭한 상품의 saleno : " + saleno);
        fetch("/api/cart/delete", {
            method: "post",
            headers: {
                "Content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                "userid": sessionStorage.getItem("loginId"),
                "cart_saleno": saleno,
            })
        }).then((res) => res.json())
            .then(data => { window.location.reload(); });
    };


    return (

        <div class={styles.main_content}>
            <header className={styles.cart_title_wrap}>
            </header>
            {cart.length === 0 ? (
                <div className={styles.not}>
                    <p>값이 없습니다.

                    </p>
                </div>
            ) : (
                cart.map((cart) => {
                    return (
                        <>ㅁㄴㅇ
                        </>
                    );
                })
            )
            }
        </div>
    );
};
