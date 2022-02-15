import React, { useContext } from 'react'
//components
import Product from '../components/Product/Product'

//context
import { productContext } from '../Context/ProductContextProvider'


const Store = () => {
    const products = useContext(productContext)

  return (
    <div>
      {
          products.map((product) => <Product key={product.id} productData={product}/>)
      }
    </div>
  )
}

export default Store