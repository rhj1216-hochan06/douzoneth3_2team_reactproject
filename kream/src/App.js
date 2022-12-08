import './App.css';
import { Button, Navbar, Container } from 'react-bootstrap';
import { Route, Routes, Link } from 'react-router-dom';
import { TopNavBar } from "./components/header/TopNavBar.js";
import Home from "./pages/Home";
import { Products } from "./components/products/Products";
import { useState, useEffect } from "react";
import axios from "axios";
import store from './store/store';
import Login from "./components/loginregister/Login"
//디테일 페이지
import DetailPage from './pages/DetailPage';
import { Detail } from './components/detail/Detail';
//여성 추천
import { womenRecommend } from './components/recommend/womenRecommend';
//남성 추천
import { manRecommend } from './components/recommend/manRecommend';
import { Provider, useSelector } from 'react-redux';

function App() {
  //상품 변수 정의
  const [products, setProducts] = useState([]);
  // 여성, 남성 추천
  const [womenRecommend, setWomenRecommend] = useState([]);
  const [manRecommend, setManRecommend] = useState([]);

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
    <>
      <TopNavBar />
      <Routes>
        <Route exact={true} path="/"
          element={
            <Home
              products={products}
              setProducts={setProducts}
              convertPrice = {convertPrice}
            />
          } />
        <Route path="/products"
          element={
            <Provider store={store}>
              <Products
                products={products}
                setProducts={setProducts}
                convertPrice = {convertPrice}
              />
            </Provider>} />
        <Route
          path="/products/:id" element={<DetailPage
            convertPrice = {convertPrice}
          />} />
        <Route />
        <Route
          path="/login" element={<Login
          />} />
       

      </Routes>
    </>
  );
}

export default App;
