import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DataCard from '../../Components/DataCard/DataCard';
import PageTitle from '../../Components/PageTitle/PageTitle';
import dashboardData from '../../data';

const Dashboard = () => {
    return (
        <Container className="p-0" fluid>
            <PageTitle title="Dashboard"/>
            <Row>
                {
                    dashboardData.map(data => <Col lg={3}> 
                        <DataCard data={data} />
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Dashboard;