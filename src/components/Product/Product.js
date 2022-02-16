import React from "react";

//react router
import { Link } from "react-router-dom";

//styles
import styles from "./product.module.css"
//helper
import { shorten } from "../../helper/function";

const Product = ({ productData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={productData.image} alt="product" />
      </div>
      <h3>{shorten(productData.title)}</h3>
      <h4>{productData.price} $</h4>
      
        <Link to={`productDetail/${productData.id}`} >بیشتر</Link>
      
    </div>
  );
};

export default Product;
