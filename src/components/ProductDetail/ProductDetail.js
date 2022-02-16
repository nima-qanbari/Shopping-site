import React, { useContext, useEffect, useState } from 'react'

import axios from 'axios'

//react router
import { useParams } from 'react-router-dom'





const ProductDetail = () => {
  const [product, setProduct] = useState([])
   const { id } = useParams()
    const { image } = product

    useEffect(() => {
        const response = axios.get(`https://fakestoreapi.com/products/${id}`)
        const fetch = async () => {
             setProduct((await response).data)
        }
        return fetch()
        
        // axios.get(`https://fakestoreapi.com/products/${id}`)
        // .then((response) => setProduct(response.data))

    }, [id])
  return (
    <div>
        <img src={image} alt='product'/>
    </div>
  )
}

export default ProductDetail