import React from 'react';
import {Container} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar/Sidebar';
import Header from '../Components/Header/Header';
import './Layout.scss';
import { useState } from 'react';
import Dashboard from '../Pages/Dashboard/Dashboard';

const Layout = () => {

    const [open, setOpen] = useState(true)
    const handleToggle = () => {
        setOpen(!open);
    }

    return (
        <Container fluid>
            <Sidebar open={open}/>
            <div className={open ? "content_area" : "content_area close"}>
                <Header handleToggle={handleToggle}/>
                       
                <Dashboard />          
            </div>
        </Container>
    );
};

export default Layout;