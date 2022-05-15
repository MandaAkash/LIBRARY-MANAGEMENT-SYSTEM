import React from 'react';
import Product from './Product.js'
export default function product(props) {
  return(
       props.product.map((product,i)=>{
         return<Product product={product} key={i}/>
       }) 
  )
}

