import styles from "./cart.module.css";
import { CartHeader } from "./cartHeader";
import { CartList } from "./cartList";
import { TotalCart } from "./totalCart";
import { useEffect, useState } from "react";

export const Cart = ({ convertPrice }) => {
    const [checkLists, setCheckLists] = useState([]);
    const [total, setTotal] = useState([]);
    const sessionStorage = window.sessionStorage;
    const [cartLangth, setCartLangth] = useState([]);
    const [cart, setCart] = useState([]);

    //전체선택되어있다면(길이가 같으므로)true
    const isAllChecked =
        cartLangth === checkLists.length && checkLists.length !== 0;

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
    //장바구니 수량 증감 기능
    // const handleQuantity = (id, type, cart_count) => {
    //     const cal = (count) => {
    //         fetch("/api/cart/count", {
    //             method: "post",
    //             headers: {
    //                 "Content-type": "application/json; charset=utf-8"
    //             },
    //             body: JSON.stringify({
    //                 "userid": sessionStorage.getItem("loginId"),
    //                 "pid": id,
    //                 "cart_count": count,
    //             })
    //         }).then((res) => res.json())
    //     };
    //     if (type === "plus") cal(cart_count + 1);
    //     else if (type === "minus") {
    //         if (cart_count < 2) return;
    //         cal(cart_count - 1);
    //         return;
    //     }
    // };


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
        }).then((res) => res.json());
    };


    //체크리스트기능 : 체크되면 체크리스트에 id추가, 체크해제되면 id제거
    const handleCheckList = (checked, cart_saleno) => {
        if (checked) {
            setCheckLists([...checkLists, cart_saleno]);
            //체크리스트에 기존의 값은 유지하고 아이디값만 담는다
        } else {
            setCheckLists(checkLists.filter((check) => check !== cart_saleno));
        }
    };


    //전체선택기능
    const handleCheckAll = (checked) => {
        if (checked) {
            const checkItems = [];
            cart.map((cart) => checkItems.push(`${cart.cart_saleno}`));
            setCheckLists(checkItems);
        } else {
            setCheckLists([]);
        }
    };


    //총금액계산하기위한상품담기(cart랑 체크리스트 비교)
    const found = checkLists.map((checkLists) =>
        cart.filter((el) => el.cart_saleno == checkLists)
    );
    return (

        <div class={styles.main_content}>
            <header className={styles.cart_title_wrap}>
            </header>
            <CartHeader handleCheckAll={handleCheckAll} isAllChecked={isAllChecked} />
            {cart.length === 0 ? (
                <div className={styles.not}>
                    <p></p>
                    <h2>장바구니에 담긴 상품이 없습니다.</h2>
                    <p>원하는 상품을 장바구니에 담아보세요!</p>
                </div>
            ) : (
                cart.map((cart) => {
                    return (
                        <CartList
                            key={`key-${cart.cart_saleno}`}
                            cart={cart}
                            setCart={setCart}
                            convertPrice={convertPrice}
                            // handleQuantity={handleQuantity}
                            handleRemove={handleRemove}
                            handleCheckList={handleCheckList}
                            checkLists={checkLists}
                        />
                    );
                })
            )
            }


            {cart.length === 0 ? "" : <TotalCart
                cart={cart} total={total} setTotal={setTotal}
                convertPrice={convertPrice}
                found={found}
            />}


        </div>

    );
};

// import styles from "./cart.module.css";
// import { CartHeader } from "./cartHeader";
// import { CartList } from "./cartList";
// import { TotalCart } from "./totalCart";
// import { useState } from "react";

// export const Cart = ({ cart, setCart, convertPrice }) => {
//     const [checkLists, setCheckLists] = useState([]);
//     const [total, setTotal] = useState([]);
//     //전체선택되어있다면(길이가 같으므로)true
//     const isAllChecked =
//         cart.length === checkLists.length && checkLists.length !== 0;
//     //장바구니 수량 증감 기능
//     const handleQuantity = (id, quantity) => {
//         const found = cart.filter((el) => el.id === id)[0];
//         const idx = cart.indexOf(found);
//         const cartItem = {
//             id: found.id,
//             image: found.image,
//             name: found.name,
//             quantity: quantity,
//             price: found.price,
//             provider: found.provider,
//             gender: found.gender,
//         };
//         if (quantity === 0) return; // 수량이 1 밑으로 가지 않도록 반환
//         setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
//     };


//     //상품삭제기능 : cart에서 id값과 일치하는 내용을 필터링
//     const handleRemove = (id) => {
//         setCart(cart.filter((cart) => cart.id !== id));
//         setCheckLists(checkLists.filter((check) => parseInt(check) !== id));
//     };


//     //체크리스트기능 : 체크되면 체크리스트에 id추가, 체크해제되면 id제거
//     const handleCheckList = (checked, id) => {
//         if (checked) {
//             setCheckLists([...checkLists, id]);
//             //체크리스트에 기존의 값은 유지하고 아이디값만 담는다
//         } else {
//             setCheckLists(checkLists.filter((check) => check !== id));
//         }
//     };


//     //전체선택기능
//     const handleCheckAll = (checked) => {
//         if (checked) {
//             const checkItems = [];
//             cart.map((cart) => checkItems.push(`${cart.id}`));
//             setCheckLists(checkItems);
//         } else {
//             setCheckLists([]);
//         }
//     };


//     //총금액계산하기위한상품담기(cart랑 체크리스트 비교)
//     const found = checkLists.map((checkLists) =>
//         cart.filter((el) => el.id == checkLists)
//     );
//     return (
//         <>
//             <header className={styles.cart_title_wrap}>
//                 <h1>장바구니</h1>
//             </header>
//             <CartHeader handleCheckAll={handleCheckAll} isAllChecked={isAllChecked} />
//             {cart.length === 0 ? (
//                 <div className={styles.not}>
//                     <h2>장바구니에 담긴 상품이 없습니다.</h2>
//                     <p>원하는 상품을 장바구니에 담아보세요!</p>
//                 </div>
//             ) : (
//                 cart.map((cart) => {
//                     return (
//                         <CartList
//                             key={`key-${cart.id}`}
//                             cart={cart}
//                             setCart={setCart}
//                             convertPrice={convertPrice}
//                             handleQuantity={handleQuantity}
//                             handleRemove={handleRemove}
//                             handleCheckList={handleCheckList}
//                             checkLists={checkLists}
//                         />
//                     );
//                 })
//             )
//             }

//             {cart.length === 0 ? "" : <TotalCart
//                 cart={cart} total={total} setTotal={setTotal}
//                 convertPrice={convertPrice}
//                 found={found}
//             />}


//         </>
//     );
// };