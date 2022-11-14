import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountriesBar from '../../Components/CountriesBar/CountriesBar';
import DataCard from '../../Components/DataCard/DataCard';
import DataChart from '../../Components/DataChart/DataChart';
import DataPie from '../../Components/DataPie/DataPie';
import Order from '../../Components/Order/Order';
import PageTitle from '../../Components/PageTitle/PageTitle';
import TopProduct from '../../Components/TopProduct/TopProduct';
import dashboardData from '../../Data/data';
import './Dashboard.scss';

const Dashboard = () => {

    const countriesData = [
        {
            'name': 'USA',
            'ammount': '50'
        },
        {
            'name': 'German',
            'ammount': '60'
        },
        {
            'name': 'India',
            'ammount': '80'
        },
        {
            'name': 'Canada',
            'ammount': '45'
        },
        {
            'name': 'France',
            'ammount': '65'
        }
    ]

    return (
        <Container className="p-3" fluid>
            <PageTitle title="Dashboard"/>
            <Row>
                {
                    dashboardData.map(data => <Col lg={3}> 
                        <DataCard data={data} />
                    </Col>)
                }

                <Col lg={6}>
                    <div className="order_data_chart">
                        <div className="order_chart_top">
                            <h4>Orders Summary</h4>

                            <div className="select_date">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Today</option>
                                    <option value="1">Last Week</option>
                                    <option value="2">Last Quarter</option>
                                    <option value="3">Last Month</option>
                                </select>
                            </div>
                        </div>
                        <DataChart/>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="categories_pie">
                        <div className="categories_pie_top">
                            <h4>Top Categories</h4>
                        </div>
                        <DataPie />
                        <ul className="categories_pie_bottom">
                            <li>
                                <span className="bg_one"></span>
                                Shoes
                            </li>
                            <li>
                                <span className="bg_two"></span>
                                Shirts
                            </li>
                            <li>
                                <span className="bg_three"></span>
                                Hodies
                            </li>
                            <li>
                                <span className="bg_four"></span>
                                Pants
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="countries_bar">
                        <div className="countries_bar_top">
                            <h4>Top Countries</h4>
                        </div>

                        <div className="country_list">
                            {
                                countriesData.map(country => <CountriesBar name={country.name} ammount={country.ammount}/>)
                            }
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <Order/>
                </Col>
                <Col lg={6}>
                    <TopProduct />
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;