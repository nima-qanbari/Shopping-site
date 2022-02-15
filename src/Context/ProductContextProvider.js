import React, { createContext, useEffect, useState } from "react";

//Api
import { getProducts } from "../Services/Api";

//context
export const productContext = createContext();

const ProductContextProvider = ({ children}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setProducts(await getProducts());
    };
    return fetchApi();
  }, []);

  return (
    <productContext.Provider value={products}>
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
