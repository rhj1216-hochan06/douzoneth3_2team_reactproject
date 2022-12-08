import styles from "./cart.module.css";
import { CartHeader } from "./cartHeader";
import { CartList } from "./cartList";
import { TotalCart } from "./totalCart";

export const Cart = ({ cart, setCart, convertPrice }) => {

    //장바구니 수량 증감 함수
    const handleQuantity = (type, id, quantity) => {
        const found = cart.filter((el) => el.id === id)[0];
        const idx = cart.indexOf(found);
        if (type === "plus") {
          const cartItem = {
            id: found.id,
            image: found.image,
            name: found.name,
            quantity: quantity,
            price: found.price,
            provider: found.provider,
            gender: found.gender,
          };
          setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
        } else {
          if (quantity === 0) return; // 수량이 1 밑으로 가지 않도록
          const cartItem = {
            id: found.id,
            image: found.image,
            name: found.name,
            quantity: quantity,
            price: found.price,
            provider: found.provider,
            gender: found.gender,
          };
          setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
        }
      };
    //장바구니 수량 증감함수 끝
    
    //삭제함수
    const handleRemove = (id) => {
        setCart(cart.filter((cart) => cart.id !== id));
        // setCheckLists(checkLists.filter((check) => parseInt(check) !== id));
      };
    //삭제함수 끝
    return (
        <>
            <header className={styles.cart_title_wrap}>
                <h1>장바구니</h1>
            </header>
            <CartHeader />
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
                            // handleCheckList={handleCheckList}
                            // checkLists={checkLists}
                        />
                    );
                })
            )
            }
            
           {cart.length === 0? "" : <TotalCart />} 


        </>
    );
};