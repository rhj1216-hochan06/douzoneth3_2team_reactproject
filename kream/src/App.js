import './App.css';
import { Button, Navbar, Container } from 'react-bootstrap';
import { Route, Routes, Link } from 'react-router-dom';
import { TopNavBar } from "./components/header/TopNavBar.js";
import Home from "./pages/Home";
import { Products } from "./components/products/Products";
import { WomenRecommend } from "./components/recommend/womenRecommend.js"; // 여성추천
import { ManRecommend } from "./components/recommend/manRecommend.js"; // 남성추천
import { useState, useEffect } from "react";
import axios from "axios";
import { Provider, useSelector } from 'react-redux';
import store from './store/store';
//디테일 페이지
import DetailPage from './pages/DetailPage';
import { Detail } from './components/detail/Detail';
//여성 추천
//import womenRecommend from './pages/WomenRecommend';
import { womenRecommend } from './components/recommend/womenRecommend';
//남성 추천
//import manRecommend from './pages/ManRecommend';
import { manRecommend } from './components/recommend/manRecommend';

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
  });
  //
  useEffect(() => {
    axios.get("/data/products.json").then((datafile) => {
      setProducts(datafile.data.products);
    });
  });
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
            />
          } />
        <Route path="/products"
          element={
            <Provider store={store}>
              <Products
                products={products}
                setProducts={setProducts}
              />
            </Provider>} />
        <Route
          path="/products/:id" element={<DetailPage
          />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
