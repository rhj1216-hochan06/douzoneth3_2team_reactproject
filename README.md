# douzoneth3_2team_reactproject
# 2조 스프링 프로젝트

더존비즈온 3기 2조 김민석, 최신형, 이기찬, 김보민, 류호진

## 목차

1. [프로젝트 개요](#프로젝트-개요)
   - 1.1 [개발 배경 및 목적](#개발-배경-및-목적)
   - 1.2 [추진체계 및 일정](#추진체계-및-일정)
   - 1.3 [부분별 수행 업무 및 담당자](#부분별-수행-업무-및-담당자)
2. [시스템 구축내용](#시스템-구축내용)
   - 2.1 [프로젝트 개발 범위](#프로젝트-개발-범위)
   - 2.2 [시스템 흐름도](#시스템-흐름도)
3. [시연](#시연)
4. [개발내용](#개발내용)
   - 4.1 [DB 테이블 설정](#DB-테이블-설정)
   - 4.2 [코드 구조](#코드-구조)
   - 4.3 [깃 설치 이후 최초구동시](#깃-설치-이후-최초구동시)
   - 4.4 [깃 허브 & 노션](#깃-허브--노션)
5. [결론 및 개선방안](#결론-및-개선방안)
   - 5.1 [결론 및 기대효과](#결론-및-기대효과)
   - 5.2 [관련 노션](#관련-노션)
## 프로젝트 개요

### 1.1 개발 배경 및 목적

기획배경:
- 실시간으로 변동되는 값을 처리하는 기능을 구현하여 UI로 출력하기 위함

기획목적:
- 리액트 프로젝트 숙달
- 리액트와 마리아 DB 연결 방식 숙달

기대효과:
- DB 데이터 처리 숙달
  
주요 기능 요약: 
- 헤더와 풋터
- 로그인과 마이페이지
- 제품별 상세보기
- 카트(장바구니)
- 마리아 DB 연결
- 상품 정렬
- 페이징
- 구매시 최저가 받아오기
- 카카오 페이 결제
- 최근 거래가격 추가
 p.s.상세한 내용은 깃 로그 참조

### 1.2 추진체계 및 일정
2022.12.06 ~ 2022.12.15
- 주제 선정
- 설계: Json 테이블 작성
- DB 테이블 작성
- 기능 세분화
- 깃 사용법 숙달
- 1차 기능 구현 및 프로그램 구현
- DB 연결
- 2차 기능 구현
- 디버그 및 최적화
- 문서 정리 및 테스트
- PPT 작성

### 1.3 부분별 수행 업무 및 담당자

분야 | 담당 업무 | 업무 설명 | 담당자
--- | --- | --- | ---
홈 파트 | 헤더와 풋터, 마리아 DB 연결, CSS 작업 | - | 최신형
디테일 파트 | 제품별 상세보기, 카트(장바구니), 마리아 DB 연결 | - | 이기찬
디테일 파트 | 제품별 상세보기, 카트(장바구니), 마리아 DB 연결 | - | 김민석
홈 파트 | 상품 정렬, 페이징, 카카오 페이 결제 | - | 류호진
홈 파트 | 헤더와 풋터, 로그인과 마이페이지, 검색 기능 구현, CSS 작업 | - | 김보민

## 시스템 구축내용

### 2.1 프로젝트 개발 범위

- 크림 쇼핑몰을 모티브로 쇼핑몰 사이트를 구현하였습니다.
- 관리자 페이지는 따로 없으며, 로그인, 마이페이지, 카테고리별 보기, 페이징 처리, 장바구니 등을 구현하였습니다.
- 기능 요약: 최저가 구매, 물품 판매, 결제. 상품 구매 시 DB가 수정되어 사이즈 별 재고가 줄어듭니다.
- 마리아 DB로 연결하였습니다.

### 2.2 시스템 흐름도

[시스템 흐름도 이미지]
![image](https://github.com/rhj1216-hochan06/douzoneth3_2team_reactproject/assets/83914448/19e83e4f-1065-4aa4-b72b-61b6090a127d)

## 시연
UI.zip으로 화면 캡쳐본 확인 가능

[결과 이미지를 정리한 깃 주소](https://github.com/Choisinhyung/Whipping_Project)

## 개발내용

### 4.1 DB 테이블 설정
![image](https://github.com/rhj1216-hochan06/douzoneth3_2team_reactproject/assets/83914448/035a65ec-47dc-43f5-be6d-c33c1ca68450)


### 4.2 코드 구조
![image](https://github.com/rhj1216-hochan06/douzoneth3_2team_reactproject/assets/83914448/d078a7c8-05c9-482b-9a63-2690e0db4b05)

Server.js에서 nodemon 명령어를 실행하면 서버가 켜집니다.
이후 kream 폴더에서 npm run build 명령어로 만들어진 페이지가 실행하면 각 페이지들이 실행됩니다.
App.js에서 설정한 주소로 이동하면 페이지 폴더 안의 JS 파일로 이동하게 되고, 해당 파일에서 호출하는 components 폴더 안의 JS 파일로 이동하게 됩니다.

### 4.3 깃 설치 이후 최초 구동시

```
$ cd kream
$ npm i
$ yarn add react-bootstrap bootstrap 
// $ npm install bootstrap bootstrap 으로는 버전이 달라 주입이 안된다면 yarn으로 연결하세요. 이유는 yarn의 독자적 설치 방식 덕분 
// node 버전 차이로 제대로 설치가 되지 않으면 사용할 것 
$ npm i -g nodemon //서버 재실행 자동화 설치 (nodemon 을 전역으로 설치할 때 사용)

$ npm run build
$ cd ../
$ cd server
$ nodemon server.js
```
이후 http://localhost:8080/ 접속
## 결론 및 개선방안
### 5.1 결론 및 기대효과
 마리아 DB 연결시 get 방식과 post 방식의 장 단점을 알았다
리액트 프로젝트를 더 잘 이해하고 진행 할 수 있게 되었다.

### 5.2 관련 노션
https://www.notion.so/2-d62e62afacc7475f84ef50b4261b90d3
(회의록 및 프로젝트 개발시 사용한 문서들이 작성 되어 있습니다.)
