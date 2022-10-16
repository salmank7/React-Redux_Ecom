import React from 'react'
import Header from './containers/Header'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import ProductListing from './containers/ProductListing'
import ProductComponent from './containers/ProductComponent'
import ProductDetails from './containers/ProductDetails'
import HeaderSpace from './containers/HeaderSpace'

const App = () => {
  return (
   <div className="App">
    <Router>
      <HeaderSpace />
    <Header />
    <Routes>
      <Route path='/' element={<ProductListing />} />
      <Route path='/product/:productId' element={<ProductDetails />} />
      <Route>404! Path Not Found</Route>
    </Routes>
    </Router>
   </div>
  )
}

export default App