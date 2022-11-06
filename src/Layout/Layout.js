import React from 'react';
import {Container} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar/Sidebar';
import Header from '../Components/Header/Header';
import './Layout.scss';

const Layout = () => {
    return (
        <Container fluid>
            <Sidebar/>
            <div className="content_area">
                <Header/> 
            </div>
        </Container>
    );
};

export default Layout;