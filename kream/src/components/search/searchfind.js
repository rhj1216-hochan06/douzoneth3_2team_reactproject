
import styles from "./search.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

export const Searchfind = ({ products, setProducts, convertPrice }) => {



  useEffect(() => {
    AOS.init();
  })

  //---------------------------------------------------DAO 시작
  const [state, setState] = useState([]);

  const [search, setSearch] = useState("");
  const [plength, setPLength] = useState("");
  const [find, setFind] = useState("");


  const onSearchHandler = (event) => {
    setSearch(event.currentTarget.value)
  }

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      onSearch(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
  const onSearch = (event) => {
    fetch("/api/search", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application / json",
      }, body: JSON.stringify({
        "search": search,

      })

    })
      .then((res) => res.json())
      .then(json => {
        setState(json);

      setPLength(json.products.length);
      setFind(search);
       });

  }

  // const filterTitle = products.filter((p) => {
  //   return p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  // });


  return (
    <>


      {/* <input type="text" value={search} onChange={onSearchHandler} /><button onClick={onSearch}>검색하기</button> */}


      <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      {/* <div className={styles.input_wrap}> */}
        <div className={styles.amuguna}>
          <input className={styles.search} type="text" value={search} placeholder="상품명, 브랜드, 카테고리 검색" onChange={onSearchHandler}  onKeyPress={handleOnKeyPress} />&nbsp;

          <img className={styles.searchicon} src="/images/search-icon.svg" alt="find" onClick={onSearch} />
        {/* </div> */}
      </div>
     
      <br />
      <hr className={styles.line}/>
      <br />
      <div className={styles.content}>

        <h4 className={styles.contentName1}>WHIPPING</h4> <br/>
        {plength !=="" ? (
                      <h6 className={styles.searchresult}>{find}(으)로 검색된 상품 총 {plength}건입니다.</h6>
                    ) : (
                     <></>
                    )} 
        
      </div><br />
      <main className={styles.flex_wrap}>
        {state.products && state.products.map((product) => { //map을 이용하여 상품 갯수만큼 반복시키기
          if (!state.products) return 'no data';
          //  return <Product key={`key-${product.id}`} product={product} convertPrice={convertPrice} />;
          return <div className={styles.product}>
            <div class="item" data-aos="slide-up">
              <Link to={`/products/${product.id}`}>
                <div className={styles.product_image}>
                  <img src={product.image} alt="product" />
                </div>
              </Link>
              <div className={styles.store}>
                <span>{product.provider}</span>
              </div>

              <div className={styles.product_name}>
                <span>{product.name}</span>
              </div>

              <div className={styles.product_price}>
                <span className={styles.price}>{convertPrice(product.price)}</span>
                <span className={styles.unit}>원</span>
              </div><br /><br /><br />
            </div>
          </div>
        })}
      </main>
    </>
  );
};

