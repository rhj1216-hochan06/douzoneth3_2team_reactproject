import { EventBanner } from "../components/eventBanner/eventBanner";
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <>
    <EventBanner/>    
    홈페이지, 홈이나 App.js에서 데이터를 받아 하위 카테고리인 Products로 넘겨줘야한다. >>> 
    방식은 props, 이유는 홈에서도 데이터를 써야 하기 때문 <Link to="/products/"> 상품 목록 보기</Link>
    
    
    </>
  );
};

export default Home;
