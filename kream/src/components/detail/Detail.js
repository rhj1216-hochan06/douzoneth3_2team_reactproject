import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./detail.module.css";

//-----------구매 function import-------------------
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';

import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import $ from 'jquery';

export const Detail = ({ convertPrice }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [size, setSize] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [count, setCount] = useState(1);
  const sessionStorage = window.sessionStorage;
// ------ test--------------
const [show, setShow] = useState(false);
  
  
const handleClose = () => setLgShow(false);
const handleShow = () => {
  
  setLgShow(true);
  fetch("/api/perchase",{
  
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



      //-----------------------------------------------------3사이즈----------------------------------------------

      if(json.data[0].categorydetail == "3사이즈")
      {
        console.log(1);
          fetch("/api/perchase/threesize",{
      
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
                  +"<label id = 'XS' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>XS<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1' disable>"
                  +"<label id = 'XS' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>XS<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }

                if(json.data[0].S > 0)
                {
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-2' value = '2' >"
                  +"<label id = 'S' tabindex='0' for='tag-radio-2' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>S<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else
                {
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-2' value = '2' disable>"
                  +"<label id = 'S' tabindex='0' for='tag-radio-2' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>S<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                
                }

                if(json.data[0].M > 0)
                {
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-3' value = '3' >"
                  +"<label id = 'M' tabindex='0' for='tag-radio-3' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>M<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else
                {
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-3' value = '3' disable>"
                  +"<label id = 'M' tabindex='0' for='tag-radio-3' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>M<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                
                }
                if(json.data[0].L > 0)
                {
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-4' value = '4' >"
                  +"<label id = 'L' tabindex='0' for='tag-radio-4' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>L<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-4' value = '4' disable>"
                  +"<label id = 'L' tabindex='0' for='tag-radio-4' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>L<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].XL > 0)
                {
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-5' value = '5' >"
                  +"<label id = 'XL' tabindex='0' for='tag-radio-5' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>XL<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-5' value = '5' disable>"
                  +"<label id = 'XL' tabindex='0' for='tag-radio-5' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>XL<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
              

            })

            //  const element = document.getElementById('sizeRB');
          //  element.innerText += '<div>InnerText<div>';
  
    }

     //-----------------------------------------------원사이즈-----------------------------------------------------------

     else if(json.data[0].categorydetail == 'onesize')
     {
        console.log(1)
         fetch("/api/perchase/onesize",{
     
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
                 +"<label id = 'onesize' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>onesize<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                 +"</div>");
               
               }
               else{
                 $('#row1').append("<div class='col-md-4 col-6'>"
                 +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1' disable>"
                 +"<label id = 'onesize' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>onesize<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                 +"</div>");
               }

           })

           //  const element = document.getElementById('sizeRB');
         //  element.innerText += '<div>InnerText<div>';
 
   }

   //-----------------------------------------------향수-----------------------------------------------------------

   else if(json.data[0].categorydetail == "향수")
   {
       fetch("/api/perchase/perfume",{
   
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
               +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1' >"
               +"<label id = 'size_30ml' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>30ml<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
               +"</div>");
             
             }
             else{
               $('#row1').append("<div class='col-md-4 col-6'>"
               +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1' disable>"
               +"<label id = 'size_30ml' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>30ml<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
               +"</div>");
             }
             if(json.data[0].size_100ml > 0)
             {
               $('#row1').append("<div class='col-md-4 col-6'>"
               +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '2' >"
               +"<label id = 'size_100ml' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>100ml<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
               +"</div>");
             
             }
             else{
               $('#row1').append("<div class='col-md-4 col-6'>"
               +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '2' disable>"
               +"<label id = 'size_100ml' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>100ml<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
               +"</div>");
             }

         })

         //  const element = document.getElementById('sizeRB');
       //  element.innerText += '<div>InnerText<div>';

 }


 //----------------------------------------------- 신발 -----------------------------------------------------------

 else if(json.data[0].categorydetail == "신발")
      {
          fetch("/api/perchase/shoe",{
      
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
                  +"<label id = 'size_225' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>225<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '1' disable>"
                  +"<label id = 'size_225' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>225<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }

                if(json.data[0].size_230 > 0)
                {
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '2' >"
                  +"<label id = 'size_230' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>230<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '2' disable>"
                  +"<label id = 'size_230' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>230<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_235 > 0)
                {
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '3' >"
                  +"<label id = 'size_235' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>235<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row1').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '3' disable>"
                  +"<label id = 'size_235' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>235<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_240 > 0)
                {
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '4' >"
                  +"<label id = 'size_240' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>240<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '4' disable>"
                  +"<label id = 'size_240' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>240<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_245 > 0)
                {
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '5' >"
                  +"<label id = 'size_245' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>245<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '5' disable>"
                  +"<label id = 'size_245' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>245<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_250 > 0)
                {
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '6' >"
                  +"<label id = 'size_250' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>250<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row2').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '6' disable>"
                  +"<label id = 'size_250' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>250<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_255 > 0)
                {
                  $('#row3').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '7' >"
                  +"<label id = 'size_255' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>255<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row3').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '7' disable>"
                  +"<label id = 'size_255' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>255<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_260 > 0)
                {
                  $('#row3').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '8' >"
                  +"<label id = 'size_260' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>260<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row3').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '8' disable>"
                  +"<label id = 'size_260' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>260<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_265 > 0)
                {
                  $('#row3').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '9' >"
                  +"<label id = 'size_265' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>265<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row3').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '9' disable>"
                  +"<label id = 'size_265' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>265<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_270 > 0)
                {
                  $('#row4').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '10' >"
                  +"<label id = 'size_270' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>270<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row4').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '10' disable>"
                  +"<label id = 'size_270' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>270<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_275 > 0)
                {
                  $('#row4').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '11' >"
                  +"<label id = 'size_275' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>275<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row4').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '11' disable>"
                  +"<label id = 'size_275' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>275<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_280 > 0)
                {
                  $('#row4').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '12' >"
                  +"<label id = 'size_280' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>280<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row4').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '12' disable>"
                  +"<label id = 'size_280' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>280<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_285 > 0)
                {
                  $('#row5').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '13' >"
                  +"<label id = 'size_285' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>285<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row5').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '13' disable>"
                  +"<label id = 'size_285' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>285<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_290 > 0)
                {
                  $('#row5').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '14' >"
                  +"<label id = 'size_290' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>290<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row5').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '14' disable>"
                  +"<label id = 'size_290' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>290<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_295 > 0)
                {
                  $('#row5').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '15' >"
                  +"<label id = 'size_295' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>295<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row5').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '15' disable>"
                  +"<label id = 'size_295' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>295<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }
                if(json.data[0].size_300 > 0)
                {
                  $('#row6').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '16' >"
                  +"<label id = 'size_300' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>300<br><span style='font-size:22px; color:orange; font:bold;'>233,242</span></label>"
                  +"</div>");
                
                }
                else{
                  $('#row6').append("<div class='col-md-4 col-6'>"
                  +"<input class ='btn-check' name='options' type='radio' autocomplete='off' id = 'tag-radio-1' value = '16' disable>"
                  +"<label id = 'size_300' tabindex='0' for='tag-radio-1' class='btn btn-primary' style = 'width:210px; height:95px; font-size:25px; font:bold; '>300<br><span style='font-size:22px; color:orange; font:bold;'>재고없음</span></label>"
                  +"</div>");
                }

               
            })

            //  const element = document.getElementById('sizeRB');
          //  element.innerText += '<div>InnerText<div>';
  
    }

 



    })}

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
    axios.get("/data/products.json").then((data) => {
      setProduct(data.data.products.find((product) => product.id === parseInt(id)));
    });
  }, [id, product.price]);

  const handleCart = () => {
    //민약 상품아이디와 유저아이디로 조회했을 떄, 
    //1. 데이터가 있다면 해당 count를 이곳의 count로 변경,
    //2. 데이터가 없다면, id,count,userid를 가져가서 insert를 실행
    fetch("/api/detail",{
      method: "POST",
      headers: {
        "Content-Type":"application/json; charset=utf-8"
      },
      body: JSON.stringify({
        "CART_USERID" : sessionStorage.getItem("loginId"),
        "CART_PRODUCTID" : product.id,
        "CART_COUNT" : count
      })
    })
      .then((res) => res.json())
      .then(data => {
        console.log(data);
      });
  };


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

          <div className={styles.delivery}>
            <p>택배배송 / 무료배송</p>
          </div>

          <div className={styles.line}></div>

          <div className={styles.amount}>
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
          </div>

          <div className={styles.line}></div>

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
          </div>

          <div className={styles.btn}>
          <button className={styles.btn_buy} data-bs-toggle={"modal"} data-bs-target={"#exampleModal"} data-bs-whatever={"@mdo"}>바로 구매</button>
        
        <Button variant="primary" onClick={handleShow}>
            Launch static backdrop modal
        </Button>

        <Modal
          size = "lg"
          show={lgShow}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
         
        >
          <Modal.Header closeButton>
            <Modal.Title>Size</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           
            
            {/* <ToggleButtonGroup id = 'sizeRB' type='radio' name='options' defaultValue={1}>
         
 
            </ToggleButtonGroup> */}
           
           <Modal.Body className="show-grid">
              <Container id="sizeRB">
              
              </Container>
           </Modal.Body>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
            <button className={styles.btn_cart} onClick={() => {
              handleCart();
              window.location.reload();
              }}>
              장바구니</button>
          </div>
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
