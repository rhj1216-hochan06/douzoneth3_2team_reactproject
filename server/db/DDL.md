DROP TABLE `STOCK` CASCADE;
DROP TABLE `CART` CASCADE;
DROP TABLE `SALE` CASCADE;
DROP TABLE `USER` CASCADE;
DROP TABLE `PRODUCTS` CASCADE;

---

CREATE TABLE `products` (
   `id` INT(11) NOT NULL AUTO_INCREMENT NULL COLLATE 'utf8_general_ci',
   `name` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `provider` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `price` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `image` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `category` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `gender` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `categorydetail` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   PRIMARY KEY (`id`)
)
COMMENT='id, name, provider, price, img, category,gender,categorydetail'
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

---

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

---

CREATE table `CART` (
	`CART_NO` INT NOT NULL AUTO_INCREMENT,
	`CART_USERID` VARCHAR(50) NOT NULL,
	`CART_PRODUCTID` INT(11) NOT NULL ,
	`CART_COUNT` INT(10) DEFAULT 0,
	PRIMARY KEY (CART_NO),
	FOREIGN KEY (CART_USERID) REFERENCES USER(USERID),
	FOREIGN KEY (CART_PRODUCTID) REFERENCES PRODUCTS(ID)
);

---

CREATE table `SALE` (
	`SALE_NO` INT NOT NULL AUTO_INCREMENT,
	`SALE_PRODUCTID` INT(11) NOT NULL,
	`SALE_USERID` VARCHAR(50),
	`SALE_PRICE` INT NOT NULL,
	`SALE_SIZE` VARCHAR(50),
	`SALE_CHECK` INT(10) DEFAULT 0,
	`SALE_DATE` DATE DEFAULT CURRENT_TIMESTAMP,
	`SALE_STATUS` INT(10) DEFAULT 0,
	PRIMARY KEY (SALE_NO),
	FOREIGN KEY (SALE_USERID) REFERENCES USER(USERID),
	FOREIGN KEY (SALE_PRODUCTID) REFERENCES PRODUCTS(ID)
);

---

CREATE TABLE `stock` (
   `id` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `XS` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `S` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `M` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `L` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `XL` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `size_225` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `size_230` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `size_235` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `size_240` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `size_245` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `size_250` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `size_255` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `size_260` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `size_265` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `size_270` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `size_275` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `size_280` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `size_285` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `size_290` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `size_295` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `size_300` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `size_30ml` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `size_100ml` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   `onesize` INT(11) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
   PRIMARY KEY (`id`)
)
COMMENT='id, XS, S, M, L, XL,size_225,size_230, size_235,size_240,size_245,size_250,size_255,size_260,size_265,size_270,size_275,size_280,size_285,size_290,size_295,size_300,size_30ml,size_100ml,onesize'
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;


commit;


--------