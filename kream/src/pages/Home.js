import { EventBanner } from "../components/eventBanner/eventBanner";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <EventBanner />
      <Link to="/"> 홈페이지</Link><br />
      <div className="women">
        <Link to="/womenRecommend"> <img src=" /images/recomendwoman.jpg" />여성 추천</Link></div><br />
      <Link to="/manRecommend">남성 추천</Link><br />
      <Link to="/"> 이벤트</Link><br />
      <Link to="/products"> 전체 카테고리 목록 보기</Link><br />
      <Link to="/cloth"> 카테고리 (의류)</Link><br />
      <Link to="/accessorie"> 카테고리 (패션잡화)</Link><br />
      <Link to="/tech"> 카테고리 (테크)</Link><br />
      <Link to="/life"> 카테고리 (라이프)</Link><br />
      <Link to="/mainCategory"> 전체 카테고리</Link><br />
    </>
  );
};

export default Home;
