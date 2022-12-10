import './App.css';
import { Button, Navbar, Container } from 'react-bootstrap';
import { Route, Routes, Link } from 'react-router-dom';
import { TopNavBar } from "./components/header/TopNavBar.js";
import { Footer } from "./components/footer/Footer.js";
import Home from "./pages/Home";
import { Products } from "./components/products/Products";
import { useState, useEffect } from "react";
import axios from "axios";
import store from './store/store';
import Login from "./components/loginregister/Login"
import Register from "./components/loginregister/register"

//디테일 페이지
import DetailPage from './pages/DetailPage';
import { Detail } from './components/detail/Detail';
//여성 추천
import { Women } from './pages/Women';
//남성 추천
import { Man } from './pages/Man';
// 카테고리(의류)
import { Cloth } from './pages/Cloth.js';
// 카테고리(패션잡화)
import { Accessorie } from './pages/Accessorie.js';
// 카테고리(테크)
import { Tech } from './pages/Tech.js';
// 카테고리(라이프)
import { Life } from './pages/Life.js';
import Basket from './pages/Basket.js';
import { Provider, useSelector } from 'react-redux';
//shop
import { Shop } from "./pages/Shop";

function App() {
  //상품 변수 정의
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState([]);

  //useEffect로 최초 1번만 쇼핑몰데이터 렌더링
  //axios 문법
  useEffect(() => {
    axios.get("/data/products.json").then((datafile) => {
      setProducts(datafile.data.products);
    });
  }, [setProducts]);
  //

  // 정규화식(가격 3자리씩 분리)
  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  //
  return (
    <body>
      <div class="wrapper1">
        <>

          <TopNavBar cart={cart} />
          <div class="main-content">
            <Link to="/test"> 테스트 페이지</Link><br />
            <Routes>
              <Route exact={true} path="/"
                element={
                  <Home />
                } />
              <Route path="/products"
                element={
                  <Provider store={store}>
                    <Products convertPrice={convertPrice} />
                  </Provider>} />
              <Route
                path="/products/:id" element={<DetailPage
                  convertPrice={convertPrice} cart={cart} setCart={setCart}
                />} />
              <Route />
              <Route
                path="/login" element={<Login
                />} />
              <Route
                path="/register" element={<Register
                />} />
              <Route
                path="/cart" element={<Basket cart={cart} setCart={setCart} convertPrice={convertPrice} />}
              />
              <Route path="/manRecommend"
                element={
                  <Provider store={store}>
                    <Man
                      products={products}
                      setProducts={setProducts}
                      convertPrice={convertPrice}
                    />
                  </Provider>} />
              <Route path="/womenRecommend"
                element={
                  <Provider store={store}>
                    <Women
                      products={products}
                      setProducts={setProducts}
                      convertPrice={convertPrice}
                    />
                  </Provider>} />
              <Route path="/shop"
                element={
                  <Provider store={store}>
                    <Shop
                      search={search}
                      products={products}
                      setProducts={setProducts}
                      convertPrice={convertPrice}
                    />
                  </Provider>} />
              <Route path="/cloth"
                element={
                  <Provider store={store}>
                    <Cloth
                      products={products}
                      setProducts={setProducts}
                      convertPrice={convertPrice}
                    />
                  </Provider>} />
              <Route path="/accessorie"
                element={
                  <Provider store={store}>
                    <Accessorie
                      products={products}
                      setProducts={setProducts}
                      convertPrice={convertPrice}
                    />
                  </Provider>} />
              <Route path="/tech"
                element={
                  <Provider store={store}>
                    <Tech
                      products={products}
                      setProducts={setProducts}
                      convertPrice={convertPrice}
                    />
                  </Provider>} />
              <Route path="/life"
                element={
                  <Provider store={store}>
                    <Life
                      products={products}
                      setProducts={setProducts}
                      convertPrice={convertPrice}
                    />
                  </Provider>} />
              <Route path="/test" element={<Posttest />} />
            </Routes>
          </div>
          <footer1>
            <Footer />
          </footer1>
        </>
      </div>
    </body>
  );
}

export default App;
