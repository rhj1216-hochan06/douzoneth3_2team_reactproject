DROP TABLE `products` CASCADE;

---

CREATE TABLE `products` (
   `id` INT(11) NOT NULL AUTO_INCREMENT NULL COLLATE 'utf8_general_ci',
   `name` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `provider` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `price` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `image` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `category` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `gender` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   PRIMARY KEY (`id`)
)
COMMENT='id, name, provider, price, img, category,gender'
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;



insert into products(name,provider,price,image,category,gender) values('아더에러 x 자라 패치워크 오버사이즈 니트 스웨터 멀티컬러','Ader Error','313000','/images/image001.png','의류','1');
insert into products(name,provider,price,image,category,gender) values('스투시 x 데님 티어스 타입 2 자켓 라이트 인디고','Stussy','990000','/images/image002.png','의류','1');
insert into products(name,provider,price,image,category,gender) values('넘버링 1901 A13 워치 브레이슬릿 블랙 스트랩 실버','Numbering','198000','/images/image003.png','패션잡화','1');
insert into products(name,provider,price,image,category,gender) values('오프화이트 x 포스트 아카이브 팩션 피규어 오브 스피치 캡 라이트 블랙','Off-White','188000','/images/image004.png','패션잡화','1');
insert into products(name,provider,price,image,category,gender) values('폴리테루 리소 데님 인디고 22FW','Polyteru','164000','/images/image005.png','의류','1');
insert into products(name,provider,price,image,category,gender) values('알레그리 캐시미어 리치 30 핸드메이드 더블 칼라 세미 오버 로브 코트 제트 블랙','Allegri','1170000','/images/image006.png','의류','2');
insert into products(name,provider,price,image,category,gender) values('애플 아이폰 13 프로 맥스 128GB 그래파이트','Kracker','1319000','/images/image007.png','테크','2');
insert into products(name,provider,price,image,category,gender) values('아더에러 x 자라 백팩 블랙','Ader Error','280000','/images/image008.png','라이프','2');
insert into products(name,provider,price,image,category,gender) values('피어 오브 갓 베이스볼 후드 빈티지 블랙','Fear of God','467000','/images/image009.png','의류','1');
insert into products(name,provider,price,image,category,gender) values('텐씨 아틱 다운 파카 그레이','TenC','830000','/images/image010.png','의류','1');
insert into products(name,provider,price,image,category,gender) values('언더마이카 리전.04 멀티 지퍼 배기 와이드 슬랙스 블랙','Undermycar','189000','/images/image011.png','의류','1');
insert into products(name,provider,price,image,category,gender) values('롤렉스 씨드웰러 126600','Rolex','17600000','/images/image012.png','패션잡화','1');
insert into products(name,provider,price,image,category,gender) values('슈프림 벨벳 패턴 트루퍼 라이트 블루 - 21FW','Supreme','228000','/images/image013.png','패션잡화','1');
insert into products(name,provider,price,image,category,gender) values('튜더 블랙 베이 크로노 MT5813 스틸 브레이슬릿 오팔린','Tudor','5900000','/images/image014.png','패션잡화','1');
insert into products(name,provider,price,image,category,gender) values('노스페이스 눕시 쇼트 자켓 블랙','TheNorthFace','649000','/images/image015.png','의류','2');
insert into products(name,provider,price,image,category,gender) values('막스마라 루드밀라 아이콘 코트 토바코','MaxMara','4150000','/images/image016.png','의류','2');
insert into products(name,provider,price,image,category,gender) values('디젤 엠아리사 점퍼 자수 컷아웃 로고 니트 블랙','Diesel','599000','/images/image017.png','의류','2');
insert into products(name,provider,price,image,category,gender) values('비비안 웨스트우드 투 사이드 싱글 오브 스카프 카멜','Vivienne Westwood','217000','/images/image018.png','패션잡화','2');
insert into products(name,provider,price,image,category,gender) values('셀린느 트리옴페 캔버스 & 카프스킨 미디움 폴코백 탄','Celine','2100000','/images/image019.png','패션잡화','2');
insert into products(name,provider,price,image,category,gender) values('반 클리프 & 아펠 스위트 알함브라 펜던트 옐로우 골드 마더 오브 펄','Van Cleef & Arpels','2110000','/images/image020.png','패션잡화','2');
insert into products(name,provider,price,image,category,gender) values('딥티크 플레르 드 뽀 오 드 퍼퓸 75ml (국내 정식 발매 제품)','Diptyque','227000','/images/image021.png','라이프','3');
insert into products(name,provider,price,image,category,gender) values('딥티크 오르페옹 오 드 퍼퓸 75ml (국내 정식 발매 제품)','Diptyque','215000','/images/image022.png','라이프','3');
insert into products(name,provider,price,image,category,gender) values('케이스티파이 x 아더에러 아이폰 스티커 맥세이프 케이스 클리어','Casetify','113000','/images/image023.png','라이프','3');
insert into products(name,provider,price,image,category,gender) values('헬리녹스 택티컬 필드 터널 4.35 코요테 탄','Helinox','4950000','/images/image024.png','라이프','3');
insert into products(name,provider,price,image,category,gender) values('레고 빈센트 반 고흐 별이 빛나는 밤','Lego','201000','/images/image025.png','라이프','3');
insert into products(name,provider,price,image,category,gender) values('톰포드 오드 우드 오 드 퍼퓸 100ml (국내 정식 발매 제품)','Tom Ford','338000','/images/image026.png','라이프','3');
insert into products(name,provider,price,image,category,gender) values('포켓몬 카드 게임 소드&실드 하이클래스팩 브이맥스 클라이맥스 4박스 (총 40팩)','Pokemon','375000','/images/image027.png','라이프','3');
insert into products(name,provider,price,image,category,gender) values('오프화이트 x 아모레 퍼시픽 프로텍션 박스','Off-White','34000','/images/image028.png','라이프','3');
insert into products(name,provider,price,image,category,gender) values('레고 바라쿠다 해적들','Lego','432000','/images/image029.png','라이프','3');
insert into products(name,provider,price,image,category,gender) values('레고 대형 백화점','Lego','481000','/images/image030.png','라이프','3');
insert into products(name,provider,price,image,category,gender) values('애플 에어팟 맥스 실버 (국내 정식 발매 제품)','Apple','693000','/images/image031.png','테크','3');
insert into products(name,provider,price,image,category,gender) values('애플 에어팟 프로 2세대 (국내 정식 발매 제품)','Apple','309000','/images/image032.png','테크','1');
insert into products(name,provider,price,image,category,gender) values('마이크로소프트 엑스박스 시리즈 X (국내 정식 발매 제품)','Microsoft','584000','/images/image033.png','테크','1');
insert into products(name,provider,price,image,category,gender) values('애플 에어팟 프로 맥세이프 호환 (국내 정식 발매 제품)','Apple','248000','/images/image034.png','테크','3');
insert into products(name,provider,price,image,category,gender) values('애플 에어팟 맥스 스페이스 그레이 (국내 정식 발매 제품)','Apple','681000','/images/image035.png','테크','3');
insert into products(name,provider,price,image,category,gender) values('소니 플레이스테이션 5 블루레이 에디션 (국내 정식 발매 제품)','Sony','713000','/images/image036.png','테크','3');
insert into products(name,provider,price,image,category,gender) values('소니 플레이스테이션 5 디지털 에디션 (국내 정식 발매 제품)','Sony','590000','/images/image037.png','테크','3');
insert into products(name,provider,price,image,category,gender) values('애플 아이패드 에어 5세대 와이파이 64기가 스페이스 그레이 (국내 정식 발매 제품)','Apple','728000','/images/image038.png','테크','2');
insert into products(name,provider,price,image,category,gender) values('애플 아이폰 14 프로 128기가 스페이스 블랙 (국내 정식 발매 제품)','Apple','1506000','/images/image039.png','테크','2');
insert into products(name,provider,price,image,category,gender) values('애플 아이폰 14 프로 256기가 실버 (국내 정식 발매 제품)','Apple','1609000','/images/image040.png','테크','1');









