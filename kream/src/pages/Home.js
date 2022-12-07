import { EventBanner } from "../components/eventBanner/eventBanner";
import { Link } from 'react-router-dom';

const Home = ({products, setProducts}) => {
  return(
    <>
    <EventBanner/>    
    홈페이지, <Link to="/products"> 상품 목록 보기</Link>
    </>
  );
};

export default Home;
