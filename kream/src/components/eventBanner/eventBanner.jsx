import styles from "./eventBanner.module.css";
import { useState }  from 'react';


export const EventBanner = () => {
 
  const [count, setCount] = useState(1);
  const changebanner = (type) => {
    if(type === "plus") {
      if(count>3) {
        setCount(1);
        return;}
    setCount(count + 1);
    return;
    }
    else if(type ==="minus"){
      if(count<2) {
        setCount(4);
        return;}
      setCount(count - 1);
      return;
    }
  }


  return (
    <article
      className={styles.banner}
      style={{
        backgroundImage: "url('/images/event"+`${count}`+".png')",
        backgroundSize: "100%",
      }}
    >
      <div className={styles.right}>
        <img src="images/icon-swiper-2.svg" alt="right"
          onClick={() => changebanner("plus")} />
      </div>
      <div className={styles.left}>
        <img src="images/icon-swiper-1.svg" alt="left"
          onClick={() => changebanner("minus")} />
      </div>
    </article>
   
 
 );
};
