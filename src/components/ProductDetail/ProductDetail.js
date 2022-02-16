import React, { useEffect, useState } from "react";
import axios from "axios";

// style
import styles from "./ProductDetail.module.css";

//react router
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const { image, title, price, category, description } = product;

  useEffect(() => {
    const response = axios.get(`https://fakestoreapi.com/products/${id}`);
    const fetch = async () => {
      setProduct((await response).data);
    };
    return fetch();

    // axios.get(`https://fakestoreapi.com/products/${id}`)
    // .then((response) => setProduct(response.data))
  }, [id]);
  return (
    <div className={styles.container}>
      <div className={styles.detailContainer}>
        <div className={styles.img}>
          <img src={image} alt="product" />
        </div>
        <div className={styles.detailContent}>
          <h3>{title}</h3>
          <p>
            <b>category : </b> {category}
          </p>
          <p>
            <p><b>price:</b> <span className={styles.price}>{price}$</span></p>
            <b>description: </b>
            {description}
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button>افزودن به سبد خرید</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
