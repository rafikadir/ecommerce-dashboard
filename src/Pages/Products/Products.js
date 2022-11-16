import React from 'react';
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../../Components/PageTitle/PageTitle';
import ProductCard from '../../Components/ProductCard/ProductCard';

const Products = () => {

    const [products, setProducts] = useState();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    console.log(products);

    return (
        <Container className="p-3" fluid>
            <PageTitle title="Products"/>

            <Row>
                {
                    products.map((product) =>
                        <Col lg={3}>
                            <ProductCard product={product}/>
                        </Col>)
                }
            </Row>
        </Container>
    );
};

export default Products;