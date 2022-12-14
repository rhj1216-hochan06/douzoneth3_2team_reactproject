const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const maria = require('./db/db');
maria.connect();
//app.listen(포트번호)
app.listen(8080, function () {
  console.log('listening on 8080');
})
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.json());
var cors = require('cors');
const { Console } = require('console');
app.use(cors());

// detail 가져오기
app.post('/api/detail', (req, res) => {
  const id = req.body.productId;
  maria.query("SELECT * FROM products WHERE ID=" + id, (err, data) => {
    if (!err) {
      res.send(data[0]);
    }
  })
})


// detail --- 구매 부분
app.post('/api/purchase', (req, res) => {
  const id = req.body.id;

  maria.query("SELECT categorydetail FROM products WHERE id = ?", [id],
    function (err, data) {

      if (!err) res.send({ data });

      else {
        console.log("DB저장 성공");
      };
    })

})

//구매페이지
app.post('/api/purchase/buy', (req, res) => {
  console.log('buyPay');
  const id = req.body.id;
  console.log(id);
  maria.query("select * from products where id=?",[id],
  function (err, data) {
    console.log('success');
    if (!err) {
      res.send({ data });
    }
    else res.send(err);
  });
})

app.post('/api/purchase/threesize', (req, res) => {
  const id = req.body.id;
  maria.query("SELECT XS,S,M,L,XL FROM stock WHERE id = ?", [id],
    function (err, data) {
      if (!err) res.send({ data });
      else {
        console.log("DB저장 성공");
      };
    })
})


app.post('/api/purchase/onesize', (req, res) => {
  const id = req.body.id;
  maria.query("SELECT onesize FROM stock WHERE id = ?", [id],
    function (err, data) {
      if (!err) res.send({ data });
      else {
        console.log("DB저장 성공");
      };
    })
})


app.post('/api/purchase/perfume', (req, res) => {
  const id = req.body.id;
  maria.query("SELECT size_30ml,size_100ml FROM stock WHERE id = ?", [id],
    function (err, data) {
      if (!err) res.send({ data });
      else {
        console.log("DB저장 성공");
      };
    })


})

app.post('/api/purchase/shoe', (req, res) => {
  const id = req.body.id;
  maria.query("SELECT size_225,size_230,size_235,size_240,size_245,size_250,size_255,size_260,size_265,size_270,size_275,size_280,size_285,size_290,size_295,size_300 FROM stock WHERE id = ?", [id],
    function (err, data) {
      if (!err) res.send({ data });
      else {
        console.log("DB저장 성공");
      };
    })


})
app.post('/api/purchase/size/price', (req, res) => {
  const id = req.body.id;
  maria.query("SELECT MIN(sale_price) AS sale_price ,SALE_SIZE FROM sale WHERE sale_productid = ? group by sale_size", [id],
    function (err, data) {
      if (!err) res.send({ data });
      else {
        console.log("DB저장 성공");
      };
    })
})
//------------------------------------------------------------------

