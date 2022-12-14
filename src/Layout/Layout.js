import React from 'react';
import {Container} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar/Sidebar';
import Header from '../Components/Header/Header';
import './Layout.scss';
import { useState } from 'react';
import Dashboard from '../Pages/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import OrderPage from '../Pages/OrderPage/OrderPage';
import Products from '../Pages/Products/Products';
import Customers from '../Pages/Customers/Customers';

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
                       
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/orders" element={<OrderPage />}/>
                    <Route path="/products" element={<Products />}/>
                    <Route path="/customers" element={<Customers />}/>
                </Routes>                        
            </div>
        </Container>
    );
};

export default Layout;