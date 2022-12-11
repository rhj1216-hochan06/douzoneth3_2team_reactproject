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

//app.get('경로',할일)
app.get('/api/products', (req, res) => {
  console.log('products');
  maria.query("SELECT * FROM products " , (err, data) => {
    console.log('success');
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})
//여성추천
app.get('/api/womenRecommend', (req, res) => {
  console.log('womenRecommend');
  maria.query("SELECT * FROM products WHERE gender=2 " , (err, data) => {
    console.log('success');
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})
//남성추천
app.get('/api/manRecommend', (req, res) => {
  console.log('manRecommend');
  maria.query("SELECT * FROM products WHERE gender=1 " , (err, data) => {
    console.log('success');
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})
//패션잡화 카테고리
app.get('/api/accessorieCategory', (req, res) => {
  console.log('accessorieCategory');
  maria.query("SELECT * FROM products WHERE category='패션잡화' " , (err, data) => {
    console.log('success');
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})
//의류 카테고리
app.get('/api/clothCategory', (req, res) => {
  console.log('clothCategory');
  maria.query("SELECT * FROM products WHERE category='의류' " , (err, data) => {
    console.log('success');
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})
//라이프 카테고리
app.get('/api/lifeCategory', (req, res) => {
  console.log('lifeCategory');
  maria.query("SELECT * FROM products WHERE category='라이프' " , (err, data) => {
    console.log('success');
    if (!err) res.send({ products: data });
    else res.send(err);
  })
})
//테크 카테고리
app.get('/api/techCategory', (req, res) => {
  console.log('techCategory');
  maria.query("SELECT * FROM products WHERE category='테크' " , (err, data) => {
    console.log('success');
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


// app.get("/pasdmsa", function(요청,응답){
  //     응답.json({name  : 'black'})
  // })
  // app.listen(PORT, () => {
    //     console.log(`Server On : http://localhost:${PORT}/`);
    // })
    
    app.post('/api/login', (req, res) => {
      console.log('login');
      const userId = req.body.id;
      const userPw = req.body.pw;
      console.log(req.body);
      console.log(req.body);
      maria.query("select * from user where userid='"+userId+"' and userpassword='"+userPw+"'", (err, data, fields) => {
        console.log('success');
        console.log(data);
        if (!err) res.send({user : data});
        
        else res.send(err);
        console.log(data);
      })
      
    })


        
    app.post('/api/idcheck', (req, res) => {
      console.log('idcheck');
      const userId = req.body.id;
      
      console.log(req.body);
   
      maria.query("select * from user where userid='"+userId+"'", (err, data, fields) => {
        console.log('success');
        console.log(data);
        if (!err) res.send({user : data});
        
        else res.send(err);
        console.log(data);
      })
      
    })


    app.post('/api/register', (req, res) => {
      console.log('login');
      const userId = req.body.userid;
      const userName = req.body.username;
      const userPw = req.body.userpw;
      console.log(req.body);
      console.log(req.body);
      maria.query("insert into user(userid,username,userpassword) values('"+userId+"','"+userName+"','"+userPw+"')", (err, data, fields) => {
        console.log('register sucess');
        console.log(data);
        if (!err) res.send({user : data});
        
        else res.send(err);
        console.log(data);
      })
      
    })
    
    app.post('/api/detail', (req, res) => {
      const CART_USERID = req.body.CART_USERID;
      const CART_PRODUCTID = req.body.CART_PRODUCTID;
      const CART_COUNT = req.body.CART_COUNT;
      console.log(req.body);
      maria.query("select * from cart where CART_USERID='"+CART_USERID
      +"' and CART_PRODUCTID='"+CART_PRODUCTID+"'", (err, data, fields) => {
        console.log('success!');
        console.log(data);
        console.log(data.length);
        if(data.length != 0){//1. 데이터가 있다면 해당 count를 이곳의 count로 변경,
          maria.query("update cart set CART_COUNT ="+CART_COUNT+
          " where CART_USERID = '"+CART_USERID+"' and CART_PRODUCTID='"+CART_PRODUCTID+"'"
          ,(err,data,fields) => {
            console.log(data);
            console.log("데이터있음")
            if (!err) res.send({cart : data});
            else res.send(err);
          })
        }else if(data.length == 0){//2. 데이터가 없다면, id,count,userid를 가져가서 insert를 실행
          maria.query("insert into cart(CART_USERID,CART_PRODUCTID,CART_COUNT) values('"
          +CART_USERID+"',"+CART_PRODUCTID+","+CART_COUNT+")",(err,data,fields) => {
            console.log(data);
            console.log("데이터없음")
            if (!err) res.send({cart : data});
            else res.send(err);
          })
        }
      })
    })
    
    app.post('/api/nav', (req,res)=>{
      maria.query("SELECT * FROM cart where CART_USERID='"+req.body.id+"'" , (err,data) => {
        if (!err) {
          // const splits = data[0].split(',');
          const le = data.length;
          res.send(data);
        }
      })
    })
    
    app.post('/api/cart', (req,res)=>{
      maria.query("SELECT id,name,provider,price,image,category,cart_count from products p INNER JOIN cart ON id = CART_PRODUCTID where cart_USERID = '"
      +req.body.id+"'" , (err,data) => {
        if (!err) {
          res.send({cart : data});
        }
      })
    })
    
    app.post('/api/cart/count', (req,res)=>{
      const userid = req.body.userid;
      const product_id = req.body.pid;
      const count = req.body.cart_count;
      maria.query("update cart set CART_COUNT ="+count+
      " where CART_USERID = '"+userid+"' and CART_PRODUCTID='"+product_id+"'" , (err,data) => {
        if (!err) {
          res.send({cart : data});
        }
      })
    })

    app.post('/api/cart/delete', (req,res)=>{
      const userid = req.body.userid;
      const product_id = req.body.pid;
      maria.query("delete from cart where CART_USERID='"+userid+
      "' and CART_PRODUCTID = "+ product_id , (err,data) => {
        if (!err) {
          res.send({cart : data});
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
 