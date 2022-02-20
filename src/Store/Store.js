import React, { useContext } from "react";
//styles
import styles from "./Store.module.css";

//components
import Product from "../components/Product/Product";

//context
import { productContext } from "../Context/ProductContextProvider";
import { searchContext } from "../Context/SearchContextProvider";

const Store = () => {
  const products = useContext(productContext);
  const searchTerm  = useContext(searchContext);

  return (
    <div className={styles.container}>
      {
      products.filter((item) => {
          if (searchTerm === "") {
            return item
          } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return item;
          } else {
            return false;
          }
        })
        .map((product) => (
          <Product key={product.id} productData={product} />
        ))}
    </div>
  );
};

export default Store;
