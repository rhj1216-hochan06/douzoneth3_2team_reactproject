import './App.css';
import { Button, Navbar, Container } from 'react-bootstrap';
import { Route, Routes, Link } from 'react-router-dom';
import { TopNavBar } from "./components/header/TopNavBar.js";
import Home from "./pages/Home";
import { Products } from "./components/products/Products";

function App() {
  return (
    <>
      <TopNavBar />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route path="/products" element={<Products/>}/>
        <Route/>
      </Routes>
    </>
  );
}

export default App;
