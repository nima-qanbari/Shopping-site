import React from 'react'

//context
import ProductContextProvider from './Context/ProductContextProvider'

//Store
import Store from './Store/Store'

const App = () => {
  return (
    <ProductContextProvider>
      <Store />
    </ProductContextProvider>
   
  )
}

export default App