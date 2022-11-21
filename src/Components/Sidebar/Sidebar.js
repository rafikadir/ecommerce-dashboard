import React from 'react';
import './Sidebar.scss';
import logo from './../../Assets/Img/logo.svg';
import nav from '../../Nav';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'react-feather';

const Sidebar = ({open}) => {
    return (    
        <div className={open? 'sidebar_area' : 'sidebar_area close'}>
            <div className="sidebar_logo">
                <img src={logo} alt="logo" />

                <div className="close_icon">
                    <ChevronLeft/>  
                </div>
            </div>

            <div className="sidebar_menu">
                <ul>
                    {
                        nav.map((navItem) => 
                            <li>
                                <Link to={navItem.link}>
                                    {navItem.icon}
                                    {navItem.name}
                                </Link>
                            </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;