import React from 'react';
import {useState, useEffect } from 'react';
import {Container} from 'react-bootstrap';
import PageTitle from '../../Components/PageTitle/PageTitle';
import ProductCard from '../../Components/ProductCard/ProductCard';

const Products = () => {

    const [products, setProducts] = useState();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <Container className="p-3" fluid>
            <PageTitle title="Products"/>

            <ProductCard products={products}/>
        </Container>
    );
};

export default Products;