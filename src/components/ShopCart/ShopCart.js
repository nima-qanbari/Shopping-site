import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import empty from "../../images/empty-cart.svg"

//css
import styles from "./ShopCart.module.css"

//Context
import { cartContext } from "../../Context/CartContextProvider";

const ShopCart = () => {
  const { state, dispatch } = useContext(cartContext);
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>

      {state.itemsCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <b>تعداد: </b>
            {state.itemsCounter}
          </p>
          <p>
            <b>مجموع قیمت: </b>
            {state.total}
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.checkoutBtn} onClick={() => dispatch({ type: "CHECKOUT" })}>
              پرداخت
            </button>
            <button className={styles.clearBtn} onClick={() => dispatch({ type: "CLEAR" })}>حذف</button>
          </div>
        </div>
      )}

      {state.checkout && (
        <div className={styles.checkout}>
          <h3>خرید شما با موفقیت انجام شد</h3>
          <Link to="/">بازگشت به صفحه اصلی</Link>
        </div>
      )}
      {!state.checkout && state.itemsCounter === 0 && (
        <div className={styles.clear}>
          <img src={empty} style={{ width: "21vw" }} alt="empty-card" />
          <h3>سبد خرید شما خالی است</h3>
          <Link to="/">بازگشت به صفحه اصلی</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
