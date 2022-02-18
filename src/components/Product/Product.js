import React, { useContext } from "react";

//react router
import { Link } from "react-router-dom";

//styles
import styles from "./product.module.css";
//helper
import { shorten, isInCart } from "../../helper/function";

//context
import { cartContext } from "../../Context/CartContextProvider";

const Product = ({ productData }) => {
  const {state, dispatch } = useContext(cartContext)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Link to={`productDetail/${productData.id}`}>
          <img className={styles.img} src={productData.image} alt="product" />
        </Link>
   
      </div>
      <h3>{shorten(productData.title)}</h3>
      <h4>{productData.price} $</h4>

      <Link
        className={styles.productBtn}
        to={`productDetail/${productData.id}`}
      >
        بیشتر
      </Link>
     
        <p className={styles.plus}>
          {isInCart(state, productData.id) ?<i onClick={() => dispatch({type:"REMOVE_ITEM", payload:productData})} className="far fa-minus-square"></i> : <i onClick={() => dispatch({type:"ADD_ITEM", payload:productData})} className="far fa-plus-square"></i> }
        </p>
     
    </div>
  );
};

export default Product;
