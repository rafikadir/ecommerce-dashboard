import React from 'react';
import './DataChart.scss';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";
import data from '../../Data/OrderData';
  
const DataChart = () => {
    return (
        <div className="chart_area">
            <AreaChart
                width={700}
                height={300}
                data={data}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip/>
                <Area type="monotone" dataKey="order" stroke="#6362e7" fill="#6362e740" strokeWidth="3"/>
            </AreaChart>
        </div>
    );
};

export default DataChart;