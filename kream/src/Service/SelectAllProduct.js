

import React, { useState,useEffect } from 'react';
import { Products } from '../components/products/Products';

//selectAll
export const ProductDAO = () => {
    const [state, setState] = useState([]);
    fetch("/api/products", {
        method : "get",
        headers : {
        "content-type" : "application/json"
        },
    })
    .then((res) => res.json())
    .then(json => setState(json));

  return <Products state={state} />;
};

export const Memoizedtest = React.ProductDAO;