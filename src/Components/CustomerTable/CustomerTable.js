import React from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import './CustomerTable.scss';
import { customersInfo } from '../../Data/CustomerData';
import { AlertTriangle, Edit2, Eye, Trash } from 'react-feather';
import { useState } from 'react';

const CustomerTable = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () =>{
        setShow(true)
    };

    return (
        <>        
            <Modal show={show} onHide={handleClose} className="delete_alert">
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertTriangle/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cencel
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Yes ! Delete
                    </Button>
                </Modal.Footer>
            </Modal>

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
                            <td>
                                <button className='action_btn'><Eye/></button>
                                <button className='action_btn'><Edit2/></button>
                                <button className='action_btn' onClick={handleShow}><Trash/></button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
        </>
    );
};

export default CustomerTable;