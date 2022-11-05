import React from 'react';
import { Row, Container, Col, FormControl} from 'react-bootstrap';
import { Bell, Grid, Search, Settings, User } from 'react-feather';
import './Header.scss';

const Header = () => {
    return (
        <Container className="page_header" fluid>
           <Row className="header_wrapper">
                <Col lg={6} className="header_left">
                    <div className="sidebar_toggle">
                        <button>
                            <Grid/>
                        </button>
                    </div>
                    <div className="header_search">
                        <Search className="search_icon"/>
                        <FormControl placeholder="Search here.."></FormControl>
                    </div>
                </Col>
                <Col lg={6} className="header_right">
                    <ul className="nav_items">
                        <li><Bell/></li>
                        <li><Settings/></li>
                        <li><User/></li>
                    </ul>
                </Col>
           </Row>
        </Container>
    );
};

export default Header;