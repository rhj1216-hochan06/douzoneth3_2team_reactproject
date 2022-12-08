import { EventBanner } from "../components/eventBanner/eventBanner";
import { Link } from 'react-router-dom';

const Home = ({products, setProducts}) => {
  return(
    <>
    <EventBanner/>    
    <Link to="/"> 홈페이지</Link><br/>
    <Link to="/products"> 상품 목록 보기</Link><br/>
    <Link to="/womenRecommend"> 여성 추천</Link><br/>
    <Link to="/womenRecommend"> 남성 추천</Link><br/>
    <Link to="/"> 이벤트</Link><br/>
   </>
  );
};

export default Home;