SELECT MAX(price) AS max_price FROM products;
SELECT * FROM products;
SELECT MIN(price) AS max_price FROM products;
commit;

---


DROP TABLE user CASCADE;

CREATE TABLE `user` (
	`userno` INT(11) NOT NULL AUTO_INCREMENT,
	`userid` VARCHAR(50) NOT NULL COLLATE 'utf8_general_ci',
	`username` VARCHAR(50) NOT NULL COLLATE 'utf8_general_ci',
	`userpassword` VARCHAR(50) NOT NULL COLLATE 'utf8_general_ci',
	`useremail` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`userphonenumber` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`useraddress` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	PRIMARY KEY (`userid`) USING BTREE,
	INDEX `userno` (`userno`) USING BTREE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=16
;




insert into user(userid,username,userpassword) values('kbm0225','bomin','alwlqhals');
insert into user(userid,username,userpassword) values('sinyeon','신형','12341234');
insert into user(userid,username,userpassword) values('hojjin','호진','33333333');
insert into user(userid,username,userpassword,useremail,userphonenumber,useraddress) values('kkbm0225','보민','alwlqhals','kbm0225@naver.com','010-5285-6697','서울특별시 종로구 혜화동');

SELECT * FROM USER;

COMMIT;

---


DROP TABLE cart cascade;

CREATE table `CART` (
	`CART_NO` INT NOT NULL AUTO_INCREMENT,
	`CART_USERID` VARCHAR(50) NOT NULL,
	`CART_PRODUCTID` INT(11) NOT NULL ,
	`CART_COUNT` INT(10) DEFAULT 0,
	PRIMARY KEY (CART_NO),
	FOREIGN KEY (CART_USERID) REFERENCES USER(USERID),
	FOREIGN KEY (CART_PRODUCTID) REFERENCES PRODUCTS(ID)
);

insert into cart(CART_USERID,CART_PRODUCTID) values('sinyeon',1);
insert into cart(CART_USERID,CART_PRODUCTID) values('sinyeon',3);
insert into cart(CART_USERID,CART_PRODUCTID) values('sinyeon',5);
insert into cart(CART_USERID,CART_PRODUCTID) values('sinyeon',7);
insert into cart(CART_USERID,CART_PRODUCTID) values('hojjin',2);
insert into cart(CART_USERID,CART_PRODUCTID) values('hojjin',4);
insert into cart(CART_USERID,CART_PRODUCTID) values('hojjin',6);
insert into cart(CART_USERID,CART_PRODUCTID) values('kbm0225',8);
insert into cart(CART_USERID,CART_PRODUCTID) values('kbm0225',9);
insert into cart(CART_USERID,CART_PRODUCTID) values('kbm0225',10);

SELECT * FROM cart;
commit;