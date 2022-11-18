import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Customers.scss';
import PageTitle from '../../Components/PageTitle/PageTitle';
import {customersData} from '../../Data/CustomerData';
import DataCard from '../../Components/DataCard/DataCard';
import CustomerTable from '../../Components/CustomerTable/CustomerTable';

const Customers = () => {
    return (
        <Container className="p-3" fluid>
            <PageTitle title="Customers"/>

            <Row>
                {
                    customersData.map(customer => <Col lg={3}>
                        <DataCard data={customer}/>
                    </Col> )   
                }
            </Row>

            <Row>
                <CustomerTable/>
            </Row>
        </Container>
    );
};

export default Customers;