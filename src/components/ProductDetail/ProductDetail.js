import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

// style
import styles from "./ProductDetail.module.css";

//react router
import { useParams } from "react-router-dom";

//context
import { cartContext } from "../../Context/CartContextProvider";

//helper
import { isInCart, quantityCount } from "../../helper/function";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { _id } = useParams();
  const { image, title, price, category, description, id} = product;
  const { state, dispatch } = useContext(cartContext);
  useEffect(() => {
    // const response = axios.get(`https://fakestoreapi.com/products/${Id}`);
    // const fetch = async () => {
    //   setProduct((await response).data);
    // };
    // return fetch();

    axios.get(`https://fakestoreapi.com/products/${_id}`)
    .then((response) => setProduct(response.data))
  }, [_id]);
  return (
    <div className={styles.container}>
      <div className={styles.detailContainer}>
        <div className={styles.img}>
          <img src={image} alt="product" />
        </div>
        <div className={styles.detailContent}>
          <h3>{title}</h3>
          <div>
            <b>category : </b> {category}
          </div>
          <div>
            <div className={styles.price}>
              <b>price:</b> <span >{price}$</span>
            </div>
            <b>description: </b>
            {description}
          </div>
        </div>
        <div className={styles.buttonContainer}>

          {
            quantityCount(state, id) > 1 && <button onClick={() => dispatch({type:"DECREASE", payload: product})}>-</button>
          }
          {
            quantityCount(state, id) === 1 && <button onClick={() => dispatch({type:"REMOVE_ITEM", payload: product})}><i className="fa fa-trash-can"></i></button>
          }
          
          {isInCart(state, id) ? (
            <button
             className={styles.increaseBtn} onClick={() => dispatch({ type: "INCREASE", payload: product })}
            >
              +
            </button>
          ) : (
            <button onClick={() => dispatch({type:"ADD_ITEM", payload:product})}>افزودن به سبد خرید</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

