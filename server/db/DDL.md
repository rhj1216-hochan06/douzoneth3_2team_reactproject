DROP TABLE products CASCADE;

---

CREATE TABLE `products` (
   `id` INT(11) NOT NULL AUTO_INCREMENT NULL COLLATE 'utf8_general_ci',
   `name` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `provider` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `price` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `image` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `category` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   PRIMARY KEY (`id`)
)
COMMENT='id, name, provider, price, img, category'
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

insert into products(name,provider,price,image,category) values('아더에러 x 자라 패치워크 오버사이즈 니트 스웨터 멀티컬러','Ader ERROR',313000,'/images/image001.png','의류');
insert into products(name,provider,price,image,category) VALUES('텐씨 아틱 다운 파카 그레이','Ten C',840000,'/images/image002.png','의류');
insert into products(name,provider,price,image,category) VALUES('넘버링 1901 A13 워치 브레이슬릿 블랙 스트랩 실버','Numbering',198000,'/images/image003.png','패션잡화');
insert into products(name,provider,price,image,category) values('폴리테루 리소 데님 인디고 22FW','Off-White',188000,'/images/image004.png','패션잡화');
insert into products(name,provider,price,image,category) values('아더에러 x 자라 패치워크 오버사이즈 니트 스웨터 멀티컬러','Polyteru',164000,'/images/image005.png','의류');


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
	`userpassword` VARCHAR(50) NOT NULL COLLATE 'utf8_general_ci'
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

insert into products(userid,username,userpassword) values('kbm0225','bomin','alwlqhals);
insert into products(userid,username,userpassword) values('sinyeon','신형','12341234');
insert into products(userid,username,userpassword) values('hojjin','호진','33333333);