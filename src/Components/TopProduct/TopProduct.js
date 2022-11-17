import React from 'react';
import { Table } from 'react-bootstrap';
import './TopProduct.scss';
import data from '../../Data/TopProducts';

const TopProduct = () => {
    return (
        <div className="top_product">
        <h4>Top Products</h4>
        <Table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Location</th>
                    <th>Total Orders</th>
                    <th>Revinue</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(singleData => <tr key={singleData.name}>
                            <td>{singleData.name}</td>
                            <td>{singleData.location}</td>
                            <td>{singleData.orders}</td>
                            <td><span>$</span>{singleData.revinue}</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    </div>
    );
};

export default TopProduct;