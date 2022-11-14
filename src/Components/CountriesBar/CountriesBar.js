import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './CountriesBar.scss';

const CountriesBar = ({name, ammount}) => {
    return (
        <div className="single_country">
            <span>{name}</span>
            <ProgressBar now={ammount}/>
        </div>
    );
};

export default CountriesBar;