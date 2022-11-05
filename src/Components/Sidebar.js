import React from 'react';
import './Sidebar.scss';
import logo from '../Assets/Img/logo.svg';

const Sidebar = () => {
    return (
        <div className='sidebar_area'>
            <div className="sidebar">
                <div className="sidebar_logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;