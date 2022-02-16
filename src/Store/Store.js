import React, { useContext } from 'react'
//styles
import styles from "./Store.module.css"

//components
import Product from '../components/Product/Product'

//context
import { productContext } from '../Context/ProductContextProvider'


const Store = () => {
    const products = useContext(productContext)

  return (
    <div className={styles.container} >
      {
          products.map((product) => <Product key={product.id} productData={product} />)
      }
    </div>
  )
}

export default Store