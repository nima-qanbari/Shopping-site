import React from 'react'

//helper
import { shorten } from '../../helper/function'

const Product = ({productData}) => {
 
  return (
    <div>
        <img src={productData.image} alt="product"/>
        <h3>{shorten(productData.title)}</h3>
        <p>{productData.price}</p>
        <div>
            <a href="#">بیشتر</a>
        </div>

    </div>
  )
}

export default Product