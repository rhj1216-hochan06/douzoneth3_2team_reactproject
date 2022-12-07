import './App.css';
import { Button, Navbar, Container } from 'react-bootstrap';
import { Route, Routes, Link } from 'react-router-dom';
import { TopNavBar } from "./components/header/TopNavBar.js";
import Home from "./pages/Home";
import { Products } from "./components/products/Products";
import { useState, useEffect } from "react";
import axios from "axios";
import DetailPage from './pages/DetailPage';
import { Detail } from './components/detail/Detail';

function App() {
  //상품 변수 정의
  const [products, setProducts] = useState([]);

  //useEffect로 최초 1번만 쇼핑몰데이터 렌더링
  useEffect(() => {
    axios.get("/data/products.json").then((data) => {
      setProducts(data.data.products);
    });
  }, [setProducts]);

  //
  return (
    <>
      <TopNavBar />
      <Routes>
        <Route exact={true} path="/"
          element={<Home
            products={products}
            setProducts={setProducts}
          />} />
        <Route path="/products"
          element={<Products
            products={products}
            setProducts={setProducts}
          />} />
        <Route
          path="/products/:id" element={<DetailPage
          />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
