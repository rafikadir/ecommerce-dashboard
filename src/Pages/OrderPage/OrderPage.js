import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Order from '../../Components/Order/Order';
import DataCard from '../../Components/DataCard/DataCard';
import dashboardData from '../../Data/data';

const OrderPage = () => {
    return (
        <Container className="p-3" fluid>
            <PageTitle title="Orders"/>
                <Row>
                    {
                        dashboardData.map (data => <Col lg={3}><DataCard data={data} /></Col>)
                    }
                </Row>
                <Order />
        </Container>
    );
};

export default OrderPage;