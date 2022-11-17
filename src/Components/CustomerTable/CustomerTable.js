import React from 'react';
import { Table } from 'react-bootstrap';
import './CustomerTable.scss';
import { customersInfo } from '../../Data/CustomerData';

const CustomerTable = () => {
  
    return (
        <div className="customer_table">
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Phone</th>
                        <th>Registered</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customersInfo.map(customer => <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.password}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.registered}</td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default CustomerTable;