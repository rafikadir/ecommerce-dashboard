import React from 'react';
import { Container } from 'react-bootstrap';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Order from '../../Components/Order/Order';

const OrderPage = () => {
    return (
        <Container className="p-3" fluid>
            <PageTitle title="Orders"/>

            <Order />
        </Container>
    );
};

export default OrderPage;