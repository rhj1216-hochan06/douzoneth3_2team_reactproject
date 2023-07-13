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

## 프로젝트 개요

### 1.1 개발 배경 및 목적

기획배경:
- 실시간으로 변동되는 값을 처리하는 기능을 구현하여 UI로 출력하기 위함

기획목적:
- 리액트 프로젝트 숙달
- 리액트와 마리아 DB 연결 방식 숙달

기대효과:
- DB 데이터 처리 숙달
- 주요 기능 요약: 헤더와 풋터, 로그인과 마이페이지, 제품별 상세보기, 카트(장바구니), 마리아 DB 연결, 상품 정렬, 페이징, 구매시 최저가 받아오기, 카카오 페이 결제, 최근 거래가격 추가
- 상세한 추가 내용은 깃 로그 참조

### 1.2 추진체계 및 일정

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
홈 파트 | 헤더와 풋터, 마리아 DB 연결, Css 작업 | - | 최신형
디테일 파트 | 제품별 상세보기, 카트(장바구니), 마리아 DB 연결 | - | 이기찬
디테일 파트 | 제품별 상세보기, 카트(장바구니), 마리아 DB 연결 | 기능 설명을 위해 담당 업무를 표기하였지만 <br />실제로는 업무를 같이 진행한 경우가 많아 모두가 함께 진행함 | 김민석
홈 파트 | 상품 정렬, 페이징, 카카오 페이 결제 | - | 류호진
홈 파트 | 헤더와 풋터, 로그인과 마이페이지, 검색 기능 구현, Css 작업 | - | 김보민

## 시스템 구축내용

### 2.1 프로젝트 개발 범위

- 크림 쇼핑몰을 모티브로 쇼핑몰 사이트를 구현하였습니다.
- 관리자 페이지는 따로 없으며, 로그인, 마이페이지, 카테고리별 보기, 페이징 처리, 장바구니 등을 구현하였습니다.
- 기능 요약: 최저가 구매, 물품 판매, 결제. 상품 구매 시 DB가 수정되어 사이즈 별 재고가 줄어듭니다.
- 마리아 DB로 연결하였습니다.

### 2.2 시스템 흐름도

[시스템 흐름도 이미지]

## 시연

[시연 내용]

## 개발내용

### 4.1 DB 테이블 설정

[DB 테이블 설정 내용]

### 4.2 코드 구조

Server.js에서 nodemon 명령어를 실행하면 서버가 켜집니다.
이후 kream 폴더에서 npm run build 명령어로 만들어진 페이지가 실행되고 각 페이지들이 실행됩니다.
App.js에서 설정한 주소로 이동하면 페이지 폴더 안의 JS 파일로 이동하게 되고, 해당 파일에서 호출하는 components 폴더 안의 JS 파일로 이동하게 됩니다.

### 4.3 깃 설치 이후 최초 구동시

```shell
douzoneth3_2team_reactproject> cd .\kream\
douzoneth3_2team_reactproject\kream> npm i
douzoneth3_2team_reactproject\kream> npm run build
project\douzoneth3_2team_reactproject\server> nodemon .\server.js




#### 간단 구동법
```
마리아db 필요
db코드는 server 폴더의 dv 안에 ddl과 dml로 구분되어있음
터미널을 열고 
../douzoneth3_2team_reactproject> cd kream
../douzoneth3_2team_reactproject\kream> npm i
../douzoneth3_2team_reactproject\kream> Npm run build 
../douzoneth3_2team_reactproject\kream> cd../
../douzoneth3_2team_reactproject> cd server
../douzoneth3_2team_reactproject\server> nodemon server.js

이후 
http://localhost:8080/
접속
UI.zip으로 화면 캡쳐본 확인 가능
```
#### 라이브러리 설치 (추가 설치시 기록하기)
```
$ npm i
$ yarn add react-bootstrap bootstrap 
// $ npm install bootstrap bootstrap 으로는 버전이 달라 주입이 안된다...yarn으로 연결하니 잘됨. 이유는 yarn의 독자적 설치 방식덕분 
// node 버전 차이로 제대로 설치가 되지 않으면 사용할 것 
$ npm i -g nodemon //서버 재실행 자동화 설치 (nodemon 을 전역으로 설치할 때 사용)
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

#### css파일명 유의사항
- 파일명.js에 css를 적용한다면 css 파일명은 반드시 파일명.module.css가 되어야 한다.

#### 이미지 기본 주소
- 이미지의 기본 주소(/)는 public으로 지정되어있다. "/images/파일명.png" 으로 변경시 참고

#### 디렉터리 구조
components / pages <br>
components : 내부 기능의 동작 및 css
pages : 각 페이지를 라우터 기준으로 분리

---

