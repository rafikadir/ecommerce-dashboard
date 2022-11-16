import React from 'react';
import './ProductCard.scss';
import {Table} from 'react-bootstrap';

const ProductCard = (props) => {

    const products = props.products;

    return (
        <div className="product_table">
           <Table>
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => <tr>
                            <td>{product.id}</td>
                            <td><img className="product_img" src={product.image} alt={product.title}/></td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ProductCard;