import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./login.module.css"
import { useNavigate } from 'react-router-dom';

const Welcome = () => {


    return (

<div className={styles.main}>
<div className={styles.welcome}>
<img  className={styles.image} src="/images/welcome.png" alt="logo" />
<br/><br/>
<p className={styles.welcome_font}>WHIPPING의 회원이 되신것을 환영합니다!</p>
<p >다양한 기획 상품들을 합리적인 가격에 만나보세요!</p>
<main className={styles.flex_wrap}>
        <div className={styles.product}>
          <div className={styles.sort}>
            <Link to="/christmas">
              <img className={styles.product_image} src=" /images/christmas.jpg" />
              <div className={styles.product_name}>크리스마스</div>
            </Link> <br />
          </div>
          <div className={styles.sort}>
            <Link to="/womenRecommend">
              <img className={styles.product_image} src=" /images/recomendwomen.jpg" />
              <div className={styles.product_name}>여성 추천</div>
            </Link><br />
          </div>
          <div className={styles.sort}>
            <Link to="/manRecommend">
              <img className={styles.product_image} src=" /images/recomendman.jpg" />
              <div className={styles.product_name}>남성 추천</div>
            </Link> <br />
          </div>
          <div className={styles.sort}>
            <Link to="/winter">
              <img className={styles.product_image} src=" /images/winter.jpg" />
              <div className={styles.product_name}>한파특가</div>
            </Link>
          </div>
        </div>
      </main><br />
      <Link to="/">
    휘핑 홈페이지 바로가기
      </Link>
</div>
</div>

    );
}
export default Welcome;