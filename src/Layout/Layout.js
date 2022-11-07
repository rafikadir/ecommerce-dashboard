import React from 'react';
import {Container} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar/Sidebar';
import Header from '../Components/Header/Header';
import './Layout.scss';
import { useContext } from 'react';
import ToggleContext from '../Components/Header/Header';

const Layout = () => {
    const toggle = useContext(ToggleContext);

    return (
        <Container fluid>
            <div className='sidebar_area'>
                <Sidebar/>
            </div>
            <div className="content_area">
                <Header/> 
                {toggle}
            </div>
        </Container>
    );
};

export default Layout;