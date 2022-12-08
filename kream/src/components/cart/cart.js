import styles from "./cart.module.css";
import { CartHeader } from "./cartHeader";
import { CartList } from "./cartList";
import { TotalCart } from "./totalCart";
import { useState } from "react";

export const Cart = ({ cart, setCart, convertPrice }) => {
    const [checkLists, setCheckLists] = useState([]);
    const [total, setTotal] = useState([]);
    //전체선택되어있다면(길이가 같으므로)true
    const isAllChecked =
        cart.length === checkLists.length && checkLists.length !== 0;
    //장바구니 수량 증감 기능
    const handleQuantity = (id, quantity) => {
        const found = cart.filter((el) => el.id === id)[0];
        const idx = cart.indexOf(found);
        const cartItem = {
            id: found.id,
            image: found.image,
            name: found.name,
            quantity: quantity,
            price: found.price,
            provider: found.provider,
            gender: found.gender,
        };
        if (quantity === 0) return; // 수량이 1 밑으로 가지 않도록 반환
        setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
    };
    //장바구니 수량 증감기능 끝

    //상품삭제기능 : cart에서 id값과 일치하는 내용을 필터링
    const handleRemove = (id) => {
        setCart(cart.filter((cart) => cart.id !== id));
        // setCheckLists(checkLists.filter((check) => parseInt(check) !== id));
    };
    //삭제함수 끝

    //체크리스트기능 : 체크되면 체크리스트에 id추가, 체크해제되면 id제거
    const handleCheckList = (checked, id) => {
        if (checked) {
            setCheckLists([...checkLists, id]);
            //체크리스트에 기존의 값은 유지하고 아이디값만 담는다
        } else {
            setCheckLists(checkLists.filter((check) => check !== id));
        }
    };
    //체크리스트기능 끝

    //전체선택기능
    const handleCheckAll = (checked) => {
        if (checked) {
            const checkItems = [];
            cart.map((cart) => checkItems.push(`${cart.id}`));
            setCheckLists(checkItems);
        } else {
            setCheckLists([]);
        }
    };
    //전체선택기능끝

    //총금액계산하기위한상품담기(cart랑 체크리스트 비교)
    const found = checkLists.map((checkLists) => 
        cart.filter((el) => el.id == checkLists)
    );
    return (
        <>
            <header className={styles.cart_title_wrap}>
                <h1>장바구니</h1>
            </header>
            <CartHeader handleCheckAll={handleCheckAll} isAllChecked={isAllChecked} />
            {cart.length === 0 ? (
                <div className={styles.not}>
                    <h2>장바구니에 담긴 상품이 없습니다.</h2>
                    <p>원하는 상품을 장바구니에 담아보세요!</p>
                </div>
            ) : (
                cart.map((cart) => {
                    return (
                        <CartList
                            key={`key-${cart.id}`}
                            cart={cart}
                            setCart={setCart}
                            convertPrice={convertPrice}
                            handleQuantity={handleQuantity}
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


        </>
    );
};