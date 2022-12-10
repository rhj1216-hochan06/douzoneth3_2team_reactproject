const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const maria = require('./db/db');
maria.connect();

var router = express.Router();


app.use(bodyParser.urlencoded({ extended: true }))

//app.listen(포트번호)
app.listen(8080, function () {
  console.log('listening on 8080');
})

app.use(express.json());
var cors = require('cors');
app.use(cors());

//app.get('경로',할일)
app.get('/dog', function (req, res) {
  res.send('데이터 전송입니다.')
})
app.get('/api/products', (req, res) => {
  console.log('products');
  maria.query("SELECT * FROM products " , (err, data) => {
    console.log('success');
    if (!err) res.send({ products: data });
    else res.send(err);
  })

app.post('/api/text', (req,res)=>{
  const id = req.body.inText;
  console.log("post");
  console.log(id);
  maria.query("INSERT INTO TEST values(?)",[id]),
  function(err,rows,fields){
    if(err){
      console.log("DB저장 실패");
    }else{
      console.log("DB저장 성공");
    };
  }
})
// app.post('/api/products', (req, res) => {
//   console.log('products');
//   maria.query("SELECT * FROM products", (err, data) => {
//     console.log('success');
//     if (!err) res.send({ products: data });
//     else res.send(err);
//   })
  app.post("/data", (req, res) => {
    connection.query("SELECT * FROM products", function (err, rows, fields) {
      if (err) {
        console.log("데이터 가져오기 실패");
      } else {
        console.log(rows[0]);
        res.send(rows[0]);
      }
    });
  });

})



//react-app
app.use('/react', express.static(path.join(__dirname, 'react-app/build')));

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
    if (!err) res.send({ user: data });
    else res.send(err);
    
  })

})



