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

//상품 id, 가격 ,사이즈 가져오기
app.post('/api/purchase/saleget', (req, res) => {
  console.log('saleget');
  const no = req.body.no;
  maria.query("SELECT SALE_PRODUCTID,SALE_PRICE,SALE_SIZE FROM sale WHERE SALE_NO =?", [no],
    function (err, data) {
      console.log('success');
      if (!err) {
        res.send({ buy: data });
      }
      else res.send(err);
    });
})

app.post('/api/purchase/productinfo', (req, res) => {
  console.log('saleget');
  const id = req.body.id;
  maria.query("SELECT * FROM products WHERE ID=" + id,
    function (err, data) {
      console.log('success');
      if (!err) {
        res.send(data[0]);
      }
      else res.send(err);
    });
})

//구매시 Sale_No에 status 1로 설정
app.post('/api/purchase/statusset', (req, res) => {
  console.log('statusset');
  const no = req.body.no;
  maria.query("UPDATE sale SET SALE_STATUS = 1 WHERE SALE_NO =?", [no])
})

//구매시 Sale에 상품id, userid, price,size,sale_check = 1 로 설정하여 삽입
app.post('/api/purchase/saleinsert', (req, res) => {
  console.log('statusset');
  const id = req.body.id;
  const userid = req.body.userid;
  const price = req.body.price;
  const size = req.body.size;
  const check = 1;
  maria.query("insert into sale(SALE_PRODUCTID,SALE_USERID,SALE_PRICE,SALE_SIZE,SALE_CHECK) values(?,?,?,?,?)", [id, userid, price, size, check])
})