//app.get('경로',할일)
app.get('/api/products', (req, res) => {
  maria.query("SELECT * FROM products ", (err, data) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})
//여성추천
app.get('/api/womenRecommend', (req, res) => {
  console.log('womenRecommend');
  maria.query("SELECT * FROM products WHERE gender=2 ", (err, data) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})
//남성추천
app.get('/api/manRecommend', (req, res) => {
  console.log('manRecommend');
  maria.query("SELECT * FROM products WHERE gender=1 ", (err, data) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})
//패션잡화 카테고리
app.get('/api/main/accessorieCategory', (req, res) => {
  console.log('accessorieCategory');
  maria.query("SELECT * FROM products WHERE category='패션잡화' ", (err, data) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})
//의류 카테고리
app.get('/api/main/clothCategory', (req, res) => {
  console.log('clothCategory');
  maria.query("SELECT * FROM products WHERE category='의류' ", (err, data) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})
//라이프 카테고리
app.get('/api/main/lifeCategory', (req, res) => {
  console.log('lifeCategory');
  maria.query("SELECT * FROM products WHERE category='라이프' ", (err, data) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})
//테크 카테고리
app.get('/api/main/techCategory', (req, res) => {
  console.log('techCategory');
  maria.query("SELECT * FROM products WHERE category='테크' ", (err, data) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})

//한파 특가 이벤트
app.get('/api/winter', (req, res) => {
  console.log('winter');
  maria.query("SELECT * FROM products WHERE category='의류' ", (err, data) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})

//크리스마스 추천
app.get('/api/christmas', (req, res) => {
  console.log('christmas');
  maria.query("SELECT * FROM products WHERE category='크리스마스추천' ", (err, data) => {
    console.log('success');
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})

// 메인페이지 신상품 : 가장 최근 추가된 데이터 중 4개의 값만 가져오기
app.get('/api/', (req, res) => {
  maria.query("select * from products order by id DESC LIMIT 4;", (err, data) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})



//react-app
app.use('/', express.static(path.join(__dirname, '../kream/build')));
//* : 모든 페이지에서 다 들어오게하는 것
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../kream/build/index.html'));
})


app.get('/api/products/id', (req, res) => {
  maria.query("SELECT * FROM products order by id", (err, data) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})

app.get('/api/products/pricelow', (req, res) => {
  maria.query("SELECT * FROM products order by price", (err, data) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})

app.get('/api/products/pricehigh', (req, res) => {
  maria.query("SELECT * FROM products order by price desc", (err, data) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})



// app.get("/pasdmsa", function(요청,응답){
//     응답.json({name  : 'black'})
// })
// app.listen(PORT, () => {
//     console.log(`Server On : http://localhost:${PORT}/`);
// })


//로그인
app.post('/api/login', (req, res) => {
  const userId = req.body.id;
  const userPw = req.body.pw;
  maria.query("select * from user where userid='" + userId + "' and userpassword='" + userPw + "'", (err, data, fields) => {
    if (!err) res.send({ user: data });
    else res.send(err);
  })

})


//아이디체크     
app.post('/api/idcheck', (req, res) => {
  const userId = req.body.id;
  maria.query("select * from user where userid='" + userId + "'", (err, data, fields) => {
    if (!err) res.send({ user: data });
    else res.send(err);
  })

})

//회원가입
app.post('/api/register', (req, res) => {
  const userId = req.body.userid;
  const userName = req.body.username;
  const userPw = req.body.userpw;
  const userEmail = req.body.useremail;
  const userPhonenumber = req.body.userphonenumber;
  const userAddress = req.body.useraddress;

  maria.query("insert into user(userid,username,userpassword,useremail,userphonenumber,useraddress) values('" + userId + "','" + userName + "','" + userPw + "','" + userEmail + "','" + userPhonenumber + "','" + userAddress + "')", (err, data, fields) => {
    if (!err) res.send({ user: data });
    else res.send(err);
  })

})

app.post('/api/cartinsert', (req, res) => {
  const CART_USERID = req.body.CART_USERID;
  const CART_PRODUCTID = req.body.CART_PRODUCTID;
  const CART_COUNT = req.body.CART_COUNT;
  maria.query("select * from cart where CART_USERID='" + CART_USERID
    + "' and CART_PRODUCTID='" + CART_PRODUCTID + "'", (err, data, fields) => {
      if (data.length != 0) {//1. 데이터가 있다면 해당 count를 이곳의 count로 변경,
        maria.query("update cart set CART_COUNT =" + CART_COUNT +
          " where CART_USERID = '" + CART_USERID + "' and CART_PRODUCTID='" + CART_PRODUCTID + "'"
          , (err, data, fields) => {
            if (!err) res.send({ cart: data });
            else res.send(err);
          })
      } else if (data.length == 0) {//2. 데이터가 없다면, id,count,userid를 가져가서 insert를 실행
        maria.query("insert into cart(CART_USERID,CART_PRODUCTID,CART_COUNT) values('"
          + CART_USERID + "'," + CART_PRODUCTID + "," + CART_COUNT + ")", (err, data, fields) => {
            if (!err) res.send({ cart: data });
            else res.send(err);
          })
      }
    })
})

app.post('/api/nav', (req, res) => {
  maria.query("SELECT * FROM cart where CART_USERID='" + req.body.id + "'", (err, data) => {
    if (!err) {
      // const splits = data[0].split(',');
      const le = data.length;
      res.send(data);
    }
  })
})

app.post('/api/cart', (req, res) => {
  maria.query("SELECT c.cart_userid,c.cart_saleno,p.name,p.provider,p.image,s.sale_price,s.sale_check,s.sale_size from products p INNER JOIN SALE s ON id = SALE_PRODUCTID INNER JOIN CART c ON CART_SALENO = SALE_NO where CART_USERID = '"
    + req.body.id + "'", (err, data) => {
      if (!err) {
        res.send({ cart: data });
      }
    })
})

app.post('/api/cart/count', (req, res) => {
  const userid = req.body.userid;
  const product_id = req.body.pid;
  const count = req.body.cart_count;
  maria.query("update cart set CART_COUNT =" + count +
    " where CART_USERID = '" + userid + "' and CART_PRODUCTID='" + product_id + "'", (err, data) => {
      if (!err) {
        res.send({ cart: data });
      }
    })
})

app.post('/api/cart/delete', (req, res) => {
  const userid = req.body.userid;
  const cart_saleno = req.body.cart_saleno;
  maria.query("delete from cart where CART_USERID='" + userid +
    "' and CART_SALENO = " + cart_saleno, (err, data) => {
      if (!err) {
        res.send({ cart: data });
      }
    })
})

// app.get('/api/womenRecommend', (req, res) => {
//   console.log('womanRecommand');
//   maria.query("SELECT * FROM products WHERE gender=2" , (err, data) => {
//     console.log('여성추천 받아오나요?');
//     if (!err) res.send({ products: data });
//     else res.send(err);
//   })
// })
//app.get('경로',할일)


//검색하기
app.post('/api/search', (req, res) => {

  const search = req.body.search;

  maria.query("SELECT * FROM products WHERE name like '%" + search + "%' OR provider like'%" + search + "%' or category like'%" + search + "%'", (err, data, fields) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})

//마이페이지
app.post('/api/mypage', (req, res) => {
  const userId = req.body.id;
  const userPw = req.body.pw;
  maria.query("select * from user where userid='" + userId + "'", (err, data, fields) => {
    if (!err) res.send({ user: data });
    else res.send(err);
  })
})
//sale테이블 값 추가기능 
app.post('/api/inputsale', (req, res) => {
  const SALE_USERID = req.body.SALE_USERID;
  const SALE_PRODUCTID = req.body.SALE_PRODUCTID;
  const SALE_PRICE = req.body.SALE_PRICE;
  const SALE_SIZE = req.body.SALE_SIZE;

  maria.query("insert into sale(SALE_PRODUCTID,SALE_USERID,SALE_PRICE,SALE_SIZE) values(" + SALE_PRODUCTID
    + ",'" + SALE_USERID + "'," + SALE_PRICE + ",'" + SALE_SIZE + "')", (err, data, fields) => {
      if (!err) res.send({ sale: data });
    })
})
//단어로 정렬 (단어는 : id,price,price desc)
app.post('/api/word', (req, res) => {

  const word = req.body.word;

  maria.query("SELECT @ROWNUM:=@ROWNUM+1 AS rownum ,id,name,provider,price,image,category,gender,categorydetail FROM products WHERE (SELECT @ROWNUM:=0)=0 order by " + word, (err, data, fields) => {
    console.log('success');
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})
//내 판매목록 보기
app.post('/api/mypageshop', (req, res) => {
  console.log('mypageshop');
  let SALE_PRODUCTID = "";
  const id = req.body.id;
  maria.query("SELECT *,date_format(sale_date,'%Y-%m-%d') AS 'DATE',(SELECT image FROM products WHERE id=aaa.SALE_PRODUCTID) AS image,(SELECT name FROM products WHERE id=aaa.SALE_PRODUCTID) AS name FROM sale AS aaa WHERE sale_userid ='" + id + "' and sale_check=0", (err, data) => {
    console.log('success');
    if (!err) {
      res.send({ sale: data });

      console.log('mypageshop2');
      SALE_PRODUCTID = data.SALE_PRODUCTID;
    }

    else res.send(err);

  });

})

//내 rn매목록 보기
app.post('/api/mypagebuy', (req, res) => {
  console.log('mypageshop');
  let SALE_PRODUCTID = "";
  const id = req.body.id;
  maria.query("SELECT *,date_format(sale_date,'%Y-%m-%d') AS 'DATE',(SELECT image FROM products WHERE id=aaa.SALE_PRODUCTID) AS image,(SELECT name FROM products WHERE id=aaa.SALE_PRODUCTID) AS name FROM sale AS aaa WHERE sale_userid ='" + id + "' and sale_check=1", (err, data) => {
    console.log('success');
    if (!err) {
      res.send({ sale: data });

      console.log('mypageshop2');
      SALE_PRODUCTID = data.SALE_PRODUCTID;
    }

    else res.send(err);

  });

})

app.post('/api/sale', (req, res) => {
  const id = req.body.pid;
  maria.query("SELECT SALE_NO,SALE_SIZE,SALE_PRICE,SALE_DATE from SALE WHERE SALE_CHECK = 1 AND SALE_PRODUCTID = " + id + " ORDER BY SALE_NO DESC", (err, data, fields) => {
    console.log('success');
    if (!err) res.send({ sale: data });
    else res.send(err);
  })

})
