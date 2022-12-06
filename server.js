const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
// app.use(bodyParser.urlencoded({extended: true}))

//app.listen(포트번호, 할일) or app.listen(포트번호);
// app.listen(8080, function(){
//     console.log('listening on 8080');
// })

// app.use('/', express.static(path.join(__dirname, 'public')))
// app.use('/react', express.static(path.join(__dirname, 'react-app/build')))


// app.get('/main', function(req, res){
    // app.get('/', function(req, res){
    //     res.sendFile(path.join(__dirname, 'public/index.html'))
    //     //res.sendFile(__dirname +'/index.html')
    // })
    
    // //app.get('/', function(req, res){
    // app.get('/react', function(req, res){
    //     res.sendFile(path.join(__dirname, 'react-app/build/index.html'))  //리액트 시작페이지
    // })
    