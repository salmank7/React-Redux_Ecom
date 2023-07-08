import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from "../redux/actions/productActions"
import { useEffect } from 'react';

const ProductListing = () => {
    // const products = useSelector((state)=> state);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProducts(response.data))
      }
      useEffect(()=> {
        fetchProducts()
      }, [])
  return (
    <div className='container grid  place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10 px-10'>
        <ProductComponent />
    </div>
  )
}

export default ProductListing