# douzoneth3_2team_reactproject
#### 라이브러리 설치 (추가 설치시 기록하기)
```
$ npm install @reduxjs/toolkit
$ npm install react-redux redux
$ npm install react-router-dom@6
$ npm install axios
$ yarn add react-bootstrap bootstrap 
// $ npm install bootstrap bootstrap 으로는 버전이 달라 주입이 안된다...yarn으로 연결하니 잘됨. 이유는 yarn의 독자적 설치 방식덕분 
$ npm install styled-components 
$ npm install swiper // 배너 스와이프 기능
$ npm i -g nodemon //서버 재실행 자동화 설치
$ npm install aos --save // 애니메이션 효과
npm install jquery --save // jquery 추가
```
---

#### DB(임시,테이블이름,컬럼,구조 상의 필요)

`DB연결 및 실행방법(mariaDB)`
kream폴더로 이동, npm run build
server/db/db.js 파일을 본인의 db정보로 수정 
server폴더로 이동, nodemon server.js
local 8080으로 접속

> DDL위치는 db폴더 안 DDL.md 파일 참조.

---
#### 깃 관련 당부

1.  main 외 각자 이름별 로컬 브랜치 만들어서 작업해주세요
2. 작업시작전 pull / fetch필수
3.  기능별 commit 해주세요
ex.버튼 클릭시 갯수증가기능 추가 
4. 1일 1푸쉬는  합시다.
나중에 구멍 막는것보다 그때그떄 작은구멍 막는게 쉽

#### css파일명 유의사항
- 파일명.js에 css를 적용한다면 css 파일명은 반드시 파일명.module.css가 되어야 한다.

#### 이미지 기본 주소?
- 이미지의 기본 주소(/)는 public으로 지정되어있다. "/images/파일명.png" 이런식으로 사용하면 된다.

#### 디렉터리 구조?

components / pages <br>
components : 내부 기능의 동작 및 css
pages : 각 페이지를 라우터 기준으로 분리

---
### 구현할 기능목록 작성
구현할 기능 목록을 업데이트함으로써 살아있는 문서로 만들도록 노력하자.

- [ ] header 
- [ ] footer
- [ ] 홈 배너 
- [ ] -> 개인의견으로 배너랑 연결된 이벤트 페이지(브랜드 추천옷같은)를 최소한의 기여도로써 개인별 1개는 구현하는것을 제안함. 디테일팀 완성된것을 참고하여 만들어도 무방

- [ ] 카테고리
남자추천옷, 여자추천옷,브랜드추천옷
//Json항목을 조건으로 조회

- [ ] json 필수항목 초안
    - 이름
    - 브랜드
    - 가격(구매가격과 판매가격 별도로? how?)
    - 성별
    - 사이즈
    - 카테고리(신발,의류,패션잡화,라이프,테크..)

- [ ] 수량선택 및 구매기능
- [ ] 오름차순,내림차순등의 정렬기능(크림에선 인기순,프리미엄,즉구가,즉판가등)
- [ ] 검색기능
- [ ] 장바구니기능

----------------------

나중에 해도 괜찮을 기능
- [ ] 시세 차트
- [ ] 후기리뷰
- [ ] 로그인
- [ ] 고객지원(관리자)
- [ ] 공지사항
- [ ] 이용약관 등등


그외에 중요하다고 생각되는 기능 등
안건 올리기
