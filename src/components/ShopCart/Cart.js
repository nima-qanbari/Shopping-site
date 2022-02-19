import React, { useContext } from "react";

//css
import styles from "./Cart.module.css";

//Context
import { cartContext } from "../../Context/CartContextProvider";

//helper
import { shorten } from "../../helper/function";

const Cart = ({ data }) => {
  const { dispatch } = useContext(cartContext);

  const { image, price, quantity, title } = data;

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={image} alt="product" className={styles.productImage} />
        <div className={styles.data}>
          <p>{shorten(title)}</p>
        </div>
      </div>
      <div className={styles.detailContainer}>
        <div className={styles.divQuantity}>
          <span className={styles.quantity}>{quantity}</span>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={() => dispatch({ type: "INCREASE", payload: data })}>
            +
          </button>
          {quantity > 1 ? (
            <button
              className={styles.decrease}
              onClick={() => dispatch({ type: "DECREASE", payload: data })}
            >
              -
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
            >
              <i className="fa fa-trash-can"></i>
            </button>
          )}
        </div>
        <div className={styles.data}>
          <h5>{price} $</h5>
        </div>
      </div>
    </div>
  );
};

export default Cart;
