import styles from "./Products.module.css";
export const Products = () => {
  //useEffect로 최초 1번만 쇼핑몰데이터 렌더링
  return (
    <>
      Home에서 데이터를 받아 수십개의 상품들 나열
      <div className={styles.filter}>
        <p>정렬기준 1</p>
        <p>정렬기준 2</p>
        <p>정렬기준 3</p>
      </div>
      <main className={styles.flex_wrap}>  
      </main>
    </>
      //map을 이용하여 상품 갯수만큼 반복시키기
  );
};
