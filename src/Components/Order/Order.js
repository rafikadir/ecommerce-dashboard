import React from 'react';
import { Table } from 'react-bootstrap';
import './Order.scss';

const Order = () => {
    return (
        <div className="order_table">
            <h4>Recent Order</h4>
            <Table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Keyboard</td>
                        <td>$180</td>
                        <td>3</td>
                        <td><span className='order_status done'>Done</span></td>
                    </tr>
                    <tr>
                        <td>Webcam</td>
                        <td>$50</td>
                        <td>2</td>
                        <td><span className="order_status pending">Pending</span></td>
                    </tr>
                    <tr>
                    <td>Printer</td>
                        <td>$230</td>
                        <td>1</td>
                        <td><span className="order_status rejected">Rejected</span></td>
                    </tr>
                    <tr>
                        <td>Keyboard</td>
                        <td>$180</td>
                        <td>3</td>
                        <td><span className='order_status done'>Done</span></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Order;