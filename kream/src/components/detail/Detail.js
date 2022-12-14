import axios from "axios";
import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./detail.module.css";

//-----------구매 function import--------------------------------------------------------------------------------------------------------------
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import $ from 'jquery';
import { applyMiddleware } from "redux";

export const Detail = ({ convertPrice }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  let selectsize = selectsize;
  let selectprice = selectprice;
  const sessionStorage = window.sessionStorage;
  const [sale, setSale] = useState({});
  const [timer, setTimer] = useState("00:00:00");

// ------ test--------------------------------------------------------
const [PurchaseShow, setPurchaseShow] = useState(false);
const [SaleShow, setSaleShow] = useState(false);
const [CartShow, setCartShow] = useState(false);

const PurchasehandleClose = () => setPurchaseShow(false);
const SalehandleClose = () => setSaleShow(false);
const CarthandleClose = () => setCartShow(false);
const CarthandleShow = () => {setCartShow(true);};
// ----------------- 구매 modal show function------------------------------------------------------------------------------------------------------------------------
const PurchasehandleShow = (e) => {
    console.log(e.target.id)
   
    if(e.target.id == "purchasebtn" )
    {
      setPurchaseShow(true);
    }
    else if(e.target.id == "cartbtn")
    {
      setCartShow(true);
    }
   
 

  
  fetch("/api/purchase",{
    method: "POST",
    headers: {
      "Content-Type":"application/json; charset=utf-8"
    },
    body: JSON.stringify({
      "id" : id,
    })
  })
    .then((res) => res.json())
    .then(json => {
      console.log(json);
      console.log(json.data[0].categorydetail);



     //-----------------------------------------------------3사이즈-------------------------------------------------------------------------

     if(json.data[0].categorydetail == "3사이즈")
     {
       console.log(1);
         fetch("/api/purchase/threesize",{
     
           method: "POST",
           headers: {
             "Content-Type":"application/json; charset=utf-8"
     
           },
           body: JSON.stringify({
             "id" : id,
           
           })
     
         })
           .then((res) => res.json())
           .then(json => {
             console.log(json)
            
            
               $('#sizeRB').append("<div id='row1' class='row' style='margin-bottom:10px;'>"
               +"</div>"
               );
               $('#sizeRB').append("<div id='row2' class='row' style='margin-bottom:10px;'>"
               +"</div>"
               );
               
               
               if(json.data[0].XS > 0)
               {
                 $('#row1').append("<div class='col-md-4 col-6'>"
                 +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1' >"
                 +"<label id = 'XS' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>XS<br><span id='tag1' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                 +"</div>");
               
               }
               else{
                 $('#row1').append("<div class='col-md-4 col-6'>"
                 +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1' disabled>"
                 +"<label id = 'XS' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>XS<br><span id='tag1' style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                 +"</div>");
               }

               if(json.data[0].S > 0)
               {
                 $('#row1').append("<div class='col-md-4 col-6'>"
                 +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-2' value = '2' >"
                 +"<label id = 'S' tabindex='0' for='tag-radio-2' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>S<br><span id='tag2' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                 +"</div>");
               
               }
               else
               {
                 $('#row1').append("<div class='col-md-4 col-6'>"
                 +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-2' value = '2' disabled>"
                 +"<label id = 'S' tabindex='0' for='tag-radio-2' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>S<br><span id='tag2' style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                 +"</div>");
               
               }

               if(json.data[0].M > 0)
               {
                 $('#row1').append("<div class='col-md-4 col-6'>"
                 +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-3' value = '3' >"
                 +"<label id = 'M' tabindex='0' for='tag-radio-3' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>M<br><span id='tag3' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                 +"</div>");
               
               }
               else
               {
                 $('#row1').append("<div class='col-md-4 col-6'>"
                 +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-3' value = '3' disabled>"
                 +"<label id = 'M' tabindex='0' for='tag-radio-3' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>M<br><span id='tag3' style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                 +"</div>");
               
               }
               if(json.data[0].L > 0)
               {
                 $('#row2').append("<div class='col-md-4 col-6'>"
                 +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-4' value = '4' >"
                 +"<label id = 'L' tabindex='0' for='tag-radio-4' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>L<br><span id='tag4' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                 +"</div>");
               
               }
               else{
                 $('#row2').append("<div class='col-md-4 col-6'>"
                 +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-4' value = '4' disabled>"
                 +"<label id = 'L' tabindex='0' for='tag-radio-4' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>L<br><span id='tag4' style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                 +"</div>");
               }
               if(json.data[0].XL > 0)
               {
                 $('#row2').append("<div class='col-md-4 col-6'>"
                 +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-5' value = '5' >"
                 +"<label id = 'XL' tabindex='0' for='tag-radio-5' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>XL<br><span id='tag5' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                 +"</div>");
               
               }
               else{
                 $('#row2').append("<div class='col-md-4 col-6'>"
                 +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-5' value = '5' disabled>"
                 +"<label id = 'XL' tabindex='0' for='tag-radio-5' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>XL<br><span id='tag5' style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                 +"</div>");
               }
               fetch("/api/purchase/size/price",{
     
                 method: "POST",
                 headers: {
                   "Content-Type":"application/json; charset=utf-8"
           
                 },
                 body: JSON.stringify({
                   "id" : id,
                 
                 })
           
               })
                 .then((res) => res.json())
                 .then(json => {
                  json.data.map((temp,i)=>{
                   console.log(temp.SALE_SIZE)
                   console.log(temp.sale_price)
                   let convertpricetext = convertPrice(temp.sale_price);
                   if(temp.SALE_SIZE == "XS"){
                      $("#tag1").text(convertpricetext);
                      $("#tag-radio-1").attr("value",temp.sale_price)
                   }
                   else if(temp.SALE_SIZE == "S"){
                     $("#tag2").text(convertpricetext);
                      $("#tag-radio-2").attr("value",temp.sale_price)
                   }
                   else if(temp.SALE_SIZE == "M"){
                     $("#tag3").text(convertpricetext);
                     $("#tag-radio-3").attr("value",temp.sale_price)
                   }
                   else if(temp.SALE_SIZE == "L"){
                     $("#tag4").text(convertpricetext);
                     $("#tag-radio-4").attr("value",temp.sale_price)
                   }
                   else if(temp.SALE_SIZE == "XL"){
                     $("#tag5").text(convertpricetext);
                     $("#tag-radio-5").attr("value",temp.sale_price)
                   }
                  })
                  
                  $('#tag-radio-1').on('click', () => { 
                   $('#selectsize').text('XS');
                   $('#selectprice').text(convertPrice($('#tag-radio-1').val()));
                 })  
                 $('#tag-radio-2').on('click', () => { 
                   $('#selectsize').text('S');
                   $('#selectprice').text(convertPrice($('#tag-radio-2').val()));
                 })  
                 $('#tag-radio-3').on('click', () => { 
                   $('#selectsize').text('M');
                   $('#selectprice').text(convertPrice($('#tag-radio-3').val()));
                 })  
                 $('#tag-radio-4').on('click', () => { 
                   $('#selectsize').text('L');
                   $('#selectprice').text(convertPrice($('#tag-radio-4').val()));
                 })  
                 $('#tag-radio-5').on('click', () => { 
                   $('#selectsize').text('XL');
                   $('#selectprice').text(convertPrice($('#tag-radio-5').val()));
                 })  
                
                 })

           })

   }
     //-----------------------------------------------원사이즈------------------------------------------------------------------------------------------

     else if(json.data[0].categorydetail == 'onesize')
     {
        console.log(1)
         fetch("/api/purchase/onesize",{
     
           method: "POST",
           headers: {
             "Content-Type":"application/json; charset=utf-8"
     
           },
           body: JSON.stringify({
             "id" : id,
           
           })
     
         })
           .then((res) => res.json())
           .then(json => {
             console.log(json)
            
            
               $('#sizeRB').append("<div id='row1' class='row' style='margin-bottom:10px;'>"
               +"</div>"
               );
              
               
               if(json.data[0].onesize > 0)
               {
                 $('#row1').append("<div class='col-md-4 col-6'>"
                 +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1' >"
                 +"<label id = 'onesize' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>onesize<br><span id='tag1' value=''  style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                 +"</div>");
                 
               
               }
               else{
                 $('#row1').append("<div class='col-md-4 col-6'>"
                 +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1' disabled>"
                 +"<label id = 'onesize' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>onesize<br><span id='tag1' value='' style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                 +"</div>");
               }
               fetch("/api/purchase/size/price",{
      
                method: "POST",
                headers: {
                  "Content-Type":"application/json; charset=utf-8"
          
                },
                body: JSON.stringify({
                  "id" : id,
                
                })
          
              })
                .then((res) => res.json())
                .then(json => {
                 console.log(json.data[0].sale_price)
                 const element = document.getElementById('tag1');
                 let convertpricetext = convertPrice(json.data[0].sale_price);
                 $("#tag1").text(convertpricetext);
                 $("#tag-radio-1").attr("value",json.data[0].sale_price)
                 console.log(convertpricetext)
                })

                $('#tag-radio-1').on('click', () => { 
                  $('#selectsize').text('onesize');
                  $('#selectprice').text(convertPrice($('#tag-radio-1').val()));
              })  
                
           })
          

          
 
   }


   //-----------------------------------------------향수--------------------------------------------------------------------------------------------

   else if(json.data[0].categorydetail == "향수")
   {
       fetch("/api/purchase/perfume",{
   
         method: "POST",
         headers: {
           "Content-Type":"application/json; charset=utf-8"
   
         },
         body: JSON.stringify({
           "id" : id,
         
         })
   
       })
         .then((res) => res.json())
         .then(json => {
           console.log(json.data[0].size_30ml)
          
          
             $('#sizeRB').append("<div id='row1' class='row' style='margin-bottom:10px;'>"
             +"</div>"
             );
             
             
             if(json.data[0].size_30ml > 0)
             {
               $('#row1').append("<div class='col-md-4 col-6'>"
               +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1'>"
               +"<label id = 'size_30ml' tabindex='0' for='tag-radio-1' name='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; ' onclick=>30ml<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
               +"</div>");
             
             }
             else{
               $('#row1').append("<div class='col-md-4 col-6'>"
               +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1' disabled>"
               +"<label id = 'size_30ml' tabindex='0' for='tag-radio-1' name='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>30ml<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
               +"</div>");
             }
             if(json.data[0].size_100ml > 0)
             {
               $('#row1').append("<div class='col-md-4 col-6'>"
               +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-2' value = '2' onclick=handleChange(this)>"
               +"<label id = 'size_100ml' tabindex='0' for='tag-radio-2' name='tag-radio-2' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>100ml<br><span id = 'tag1'style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
               +"</div>");
             
             }
             else{
               $('#row1').append("<div class='col-md-4 col-6'>"
               +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-2' value = '2' disabled>"
               +"<label id = 'size_100ml' tabindex='0' for='tag-radio-2' name='tag-radio-2' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>100ml<br><span id = 'tag2' style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
               +"</div>");
             }

             fetch("/api/purchase/size/price",{
      
              method: "POST",
              headers: {
                "Content-Type":"application/json; charset=utf-8"
        
              },
              body: JSON.stringify({
                "id" : id,
              
              })
        
            })
              .then((res) => res.json())
              .then(json => {
                json.data.map((temp,i)=>{
                  console.log(temp.SALE_SIZE)
                  console.log(temp.sale_price)
                  let convertpricetext = convertPrice(temp.sale_price);
                 
                  if(temp.SALE_SIZE == "size_30ml"){
                    $("#tag1").text(convertpricetext);
                     $("#tag-radio-1").attr("value",temp.sale_price)
                  }
                  else if(temp.SALE_SIZE == "size_100ml"){
                    $("#tag2").text(convertpricetext);
                    $("#tag-radio-2").attr("value",temp.sale_price)
                  }
                 
            })
            $('#tag-radio-1').on('click', () => { 
              $('#selectsize').text('size_30ml');
              $('#selectprice').text(convertPrice($('#tag-radio-1').val()));
            })  
            $('#tag-radio-2').on('click', () => { 
              $('#selectsize').text('size_100ml');
              $('#selectprice').text(convertPrice($('#tag-radio-2').val()));
            })  

          })}
            
)}

 //----------------------------------------------- 신발 ------------------------------------------------------------------------------------

 else if(json.data[0].categorydetail == "신발")
      {
          fetch("/api/purchase/shoe",{
      
            method: "POST",
            headers: {
              "Content-Type":"application/json; charset=utf-8"
      
            },
            body: JSON.stringify({
              "id" : id,
            
            })
      
          })
            .then((res) => res.json())
            .then(json => {
              console.log(json.data[0].S)
             
             
                $('#sizeRB').append("<div id='row1' class='row' style='margin-bottom:10px;'>"
                +"</div>"
                );
                $('#sizeRB').append("<div id='row2' class='row' style='margin-bottom:10px;'>"
                +"</div>"
                );
                $('#sizeRB').append("<div id='row3' class='row' style='margin-bottom:10px;'>"
                +"</div>"
                );
                $('#sizeRB').append("<div id='row4' class='row' style='margin-bottom:10px;'>"
                +"</div>"
                );
                $('#sizeRB').append("<div id='row5' class='row' style='margin-bottom:10px;'>"
                +"</div>"
                );
                $('#sizeRB').append("<div id='row6' class='row' style='margin-bottom:10px;'>"
                +"</div>"
                );
                if(json.data[0].size_225 > 0)
                {
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1' >"
                  +"<label id = 'size_225' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>225<br><span id ='tag1' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1' disabled>"
                  +"<label id = 'size_225' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>225<br><span id ='tag1' style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }

                if(json.data[0].size_230 > 0)
                {
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-2' value = '2' >"
                  +"<label id = 'size_230' tabindex='0' for='tag-radio-2' name='tag-radio-2' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>230<br><span id ='tag2' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-2' value = '2' disabled>"
                  +"<label id = 'size_230' tabindex='0' for='tag-radio-2' name='tag-radio-2' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>230<br><span id ='tag2' style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_235 > 0)
                {
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-3' value = '3' >"
                  +"<label id = 'size_235' tabindex='0' for='tag-radio-3' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>235<br><span id ='tag3'style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-3' value = '3' disabled>"
                  +"<label id = 'size_235' tabindex='0' for='tag-radio-3' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>235<br><span id ='tag3'style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_240 > 0)
                {
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-4' value = '4' >"
                  +"<label id = 'size_240' tabindex='0' for='tag-radio-4' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>240<br><span id ='tag4'style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-4' value = '4' disabled>"
                  +"<label id = 'size_240' tabindex='0' for='tag-radio-4' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>240<br><span id ='tag4'style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_245 > 0)
                {
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-5' value = '5' >"
                  +"<label id = 'size_245' tabindex='0' for='tag-radio-5' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>245<br><span id ='tag5' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-5' value = '5' disabled>"
                  +"<label id = 'size_245' tabindex='0' for='tag-radio-5' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>245<br><span id ='tag5'style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_250 > 0)
                {
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-6' value = '6' >"
                  +"<label id = 'size_250' tabindex='0' for='tag-radio-6' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>250<br><span id ='tag6'style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-6' value = '6' disabled>"
                  +"<label id = 'size_250' tabindex='0' for='tag-radio-6' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>250<br><span id ='tag6'style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_255 > 0)
                {
                  $('#row3').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-7' value = '7' >"
                  +"<label id = 'size_255' tabindex='0' for='tag-radio-7' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>255<br><span id ='tag7'style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row3').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-7' value = '7' disabled>"
                  +"<label id = 'size_255' tabindex='0' for='tag-radio-7' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>255<br><span id ='tag7'style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_260 > 0)
                {
                  $('#row3').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-8' value = '8' >"
                  +"<label id = 'size_260' tabindex='0' for='tag-radio-8' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>260<br><span id ='tag8'style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row3').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-8' value = '8' disabled>"
                  +"<label id = 'size_260' tabindex='0' for='tag-radio-8' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>260<br><span id ='tag8'style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_265 > 0)
                {
                  $('#row3').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-9' value = '9' >"
                  +"<label id = 'size_265' tabindex='0' for='tag-radio-9' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>265<br><span id ='tag9'style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row3').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-9' value = '9' disabled>"
                  +"<label id = 'size_265' tabindex='0' for='tag-radio-9' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>265<br><span id ='tag9'style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_270 > 0)
                {
                  $('#row4').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-10' value = '10' >"
                  +"<label id = 'size_270' tabindex='0' for='tag-radio-10' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>270<br><span id ='tag10' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row4').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '10' disabled>"
                  +"<label id = 'size_270' tabindex='0' for='tag-radio-10' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>270<br><span id ='tag10' style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_275 > 0)
                {
                  $('#row4').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-11' value = '11' >"
                  +"<label id = 'size_275' tabindex='0' for='tag-radio-11' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>275<br><span id ='tag11' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row4').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-11' value = '11' disabled>"
                  +"<label id = 'size_275' tabindex='0' for='tag-radio-11' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>275<br><span id ='tag11' style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_280 > 0)
                {
                  $('#row4').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-12' value = '12' >"
                  +"<label id = 'size_280' tabindex='0' for='tag-radio-12' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>280<br><span id ='tag12' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row4').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-12' value = '12' disabled>"
                  +"<label id = 'size_280' tabindex='0' for='tag-radio-12' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>280<br><span id ='tag12' style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_285 > 0)
                {
                  $('#row5').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-13' value = '13' >"
                  +"<label id = 'size_285' tabindex='0' for='tag-radio-13' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>285<br><span id ='tag13' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row5').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-13' value = '13' disabled>"
                  +"<label id = 'size_285' tabindex='0' for='tag-radio-13' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>285<br><span id ='tag13' style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_290 > 0)
                {
                  $('#row5').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-14' value = '14' >"
                  +"<label id = 'size_290' tabindex='0' for='tag-radio-14' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>290<br><span id ='tag14' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row5').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-14' value = '14' disabled>"
                  +"<label id = 'size_290' tabindex='0' for='tag-radio-14' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>290<br><span id ='tag14' style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_295 > 0)
                {
                  $('#row5').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-15' value = '15' >"
                  +"<label id = 'size_295' tabindex='0' for='tag-radio-15' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>295<br><span id ='tag15' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row5').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-15' value = '15' disabled>"
                  +"<label id = 'size_295' tabindex='0' for='tag-radio-15' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>295<br><span id ='tag15' style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_300 > 0)
                {
                  $('#row6').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-15' value = '16' >"
                  +"<label id = 'size_300' tabindex='0' for='tag-radio-15' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>300<br><span id ='tag16' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row6').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-16' value = '16' disabled>"
                  +"<label id = 'size_300' tabindex='0' for='tag-radio-16' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>300<br><span id ='tag16' style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                fetch("/api/purchase/size/price",{
      
                  method: "POST",
                  headers: {
                    "Content-Type":"application/json; charset=utf-8"
            
                  },
                  body: JSON.stringify({
                    "id" : id,
                  
                  })
            
                })
                  .then((res) => res.json())
                  .then(json => {
                    json.data.map((temp,i)=>{
                      console.log(temp.SALE_SIZE)
                      console.log(temp.sale_price)
                      let convertpricetext = convertPrice(temp.sale_price);
                     
                      if(temp.SALE_SIZE == "size_225"){
                        $("#tag1").text(convertpricetext);
                         $("#tag-radio-1").attr("value",temp.sale_price)
                         $('#tag-radio-1').on('click', () => { 
                          $('#selectsize').text('size_225');
                          $('#selectprice').text(convertPrice($('#tag-radio-1').val()));
                        }) 
                      }
                      else if(temp.SALE_SIZE == "size_230"){
                        $("#tag2").text(convertpricetext);
                        $("#tag-radio-2").attr("value",temp.sale_price)
                        $('#tag-radio-2').on('click', () => { 
                          $('#selectsize').text('size_230');
                          $('#selectprice').text(convertPrice($('#tag-radio-2').val()));
                        }) 
                      }
                      if(temp.SALE_SIZE == "size_235"){
                        $("#tag3").text(convertpricetext);
                         $("#tag-radio-3").attr("value",temp.sale_price)
                         $('#tag-radio-3').on('click', () => { 
                          $('#selectsize').text('size_235');
                          $('#selectprice').text(convertPrice($('#tag-radio-3').val()));
                        }) 
                      }
                      else if(temp.SALE_SIZE == "size_240"){
                        $("#tag4").text(convertpricetext);
                        $("#tag-radio-4").attr("value",temp.sale_price)
                        $('#tag-radio-4').on('click', () => { 
                          $('#selectsize').text('size_240');
                          $('#selectprice').text(convertPrice($('#tag-radio-4').val()));
                        }) 
                      }
                      if(temp.SALE_SIZE == "size_245"){
                        $("#tag5").text(convertpricetext);
                         $("#tag-radio-5").attr("value",temp.sale_price)
                         $('#tag-radio-5').on('click', () => { 
                          $('#selectsize').text('size_245');
                          $('#selectprice').text(convertPrice($('#tag-radio-5').val()));
                        }) 
                      }
                      else if(temp.SALE_SIZE == "size_250"){
                        $("#tag6").text(convertpricetext);
                        $("#tag-radio-6").attr("value",temp.sale_price)
                        $('#tag-radio-6').on('click', () => { 
                          $('#selectsize').text('size_250');
                          $('#selectprice').text(convertPrice($('#tag-radio-6').val()));
                        }) 
                      }
                      if(temp.SALE_SIZE == "size_255"){
                        $("#tag7").text(convertpricetext);
                         $("#tag-radio-7").attr("value",temp.sale_price)
                         $('#tag-radio-7').on('click', () => { 
                          $('#selectsize').text('size_255');
                          $('#selectprice').text(convertPrice($('#tag-radio-7').val()));
                        }) 
                      }
                      else if(temp.SALE_SIZE == "size_260"){
                        $("#tag8").text(convertpricetext);
                        $("#tag-radio-8").attr("value",temp.sale_price)
                        $('#tag-radio-8').on('click', () => { 
                          $('#selectsize').text('size_260');
                          $('#selectprice').text(convertPrice($('#tag-radio-8').val()));
                        }) 
                      }
                      if(temp.SALE_SIZE == "size_265"){
                        $("#tag9").text(convertpricetext);
                         $("#tag-radio-9").attr("value",temp.sale_price)
                         $('#tag-radio-9').on('click', () => { 
                          $('#selectsize').text('size_265');
                          $('#selectprice').text(convertPrice($('#tag-radio-9').val()));
                        }) 
                      }
                      else if(temp.SALE_SIZE == "size_270"){
                        $("#tag10").text(convertpricetext);
                        $("#tag-radio-10").attr("value",temp.sale_price)
                        $('#tag-radio-10').on('click', () => { 
                          $('#selectsize').text('size_270');
                          $('#selectprice').text(convertPrice($('#tag-radio-10').val()));
                        }) 
                      }
                      if(temp.SALE_SIZE == "size_275"){
                        $("#tag11").text(convertpricetext);
                         $("#tag-radio-11").attr("value",temp.sale_price)
                         $('#tag-radio-11').on('click', () => { 
                          $('#selectsize').text('size_275');
                          $('#selectprice').text(convertPrice($('#tag-radio-11').val()));
                        }) 
                      }
                      else if(temp.SALE_SIZE == "size_280"){
                        $("#tag12").text(convertpricetext);
                        $("#tag-radio-12").attr("value",temp.sale_price)
                        $('#tag-radio-12').on('click', () => { 
                          $('#selectsize').text('size_280');
                          $('#selectprice').text(convertPrice($('#tag-radio-12').val()));
                        }) 
                      }
                      if(temp.SALE_SIZE == "size_285"){
                        $("#tag13").text(convertpricetext);
                         $("#tag-radio-13").attr("value",temp.sale_price)
                         $('#tag-radio-13').on('click', () => { 
                          $('#selectsize').text('size_285');
                          $('#selectprice').text(convertPrice($('#tag-radio-13').val()));
                        }) 
                      }
                      else if(temp.SALE_SIZE == "size_290"){
                        $("#tag14").text(convertpricetext);
                        $("#tag-radio-14").attr("value",temp.sale_price)
                        $('#tag-radio-14').on('click', () => { 
                          $('#selectsize').text('size_290');
                          $('#selectprice').text(convertPrice($('#tag-radio-14').val()));
                        }) 
                      }
                      if(temp.SALE_SIZE == "size_295"){
                        $("#tag15").text(convertpricetext);
                         $("#tag-radio-15").attr("value",temp.sale_price)
                         $('#tag-radio-15').on('click', () => { 
                          $('#selectsize').text('size_295');
                          $('#selectprice').text(convertPrice($('#tag-radio-15').val()));
                        }) 
                      }
                      else if(temp.SALE_SIZE == "size_300"){
                        $("#tag16").text(convertpricetext);
                        $("#tag-radio-16").attr("value",temp.sale_price)
                        $('#tag-radio-16').on('click', () => { 
                          $('#selectsize').text('size_300');
                          $('#selectprice').text(convertPrice($('#tag-radio-16').val()));
                        }) 
                        
                      }
                       
                      
                })
    
              })

               
            })

    }
    })}



// ----------------- 판매 modal show function--------------------------------------------------------------------------------------------------------------------------------------------
const SalehandleShow = () => {
  

  setSaleShow(true);
  fetch("/api/purchase",{
    method: "POST",
    headers: {
      "Content-Type":"application/json; charset=utf-8"
    },
    body: JSON.stringify({
      "id" : id,
    })
  })
    .then((res) => res.json())
    .then(json => {

      console.log(json.data[0].categorydetail);



      //-----------------------------------------------------3사이즈------------------------------------------------------------------------------------

      if(json.data[0].categorydetail == "3사이즈")
      {
        console.log(1);
          fetch("/api/purchase/threesize",{
      
            method: "POST",
            headers: {
              "Content-Type":"application/json; charset=utf-8"
      
            },
            body: JSON.stringify({
              "id" : id,
            
            })
      
          })
            .then((res) => res.json())
            .then(json => {

             
             
                $('#sizeRB').append("<div id='row1' class='row' style='margin-bottom:10px;'>"
                +"</div>"
                );
                $('#sizeRB').append("<div id='row2' class='row' style='margin-bottom:10px;'>"
                +"</div>"
                );
                
                
                if(json.data[0].XS > 0)
                {
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1' >"
                  +"<label id = 'XS' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>XS<br><span id='tag1' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1'>"
                  +"<label id = 'XS' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>XS<br><span id='tag1' style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-1").attr("value","0")
                }

                if(json.data[0].S > 0)
                {
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-2' value = '2' >"
                  +"<label id = 'S' tabindex='0' for='tag-radio-2' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>S<br><span id='tag2' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else
                {
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-2' value = '2' >"
                  +"<label id = 'S' tabindex='0' for='tag-radio-2' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>S<br><span id='tag2' style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-2").attr("value","0")
                }

                if(json.data[0].M > 0)
                {
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-3' value = '3' >"
                  +"<label id = 'M' tabindex='0' for='tag-radio-3' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>M<br><span id='tag3' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else
                {
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-3' value = '3' >"
                  +"<label id = 'M' tabindex='0' for='tag-radio-3' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>M<br><span id='tag3' style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-3").attr("value","0")
                
                }
                if(json.data[0].L > 0)
                {
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-4' value = '4' >"
                  +"<label id = 'L' tabindex='0' for='tag-radio-4' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>L<br><span id='tag4' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-4' value = '4'>"
                  +"<label id = 'L' tabindex='0' for='tag-radio-4' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>L<br><span id='tag4' style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-4").attr("value","0")
                }
                if(json.data[0].XL > 0)
                {
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-5' value = '5' >"
                  +"<label id = 'XL' tabindex='0' for='tag-radio-5' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>XL<br><span id='tag5' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-5' value = '5' >"
                  +"<label id = 'XL' tabindex='0' for='tag-radio-5' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>XL<br><span id='tag5' style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-5").attr("value","0")
                }
                fetch("/api/purchase/size/price",{
      
                  method: "POST",
                  headers: {
                    "Content-Type":"application/json; charset=utf-8"
            
                  },
                  body: JSON.stringify({
                    "id" : id,
                  
                  })
            
                })
                  .then((res) => res.json())
                  .then(json => {
                   json.data.map((temp,i)=>{
                    console.log(temp.SALE_SIZE)
                    console.log(temp.sale_price)
                    let convertpricetext = convertPrice(temp.sale_price);
                    if(temp.SALE_SIZE == "XS"){
                       $("#tag1").text(convertpricetext);
                       $("#tag-radio-1").attr("value",temp.sale_price)
                    }
                    else if(temp.SALE_SIZE == "S"){
                      $("#tag2").text(convertpricetext);
                       $("#tag-radio-2").attr("value",temp.sale_price)
                    }
                    else if(temp.SALE_SIZE == "M"){
                      $("#tag3").text(convertpricetext);
                      $("#tag-radio-3").attr("value",temp.sale_price)
                    }
                    else if(temp.SALE_SIZE == "L"){
                      $("#tag4").text(convertpricetext);
                      $("#tag-radio-4").attr("value",temp.sale_price)
                    }
                    else if(temp.SALE_SIZE == "XL"){
                      $("#tag5").text(convertpricetext);
                      $("#tag-radio-5").attr("value",temp.sale_price)
                    }
                   })
                   
                   $('#tag-radio-1').on('click', () => { 
                    $('#selectsize').text('XS');
                    $('#selectprice').text(convertPrice($('#tag-radio-1').val()));
                  })  
                  $('#tag-radio-2').on('click', () => { 
                    $('#selectsize').text('S');
                    $('#selectprice').text(convertPrice($('#tag-radio-2').val()));
                  })  
                  $('#tag-radio-3').on('click', () => { 
                    $('#selectsize').text('M');
                    $('#selectprice').text(convertPrice($('#tag-radio-3').val()));
                  })  
                  $('#tag-radio-4').on('click', () => { 
                    $('#selectsize').text('L');
                    $('#selectprice').text(convertPrice($('#tag-radio-4').val()));
                  })  
                  $('#tag-radio-5').on('click', () => { 
                    $('#selectsize').text('XL');
                    $('#selectprice').text(convertPrice($('#tag-radio-5').val()));
                  })  
                 
                  })

            })

    }

     //-----------------------------------------------원사이즈--------------------------------------------------------------------------------------

     else if(json.data[0].categorydetail == 'onesize')
     {

         fetch("/api/purchase/onesize",{
     
           method: "POST",
           headers: {
             "Content-Type":"application/json; charset=utf-8"
     
           },
           body: JSON.stringify({
             "id" : id,
           
           })
     
         })
           .then((res) => res.json())
           .then(json => {

            
            
               $('#sizeRB').append("<div id='row1' class='row' style='margin-bottom:10px;'>"
               +"</div>"
               );
              
               
               if(json.data[0].onesize > 0)
               {
                 $('#row1').append("<div class='col-md-4 col-6'>"
                 +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1' >"
                 +"<label id = 'onesize' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>onesize<br><span id='tag1' value=''  style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                 +"</div>");
                 
               
               }
               else{
                 $('#row1').append("<div class='col-md-4 col-6'>"
                 +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1' >"
                 +"<label id = 'onesize' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>onesize<br><span id='tag1' value='' style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                 +"</div>");
                 $("#tag-radio-1").attr("value","0")
               }
               fetch("/api/purchase/size/price",{
      
                method: "POST",
                headers: {
                  "Content-Type":"application/json; charset=utf-8"
          
                },
                body: JSON.stringify({
                  "id" : id,
                
                })
          
              })
                .then((res) => res.json())
                .then(json => {
                 console.log(json.data[0].sale_price)
                 const element = document.getElementById('tag1');
                 let convertpricetext = convertPrice(json.data[0].sale_price);
                 $("#tag1").text(convertpricetext);
                 $("#tag-radio-1").attr("value",json.data[0].sale_price)
                 console.log(convertpricetext)
                })

                $('#tag-radio-1').on('click', () => { 
                  $('#selectsize').text('onesize');
                  $('#selectprice').text(convertPrice($('#tag-radio-1').val()));
              })  
                
           })
          

   }

   //-----------------------------------------------향수-----------------------------------------------------------------------------------------

   else if(json.data[0].categorydetail == "향수")
   {
       fetch("/api/purchase/perfume",{
   
         method: "POST",
         headers: {
           "Content-Type":"application/json; charset=utf-8"
   
         },
         body: JSON.stringify({
           "id" : id,
         
         })
   
       })
         .then((res) => res.json())
         .then(json => {

          
          
             $('#sizeRB').append("<div id='row1' class='row' style='margin-bottom:10px;'>"
             +"</div>"
             );
             
             
             if(json.data[0].size_30ml > 0)
             {
               $('#row1').append("<div class='col-md-4 col-6'>"
               +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1'>"
               +"<label id = 'size_30ml' tabindex='0' for='tag-radio-1' name='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; ' onclick=>30ml<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
               +"</div>");
             
             }
             else{
               $('#row1').append("<div class='col-md-4 col-6'>"
               +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1' >"
               +"<label id = 'size_30ml' tabindex='0' for='tag-radio-1' name='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>30ml<br><span style='font-size:22px; color:orange; font:bold;'>-</span></label>"
               +"</div>");
               $("#tag-radio-1").attr("value","0")
             }
             if(json.data[0].size_100ml > 0)
             {
               $('#row1').append("<div class='col-md-4 col-6'>"
               +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-2' value = '2' onclick=handleChange(this)>"
               +"<label id = 'size_100ml' tabindex='0' for='tag-radio-2' name='tag-radio-2' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>100ml<br><span id = 'tag1'style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
               +"</div>");
             
             }
             else{
               $('#row1').append("<div class='col-md-4 col-6'>"
               +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-2' value = '2' >"
               +"<label id = 'size_100ml' tabindex='0' for='tag-radio-2' name='tag-radio-2' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>100ml<br><span id = 'tag2' style='font-size:22px; color:orange; font:bold;'>-</span></label>"
               +"</div>");
               $("#tag-radio-2").attr("value","0")
             }

             fetch("/api/purchase/size/price",{
      
              method: "POST",
              headers: {
                "Content-Type":"application/json; charset=utf-8"
        
              },
              body: JSON.stringify({
                "id" : id,
              
              })
        
            })
              .then((res) => res.json())
              .then(json => {
                json.data.map((temp,i)=>{

                  let convertpricetext = convertPrice(temp.sale_price);
                 
                  if(temp.SALE_SIZE == "size_30ml"){
                    $("#tag1").text(convertpricetext);
                     $("#tag-radio-1").attr("value",temp.sale_price)
                  }
                  else if(temp.SALE_SIZE == "size_100ml"){
                    $("#tag2").text(convertpricetext);
                    $("#tag-radio-2").attr("value",temp.sale_price)
                  }
                 
            })
            $('#tag-radio-1').on('click', () => { 
              $('#selectsize').text('size_30ml');
              $('#selectprice').text(convertPrice($('#tag-radio-1').val()));
            })  
            $('#tag-radio-2').on('click', () => { 
              $('#selectsize').text('size_100ml');
              $('#selectprice').text(convertPrice($('#tag-radio-2').val()));
            })  

          })}
            
)}

         
          
         

         //  const element = document.getElementById('sizeRB');
       //  element.innerText += '<div>InnerText<div>';

 


 //----------------------------------------------- 신발 ------------------------------------------------------------------------------------

 else if(json.data[0].categorydetail == "신발")
      {
          fetch("/api/purchase/shoe",{
      
            method: "POST",
            headers: {
              "Content-Type":"application/json; charset=utf-8"
      
            },
            body: JSON.stringify({
              "id" : id,
            
            })
      
          })
            .then((res) => res.json())
            .then(json => {
             
             
                $('#sizeRB').append("<div id='row1' class='row' style='margin-bottom:10px;'>"
                +"</div>"
                );
                $('#sizeRB').append("<div id='row2' class='row' style='margin-bottom:10px;'>"
                +"</div>"
                );
                $('#sizeRB').append("<div id='row3' class='row' style='margin-bottom:10px;'>"
                +"</div>"
                );
                $('#sizeRB').append("<div id='row4' class='row' style='margin-bottom:10px;'>"
                +"</div>"
                );
                $('#sizeRB').append("<div id='row5' class='row' style='margin-bottom:10px;'>"
                +"</div>"
                );
                $('#sizeRB').append("<div id='row6' class='row' style='margin-bottom:10px;'>"
                +"</div>"
                );
                if(json.data[0].size_225 > 0)
                {
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1' >"
                  +"<label id = 'size_225' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>225<br><span id ='tag1' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1' >"
                  +"<label id = 'size_225' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>225<br><span id ='tag1' style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-1").attr("value","0");
                }

                if(json.data[0].size_230 > 0)
                {
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-2' value = '2' >"
                  +"<label id = 'size_230' tabindex='0' for='tag-radio-2' name='tag-radio-2' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>230<br><span id ='tag2' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-2' value = '2' >"
                  +"<label id = 'size_230' tabindex='0' for='tag-radio-2' name='tag-radio-2' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>230<br><span id ='tag2' style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-2").attr("value","0");
                }
                if(json.data[0].size_235 > 0)
                {
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-3' value = '3' >"
                  +"<label id = 'size_235' tabindex='0' for='tag-radio-3' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>235<br><span id ='tag3'style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-3' value = '3'>"
                  +"<label id = 'size_235' tabindex='0' for='tag-radio-3' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>235<br><span id ='tag3'style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-3").attr("value","0");
                }
                if(json.data[0].size_240 > 0)
                {
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-4' value = '4' >"
                  +"<label id = 'size_240' tabindex='0' for='tag-radio-4' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>240<br><span id ='tag4'style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-4' value = '4' >"
                  +"<label id = 'size_240' tabindex='0' for='tag-radio-4' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>240<br><span id ='tag4'style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-4").attr("value","0");
                }
                if(json.data[0].size_245 > 0)
                {
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-5' value = '5' >"
                  +"<label id = 'size_245' tabindex='0' for='tag-radio-5' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>245<br><span id ='tag5' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-5' value = '5' >"
                  +"<label id = 'size_245' tabindex='0' for='tag-radio-5' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>245<br><span id ='tag5'style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-5").attr("value","0");
                }
                if(json.data[0].size_250 > 0)
                {
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-6' value = '6' >"
                  +"<label id = 'size_250' tabindex='0' for='tag-radio-6' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>250<br><span id ='tag6'style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-6' value = '6' >"
                  +"<label id = 'size_250' tabindex='0' for='tag-radio-6' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>250<br><span id ='tag6'style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-6").attr("value","0");
                }
                if(json.data[0].size_255 > 0)
                {
                  $('#row3').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-7' value = '7' >"
                  +"<label id = 'size_255' tabindex='0' for='tag-radio-7' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>255<br><span id ='tag7'style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row3').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-7' value = '7' >"
                  +"<label id = 'size_255' tabindex='0' for='tag-radio-7' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>255<br><span id ='tag7'style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-7").attr("value","0");
                }
                if(json.data[0].size_260 > 0)
                {
                  $('#row3').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-8' value = '8' >"
                  +"<label id = 'size_260' tabindex='0' for='tag-radio-8' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>260<br><span id ='tag8'style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row3').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-8' value = '8' >"
                  +"<label id = 'size_260' tabindex='0' for='tag-radio-8' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>260<br><span id ='tag8'style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-8").attr("value","0");
                }
                if(json.data[0].size_265 > 0)
                {
                  $('#row3').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-9' value = '9' >"
                  +"<label id = 'size_265' tabindex='0' for='tag-radio-9' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>265<br><span id ='tag9'style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row3').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-9' value = '9' >"
                  +"<label id = 'size_265' tabindex='0' for='tag-radio-9' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>265<br><span id ='tag9'style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-9").attr("value","0");
                }
                if(json.data[0].size_270 > 0)
                {
                  $('#row4').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-10' value = '10' >"
                  +"<label id = 'size_270' tabindex='0' for='tag-radio-10' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>270<br><span id ='tag10' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row4').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-10' value = '10' >"
                  +"<label id = 'size_270' tabindex='0' for='tag-radio-10' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>270<br><span id ='tag10' style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-10").attr("value","0");
                }
                if(json.data[0].size_275 > 0)
                {
                  $('#row4').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-11' value = '11' >"
                  +"<label id = 'size_275' tabindex='0' for='tag-radio-11' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>275<br><span id ='tag11' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row4').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-11' value = '11' >"
                  +"<label id = 'size_275' tabindex='0' for='tag-radio-11' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>275<br><span id ='tag11' style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-11").attr("value","0");
                }
                if(json.data[0].size_280 > 0)
                {
                  $('#row4').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-12' value = '12' >"
                  +"<label id = 'size_280' tabindex='0' for='tag-radio-12' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>280<br><span id ='tag12' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row4').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-12' value = '12' >"
                  +"<label id = 'size_280' tabindex='0' for='tag-radio-12' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>280<br><span id ='tag12' style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-12").attr("value","0");
                }
                if(json.data[0].size_285 > 0)
                {
                  $('#row5').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-13' value = '13' >"
                  +"<label id = 'size_285' tabindex='0' for='tag-radio-13' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>285<br><span id ='tag13' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row5').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-13' value = '13' >"
                  +"<label id = 'size_285' tabindex='0' for='tag-radio-13' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>285<br><span id ='tag13' style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-13").attr("value","0");
                }
                if(json.data[0].size_290 > 0)
                {
                  $('#row5').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-14' value = '14' >"
                  +"<label id = 'size_290' tabindex='0' for='tag-radio-14' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>290<br><span id ='tag14' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row5').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-14' value = '14' >"
                  +"<label id = 'size_290' tabindex='0' for='tag-radio-14' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>290<br><span id ='tag14' style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-14").attr("value","0");
                }
                if(json.data[0].size_295 > 0)
                {
                  $('#row5').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-15' value = '15' >"
                  +"<label id = 'size_295' tabindex='0' for='tag-radio-15' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>295<br><span id ='tag15' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row5').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-15' value = '15' >"
                  +"<label id = 'size_295' tabindex='0' for='tag-radio-15' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>295<br><span id ='tag15' style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-15").attr("value","0");
                }
                if(json.data[0].size_300 > 0)
                {
                  $('#row6').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-16' value = '16' >"
                  +"<label id = 'size_300' tabindex='0' for='tag-radio-16' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>300<br><span id ='tag16' style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row6').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-16' value = '16' >"
                  +"<label id = 'size_300' tabindex='0' for='tag-radio-16' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>300<br><span id ='tag16' style='font-size:22px; color:orange; font:bold;'>-</span></label>"
                  +"</div>");
                  $("#tag-radio-16").attr("value","0");
                }
                fetch("/api/purchase/size/price",{
      
                  method: "POST",
                  headers: {
                    "Content-Type":"application/json; charset=utf-8"
            
                  },
                  body: JSON.stringify({
                    "id" : id,
                  
                  })
            
                })
                  .then((res) => res.json())
                  .then(json => {
                    

                    $('#tag-radio-1').on('click', () => { 
                    $('#selectsize').text('size_225');
                    $('#selectprice').text(convertPrice($('#tag-radio-1').val()));})

                    $('#tag-radio-2').on('click', () => { 
                    $('#selectsize').text('size_230');
                    $('#selectprice').text(convertPrice($('#tag-radio-2').val()));})
                    
                    $('#tag-radio-3').on('click', () => { 
                    $('#selectsize').text('size_235');
                    $('#selectprice').text(convertPrice($('#tag-radio-3').val()));})
                    
                    $('#tag-radio-4').on('click', () => { 
                    $('#selectsize').text('size_240');
                    $('#selectprice').text(convertPrice($('#tag-radio-4').val()));})

                    $('#tag-radio-5').on('click', () => { 
                    $('#selectsize').text('size_245');
                    $('#selectprice').text(convertPrice($('#tag-radio-5').val()));})

                    $('#tag-radio-6').on('click', () => { 
                    $('#selectsize').text('size_250');
                    $('#selectprice').text(convertPrice($('#tag-radio-6').val()));})

                    $('#tag-radio-7').on('click', () => { 
                    $('#selectsize').text('size_255');
                    $('#selectprice').text(convertPrice($('#tag-radio-7').val()));})

                    $('#tag-radio-8').on('click', () => { 
                    $('#selectsize').text('size_260');
                    $('#selectprice').text(convertPrice($('#tag-radio-8').val()));})

                    $('#tag-radio-9').on('click', () => { 
                    $('#selectsize').text('size_265');
                    $('#selectprice').text(convertPrice($('#tag-radio-9').val()));})

                    $('#tag-radio-10').on('click', () => { 
                    $('#selectsize').text('size_270');
                    $('#selectprice').text(convertPrice($('#tag-radio-10').val()));})

                    $('#tag-radio-11').on('click', () => { 
                    $('#selectsize').text('size_275');
                    $('#selectprice').text(convertPrice($('#tag-radio-11').val()));})

                    $('#tag-radio-12').on('click', () => { 
                    $('#selectsize').text('size_280');
                    $('#selectprice').text(convertPrice($('#tag-radio-12').val()));})

                    $('#tag-radio-13').on('click', () => { 
                    $('#selectsize').text('size_285');
                    $('#selectprice').text(convertPrice($('#tag-radio-13').val()));})

                    $('#tag-radio-14').on('click', () => { 
                    $('#selectsize').text('size_290');
                    $('#selectprice').text(convertPrice($('#tag-radio-14').val()));})

                    $('#tag-radio-15').on('click', () => { 
                    $('#selectsize').text('size_295');
                    $('#selectprice').text(convertPrice($('#tag-radio-15').val()));})

                    $('#tag-radio-16').on('click', () => { 
                    $('#selectsize').text('size_300');
                    $('#selectprice').text(convertPrice($('#tag-radio-16').val()));})

                    json.data.map((temp,i)=>{
                      let convertpricetext = convertPrice(temp.sale_price);
                      if(temp.SALE_SIZE == "size_225"){ 
                         $("#tag-radio-1").attr("value",temp.sale_price)
                         $("#tag1").text(convertpricetext);
                      }
                      
                      else if(temp.SALE_SIZE == "size_230"){
                        $("#tag2").text(convertpricetext);
                         $("#tag-radio-2").attr("value",temp.sale_price)
                      }
                      else if(temp.SALE_SIZE == "size_235"){
                        $("#tag3").text(convertpricetext);
                         $("#tag-radio-3").attr("value",temp.sale_price)
                       
                      }
                      else if(temp.SALE_SIZE == "size_240"){
                        $("#tag4").text(convertpricetext);
                        $("#tag-radio-4").attr("value",temp.sale_price)
                        
                      }
                      else if(temp.SALE_SIZE == "size_245"){
                        $("#tag5").text(convertpricetext);
                         $("#tag-radio-5").attr("value",temp.sale_price)
                        
                      }
                      else if(temp.SALE_SIZE == "size_250"){
                        $("#tag6").text(convertpricetext);
                        $("#tag-radio-6").attr("value",temp.sale_price)
                      
                      }
                      else if(temp.SALE_SIZE == "size_255"){
                        $("#tag7").text(convertpricetext);
                         $("#tag-radio-7").attr("value",temp.sale_price)
                        
                      }
                      else if(temp.SALE_SIZE == "size_260"){
                        $("#tag8").text(convertpricetext);
                        $("#tag-radio-8").attr("value",temp.sale_price)
                     
                      }
                      else if(temp.SALE_SIZE == "size_265"){
                        $("#tag9").text(convertpricetext);
                         $("#tag-radio-9").attr("value",temp.sale_price)
                       
                      }
                      else if(temp.SALE_SIZE == "size_270"){
                        $("#tag10").text(convertpricetext);
                        $("#tag-radio-10").attr("value",temp.sale_price)
                       
                      }
                      else if(temp.SALE_SIZE == "size_275"){
                        $("#tag11").text(convertpricetext);
                         $("#tag-radio-11").attr("value",temp.sale_price)
                       
                      }
                      else if(temp.SALE_SIZE == "size_280"){
                        $("#tag12").text(convertpricetext);
                        $("#tag-radio-12").attr("value",temp.sale_price)   
                      }
                      else if(temp.SALE_SIZE == "size_285"){
                        $("#tag13").text(convertpricetext);
                         $("#tag-radio-13").attr("value",temp.sale_price) 
                      }
                      else if(temp.SALE_SIZE == "size_290"){
                        $("#tag14").text(convertpricetext);
                        $("#tag-radio-14").attr("value",temp.sale_price)
                      }
                      else if(temp.SALE_SIZE == "size_295"){
                        $("#tag15").text(convertpricetext);
                         $("#tag-radio-15").attr("value",temp.sale_price)
                      }
                      else if(temp.SALE_SIZE == "size_300"){
                        $("#tag16").text(convertpricetext);
                        $("#tag-radio-16").attr("value",temp.sale_price)
                      }
                       
                      
                })
    
              })

               
            })

    }

    })}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------






  //갯수 증감 함수
  const handleQuantity = (type) => {
    if (type === "plus") setCount(count + 1);
    else if (type === "minus") {
      if (count < 2) return;
      setCount(count - 1);
      return;
    }
  }

  useEffect(() => {
    // axios.get("/data/products.json").then((data) => {
    //   setProduct(data.data.products.find((product) => product.id === parseInt(id)));
    fetch("/api/detail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        "productId": id,
      })
    })
      .then((res) => res.json())
      .then(data => {
        setProduct(data);
      });


    fetch("/api/sale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        "pid": id,
      })
    })
      .then((res) => res.json())
      .then(data => {
        setSale(data);
      });
  }, [id]);


  const currentTimer = () => {
    const date = new Date();
    const month = String(date.getMonth());
    const day = String(date.getDate());
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    setTimer(`${month}월 ${day}일 ${hours}:${minutes}:${seconds}`)
  }

const startTimer = () => {
  setInterval(currentTimer,1000);
}
startTimer();

  const handleCart = () => {
    //장바구니 추가 기능, 민약 상품아이디와 유저아이디로 조회했을 떄, 
    //1. 데이터가 있다면 해당 count를 이곳의 count로 변경,
    //2. 데이터가 없다면, id,count,userid를 가져가서 insert를 실행
    fetch("/api/cartinsert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        "CART_USERID": sessionStorage.getItem("loginId"),
        "CART_PRODUCTID": product.id,
        "CART_COUNT": count
      })
    })
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        console.log(data.user.username);

      });
  };

  const inputSale = (price, size) => {
    // SALE 추가 기능, 판매할 가격(price)과 size가 입력되면 
    // 현재 페이지의 product.id와 함께
    //현재 세션에 있는 id를 함께 가져와서 
    // insert(pid,userId,price,size)를 한다.
    console.log("price :" + price + " and size : " + size);
    fetch("/api/inputsale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        "SALE_USERID": sessionStorage.getItem("loginId"),
        "SALE_PRODUCTID": product.id,
        "SALE_PRICE": price,
        "SALE_SIZE": size,
      })
    })
      .then((res) => res.json())
      .then(data => {
        console.log(data);
      });
  }


  return (
    
    <>
    
      <main className={styles.main}>
        <section className={styles.product}>
          <div className={styles.product_img}>
            <img src={product.image} alt="product" />
          </div>
        </section>
        <section className={styles.product}>
          <div className={styles.product_info}>
            <p className={styles.seller_store}>{product.provider}</p>
            <p className={styles.product_name}>{product.name}</p>
            <span className={styles.price}>

              {convertPrice(product.price + "")}


              <span className={styles.unit}>원</span>
            </span>
          </div>

          <div className={styles.line}></div>
          <div className={styles.delivery}>
            <p>택배배송 / 무료배송</p>
          </div>

          <div className={styles.line}></div>

{/* --------------------------------------수량 UI--------------------------------------------------------------- */}
          {/* <div className={styles.amount}>
            <img
              className={styles.minus}
              src="/images/icon-minus-line.svg"
              alt="minus"
              onClick={() => handleQuantity("minus")}
            />

            <div className={styles.count}>
              <span>{count}</span>
            </div>

            <img
              className={styles.plus}
              src="/images/icon-plus-line.svg"
              alt="plus"
              onClick={() => handleQuantity("plus")}
            />
          </div> */}


{/* --------------------------------------총 금액 UI--------------------------------------------------------------- */}


          {/* <div className={styles.line}></div>

          <div className={styles.sum}>
            <div>
              <span className={styles.sum_price}>총 상품 금액</span>
            </div>

            <div className={styles.total_info}>
              <span className={styles.total}>
                총 수량 <span className={styles.total_count}>{count}개</span>
              </span>
              <span className={styles.total_price}>
                {convertPrice(product.price * count + "")}
                <span className={styles.total_unit}>원</span>
              </span>
            </div>
          </div> */}

          <div className={styles.btn}>
          <Button className={styles.btn_buy} onClick={PurchasehandleShow} id="purchasebtn">바로 구매</Button>
        {/* <Button className={styles.btn_buy} data-bs-toggle={"modal"} data-bs-target={"#exampleModal"} data-bs-whatever={"@mdo"}>바로 구매</Button> */}
        <Button variant="primary" className={styles.btn_modal} onClick={(e)=>{SalehandleShow(e)}}>
            판매
        </Button>



{/* ---------------------------------------------구매 버튼  modal------------------------------------------------- */}


        <Modal
          size = "lg"
          show={PurchaseShow}
          onHide={PurchasehandleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title ><span className={styles.header_text_title}>Purchase</span></Modal.Title>
          </Modal.Header>
          <Modal.Body>

           <Modal.Body className="show-grid">
              <Container id="sizeRB">
              
              </Container>
           </Modal.Body>
            
          </Modal.Body>
          <Modal.Footer>
                <div>
                <span className={styles.footer_text_title}>Size :&nbsp;&nbsp;</span>
                <span className={styles.footer_text_content} id="selectsize">&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className={styles.footer_text_title}>Price :&nbsp;&nbsp;</span>
                <span className={styles.footer_text_content} id="selectprice">&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;</span>
          </div>
          <Button href='/purchase/buy'variant="primary" className={styles.footer_purchase_btn}><span className={styles.footer_purchase_btn_text}>즉시 구매</span></Button>
          </Modal.Footer>
        </Modal>



{/* ---------------------------------------------판매 버튼  modal------------------------------------------------- */}


        <Modal
          size = "lg"
          show={SaleShow}
          onHide={SalehandleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title ><span className={styles.header_text_title}>Sale</span></Modal.Title>
          </Modal.Header>
          <Modal.Body>
      
           <Modal.Body className="show-grid">
              <Container id="sizeRB">
              
              </Container>
           </Modal.Body>
            
          </Modal.Body>
          <Modal.Footer>
                <div>
                <span className={styles.footer_text_title}>Size :&nbsp;&nbsp;</span>
                <span className={styles.footer_text_content} id="selectsize">&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className={styles.footer_text_title}>Lowest Price :&nbsp;&nbsp;</span>
                <span className={styles.footer_text_content} id="selectprice">&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;</span>
          </div>
            <Button variant="primary" className={styles.footer_sale_btn}><span className={styles.footer_sale_btn_text}>판매 등록</span></Button>
          </Modal.Footer>
        </Modal>

        {/* ---------------------------------------------장바구니 버튼  modal------------------------------------------------- */}


        <Modal
          size = "lg"
          show={CartShow}
          onHide={CarthandleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title ><span className={styles.header_text_title}>Cart</span></Modal.Title>
          </Modal.Header>
          <Modal.Body>
      
           <Modal.Body className="show-grid">
              <Container id="sizeRB">
              
              </Container>
           </Modal.Body>
            
          </Modal.Body>
          <Modal.Footer>
                <div>
                <span className={styles.footer_text_title}>Size :&nbsp;&nbsp;</span>
                <span className={styles.footer_text_content} id="selectsize">&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className={styles.footer_text_title}>Lowest Price :&nbsp;&nbsp;</span>
                <span className={styles.footer_text_content} id="selectprice">&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;</span>
          </div>
            <Button variant="primary" className={styles.footer_cart_btn}><span className={styles.footer_cart_btn_text}>상품 담기</span></Button>
          </Modal.Footer>
        </Modal>

        {/* ---------------------------------------------------------------------------------------------------- */}
            <Button className={styles.btn_cart} onClick={(e)=>{PurchasehandleShow(e)}} id="cartbtn"
              //handleCart();
              //window.location.reload();
            >
              장바구니</Button>
            {/* <Button className={styles.btn_cart} onClick={() => {
              inputSale(300000, "L");
            }}>
              테스트</Button> */}
          </div>
          <br/>
          <span className={styles.recent}>최근 거래 가격</span> <br/>
          <span className={styles.timer}>서버 시간 : {timer}</span>
          <table>
            <thead>
              <tr>
                <th>사이즈</th>
                <th>가격</th>
                <th>날짜</th>
              </tr>
            </thead>
          </table>
          {
            sale.sale && sale.sale.map((data) => {
              // if(!sale.sale){
              //   return 'no data';
              // }
              return <div>
                <table>
                  <tbody>
                    <tr>
                      <td>{data.SALE_SIZE}</td>
                      <td>{data.SALE_PRICE}</td>
                      <td>{data.SALE_DATE.substring(0, 10)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }
            )
          }
        </section>
      </main>
    </>
  );
};




// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import styles from "./detail.module.css";

// export const Detail = ({ cart, setCart, convertPrice }) => {
//   const { id } = useParams();
//   const [product, setProduct] = useState({});
//   const [count, setCount] = useState(1);

//   //갯수 증감 함수
//   const handleQuantity = (type) => {
//     if (type === "plus") setCount(count + 1);
//     else if (type === "minus") {
//       if (count < 2) return;
//       setCount(count - 1);
//       return;
//     }
//   }

//   useEffect(() => {
//     axios.get("/data/products.json").then((data) => {
//       setProduct(data.data.products.find((product) => product.id === parseInt(id)));
//     });
//   }, [id, product.price]);

//   //장바구니 물건 중복된 물건 수량만 갱신해서 업데이트
//   const setQuantity = (id, quantity) => {
//     const found = cart.filter((el) => el.id === id)[0];
//     const idx = cart.indexOf(found);
//     const cartItem = {
//       id: product.id,
//       name: product.name,
//       provider: product.provider,
//       image: product.image,
//       price: product.price,
//       category: product.category,
//       gender:product.gender,
//       quantity: quantity,
//     };
//     //처음부터, idx까지, cartItem, 그리고 끝까지
//     setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
//   }

//   const handleCart = () => {
//     const cartItem = {
//       id: product.id,
//       image: product.image,
//       name: product.name,
//       quantity: count,
//       price: product.price,
//       gender:product.gender,
//       provider: product.provider,
//     };
//     const found = cart.find((el) => el.id === cartItem.id);
//     //중복된 물건이 있다면? (found>0)
//     if (found) setQuantity(cartItem.id, found.quantity + count);
//     //수량만 변경해서 넣어준다.
//     else setCart([...cart, cartItem]);
//     //아니라면 그대로 장바구니에 넣어준다.
//   };


//   return (
//     <>
//       <main className={styles.main}>
//         <section className={styles.product}>
//           <div className={styles.product_img}>
//             <img src={product.image} alt="product" />
//           </div>
//         </section>
//         <section className={styles.product}>
//           <div className={styles.product_info}>
//             <p className={styles.seller_store}>{product.provider}</p>
//             <p className={styles.product_name}>{product.name}</p>
//             <span className={styles.price}>

//               {convertPrice(product.price + "")}


//               <span className={styles.unit}>원</span>
//             </span>
//           </div>

//           <div className={styles.delivery}>
//             <p>택배배송 / 무료배송</p>
//           </div>

//           <div className={styles.line}></div>

//           <div className={styles.amount}>
//             <img
//               className={styles.minus}
//               src="/images/icon-minus-line.svg"
//               alt="minus"
//               onClick={() => handleQuantity("minus")}
//             />

//             <div className={styles.count}>
//               <span>{count}</span>
//             </div>

//             <img
//               className={styles.plus}
//               src="/images/icon-plus-line.svg"
//               alt="plus"
//               onClick={() => handleQuantity("plus")}
//             />
//           </div>

//           <div className={styles.line}></div>

//           <div className={styles.sum}>
//             <div>
//               <span className={styles.sum_price}>총 상품 금액</span>
//             </div>

//             <div className={styles.total_info}>
//               <span className={styles.total}>
//                 총 수량 <span className={styles.total_count}>{count}개</span>
//               </span>
//               <span className={styles.total_price}>
//                 {convertPrice(product.price * count + "")}
//                 <span className={styles.total_unit}>원</span>
//               </span>
//             </div>
//           </div>

//           <div className={styles.btn}>
//             <button className={styles.btn_buy}>바로 구매</button>
//             <button className={styles.btn_cart} onClick={() => handleCart()}>
//               장바구니</button>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };
