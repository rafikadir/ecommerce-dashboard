import React from 'react';
import './DataPie.scss';
import { PieChart, Pie, Cell } from "recharts";
import {data, COLORS, renderCustomizedLabel} from '../../Data/Categories';

const DataPie = () => {
    return (
        <div className='data_pie'>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>    
    );
};

export default DataPie;