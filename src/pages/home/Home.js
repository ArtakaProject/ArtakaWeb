import React from 'react'
import ProductList from '../product/ProductList'
import SearchProduct from '../product/SearchProduct'

export default function Home() {
    return (
        <>
            <SearchProduct/>
            <ProductList/>
        </>
    )
}