app.post('/api/buy/stock', (req, res) => {

  const id = req.body.id;
  const size = req.body.size;
  let count;
  if (size == 'XS') maria.query("SELECT XS FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].XS - 1; maria.query("UPDATE STOCK SET XS = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'S') maria.query("SELECT S FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].S - 1; maria.query("UPDATE STOCK SET S = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'M') maria.query("SELECT M FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].M - 1; maria.query("UPDATE STOCK SET M = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'L') maria.query("SELECT L FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].L - 1; maria.query("UPDATE STOCK SET L = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'XL') maria.query("SELECT XL FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].XL - 1; maria.query("UPDATE STOCK SET XL = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_225') maria.query("SELECT size_225 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_225 - 1; maria.query("UPDATE STOCK SET size_225 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_230') maria.query("SELECT size_230 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_230 - 1; maria.query("UPDATE STOCK SET size_230 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_235') maria.query("SELECT size_235 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_235 - 1; maria.query("UPDATE STOCK SET size_235 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_240') maria.query("SELECT size_240 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_240 - 1; maria.query("UPDATE STOCK SET size_240 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_245') maria.query("SELECT size_245 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_245 - 1; maria.query("UPDATE STOCK SET size_245 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_250') maria.query("SELECT size_250 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_250 - 1; maria.query("UPDATE STOCK SET size_250 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_255') maria.query("SELECT size_255 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_255 - 1; maria.query("UPDATE STOCK SET size_255 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_260') maria.query("SELECT size_260 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_260 - 1; maria.query("UPDATE STOCK SET size_260 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_265') maria.query("SELECT size_265 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_265 - 1; maria.query("UPDATE STOCK SET size_265 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_270') maria.query("SELECT size_270 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_270 - 1; maria.query("UPDATE STOCK SET size_270 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_275') maria.query("SELECT size_270 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_275 - 1; maria.query("UPDATE STOCK SET size_275 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_280') maria.query("SELECT size_280 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_280 - 1; maria.query("UPDATE STOCK SET size_280 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_285') maria.query("SELECT size_285 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_285 - 1; maria.query("UPDATE STOCK SET size_285 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_290') maria.query("SELECT size_290 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_290 - 1; maria.query("UPDATE STOCK SET size_290 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_295') maria.query("SELECT size_295 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_295 - 1; maria.query("UPDATE STOCK SET size_295 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_300') maria.query("SELECT size_300 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_300 - 1; maria.query("UPDATE STOCK SET size_300 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
})

//판매페이지
app.post('/api/purchase/sell', (req, res) => {
  console.log('sellPay');
  const id = req.body.id;
  const userid = req.body.userid;
  const price = req.body.price;
  const size = req.body.size;
  console.log(id)
  console.log(userid)
  console.log(price)
  console.log(size)
  maria.query("insert into sale(SALE_PRODUCTID,SALE_USERID,SALE_PRICE,SALE_SIZE) values(?,?,?,?)", [id, userid, price, size],
    function (err, data) {

      if (!err) {
        res.send({ sell: data });
      }
      else res.send(err);
    });
})

app.post('/api/sell/stock', (req, res) => {

  const id = req.body.id;
  const size = req.body.size;
  let count;
  if (size == 'XS') maria.query("SELECT XS FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].XS + 1; maria.query("UPDATE STOCK SET XS = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'S') maria.query("SELECT S FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].S + 1; maria.query("UPDATE STOCK SET S = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'M') maria.query("SELECT M FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].M + 1; maria.query("UPDATE STOCK SET M = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'L') maria.query("SELECT L FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].L + 1; maria.query("UPDATE STOCK SET L = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'XL') maria.query("SELECT XL FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].XL + 1; maria.query("UPDATE STOCK SET XL = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_225') maria.query("SELECT size_225 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_225 + 1; maria.query("UPDATE STOCK SET size_225 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_230') maria.query("SELECT size_230 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_230 + 1; maria.query("UPDATE STOCK SET size_230 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_235') maria.query("SELECT size_235 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_235 + 1; maria.query("UPDATE STOCK SET size_235 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_240') maria.query("SELECT size_240 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_240 + 1; maria.query("UPDATE STOCK SET size_240 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_245') maria.query("SELECT size_245 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_245 + 1; maria.query("UPDATE STOCK SET size_245 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_250') maria.query("SELECT size_250 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_250 + 1; maria.query("UPDATE STOCK SET size_250 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_255') maria.query("SELECT size_255 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_255 + 1; maria.query("UPDATE STOCK SET size_255 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_260') maria.query("SELECT size_260 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_260 + 1; maria.query("UPDATE STOCK SET size_260 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_265') maria.query("SELECT size_265 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_265 + 1; maria.query("UPDATE STOCK SET size_265 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_270') maria.query("SELECT size_270 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_270 + 1; maria.query("UPDATE STOCK SET size_270 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_275') maria.query("SELECT size_270 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_275 + 1; maria.query("UPDATE STOCK SET size_275 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_280') maria.query("SELECT size_280 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_280 + 1; maria.query("UPDATE STOCK SET size_280 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_285') maria.query("SELECT size_285 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_285 + 1; maria.query("UPDATE STOCK SET size_285 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_290') maria.query("SELECT size_290 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_290 + 1; maria.query("UPDATE STOCK SET size_290 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_295') maria.query("SELECT size_295 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_295 + 1; maria.query("UPDATE STOCK SET size_295 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
  if (size == 'size_300') maria.query("SELECT size_300 FROM stock WHERE id = ?", [id], function (err, data) {
    if (!err) { count = data[0].size_300 + 1; maria.query("UPDATE STOCK SET size_300 = ? WHERE id = ?", [count, id]); } else res.send(err);
  });
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
app.post('/api/purchase/buy/id', (req, res) => {
  console.log('buyPay');
  const id = req.body.id;
  maria.query("select * from sale where sales_no = ?", [sales_no],
    function (err, data) {
      console.log('success');
      if (!err) {
        res.send({ products: data });
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

app.post('/api/saleno', (req, res) => {
  const id = req.body.id;
  const size = req.body.size;
  const price = req.body.price;
  maria.query("select SALE_NO FROM sale WHERE SALE_PRICE = ? and SALE_PRODUCTID = ? and SALE_SIZE = ?  and SALE_CHECK = 0 order by SALE_NO", [price, id, size],
    function (err, data) {
      if (!err) res.send({ data });
      else {
        console.log("DB저장 실패");
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
  const CART_SALENO = req.body.CART_SALENO;
  console.log(CART_USERID + "/" + CART_SALENO);
  const sendText = {
    text: "보내기 성공",
  };
  maria.query("select * from cart where cart_saleno = " + CART_SALENO + " and cart_userid = '" + CART_USERID + "'", (err, data) => {
    console.log(data);
    console.log(data.length);
    if (data.length > 0) {
      res.send([{ a: 1 }, { b: 2 }]);
      // console.log(sendText);
    }
    else {
      maria.query("INSERT INTO CART(CART_USERID,CART_SALENO) values('" + CART_USERID + "'," + CART_SALENO + ")", (err, data, fields) => {
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

  maria.query("SELECT *,@ROWNUM:=@ROWNUM+1 AS rownum  FROM products WHERE (name like '%" + search + "%' OR provider like'%" + search + "%' or category LIKE'%" + search + "%') AND (SELECT @ROWNUM:=0)=0 order by id", (err, data, fields) => {
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
//내 판매중목록 보기
app.post('/api/mypageshop', (req, res) => {
  console.log('mypageshop');
  let SALE_PRODUCTID = "";
  const id = req.body.id;
  maria.query("SELECT *,@ROWNUM:=@ROWNUM+1 AS rownum ,date_format(sale_date,'%Y-%m-%d') AS 'DATE',(SELECT image FROM products WHERE id=aaa.SALE_PRODUCTID) AS image,(SELECT name FROM products WHERE id=aaa.SALE_PRODUCTID) AS name FROM sale AS aaa WHERE sale_userid ='" + id + "' and sale_check=0 AND (SELECT @ROWNUM:=0)=0 order by sale_date", (err, data) => {
    console.log('success');
    if (!err) {
      res.send({ sale: data });

      console.log('mypageshop2');
      SALE_PRODUCTID = data.SALE_PRODUCTID;
    }

    else res.send(err);

  });

})


//내 판매한목록 보기
app.post('/api/mypagesaled', (req, res) => {
  console.log('mypageshop');
  let SALE_PRODUCTID = "";
  const id = req.body.id;
  maria.query("SELECT *,@ROWNUM:=@ROWNUM+1 AS rownum ,date_format(sale_date,'%Y-%m-%d') AS 'DATE',(SELECT image FROM products WHERE id=aaa.SALE_PRODUCTID) AS image,(SELECT name FROM products WHERE id=aaa.SALE_PRODUCTID) AS name FROM sale AS aaa WHERE sale_userid ='" + id + "' and sale_status=1 AND (SELECT @ROWNUM:=0)=0 order by sale_date", (err, data) => {
    console.log('success');
    if (!err) {
      res.send({ sale: data });

      console.log('mypageshop2');
      SALE_PRODUCTID = data.SALE_PRODUCTID;
    }

    else res.send(err);

  });

})

//내 구매목록 보기
app.post('/api/mypagebuy', (req, res) => {
  console.log('mypageshop');
  let SALE_PRODUCTID = "";
  const id = req.body.id;
  maria.query("SELECT *,@ROWNUM:=@ROWNUM+1 AS rownum ,date_format(sale_date,'%Y-%m-%d') AS 'DATE',(SELECT image FROM products WHERE id=aaa.SALE_PRODUCTID) AS image,(SELECT name FROM products WHERE id=aaa.SALE_PRODUCTID) AS name FROM sale AS aaa WHERE sale_userid ='" + id + "' and sale_check=1 AND (SELECT @ROWNUM:=0)=0 order by sale_date", (err, data) => {
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
