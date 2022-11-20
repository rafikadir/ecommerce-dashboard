import React, { createContext } from 'react';
import { Row, Container, Col, FormControl, Dropdown} from 'react-bootstrap';
import { Bell, Grid, Search, Settings, User } from 'react-feather';
import { Link } from 'react-router-dom';
import './Header.scss';

export const ToggleContext = createContext();

const Header = ({handleToggle}) => {
    return (
        <Container className="page_header" fluid>
           <Row className="header_wrapper">
                <Col lg={6} className="header_left">
                    <div className="sidebar_toggle">
                        <button onClick={handleToggle}>
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
                        <li>
                            <Settings/>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <Bell/>
                                    <span className="counter">3</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Notification</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Notification</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Notification</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <User/>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Log In</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </Col>
           </Row>
        </Container>
    );
};

export default Header;