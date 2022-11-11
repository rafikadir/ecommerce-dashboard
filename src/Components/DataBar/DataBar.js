import React from 'react';
import './DataBar.scss';
import data from '../../Data/Databar';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DataBar = () => {
    return (
        <BarChart width={250} height={150} data={data}>
            <Bar dataKey="visitor" fill="#6362e7" />
            <YAxis/>
            <XAxis dataKey="name"/>
            <Tooltip/>
        </BarChart>
    );
};

export default DataBar;