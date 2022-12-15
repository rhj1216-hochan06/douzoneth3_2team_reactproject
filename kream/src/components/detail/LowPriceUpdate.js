import { useEffect, useState } from "react";

export const LowPriceUpdate = ({ pid }) => {
  //sale 테이블에서, 상품id가 일치하는 항목을 정렬해서 최저가를 가져와 변수에 담는다.
  //그 변수를 products테이블에서 상품id가 일치하는 가격값을 update
  //SELECT MIN (SALE_PRICE) FROM SALE WHERE SALE_PRODUCTID = 1;
  const [lowprice, setLowprice] = useState();
  // useEffect(() => {
  //   onA();
  // }, []);
  // const onA = (event) => {
  fetch("/api/get-low-price-update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({
      "pid": pid,
    })
  })
    .then((res) => res.json())
    .then(json => {
      const num = json.ass.min;
      setLowprice(num);
  });
  // console.log("최저값?");
  // console.log(lowprice);
// console.log(pid);
  fetch("/api/updateprice", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({
      "pid": pid,
      "price": lowprice,
    })
  })
    .then((res) => res.json())
    // .then(json => (
    //   console.log(json)
    // ));

// }
  return (
    <div class="wrapper">
    </div>
  );
};




