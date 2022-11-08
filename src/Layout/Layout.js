import React from 'react';
import {Container} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar/Sidebar';
import Header from '../Components/Header/Header';
import './Layout.scss';
import { useState } from 'react';

const Layout = () => {

    const [open, setOpen] = useState(true)


    return (
        <Container fluid>
            <Sidebar open={open}/>
            <div className="content_area">
                <Header/>                 
            </div>
        </Container>
    );
};

export default Layout;