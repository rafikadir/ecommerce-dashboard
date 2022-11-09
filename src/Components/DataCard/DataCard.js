import React from 'react';
import './DataCard.scss';

const DataCard = (data) => {

    const {icon, title, ammount, arrow, growth} = data.data;

    return (
        <div className="data_card">
            <div className="data_icon">
                {icon}
            </div>
            <div className="data_text">
                <p>{title}</p>
                <h3>{ammount}</h3>
                <span className="data_parcent">
                    {arrow}
                    {growth}
                </span>
            </div>
        </div>
    );
};

export default DataCard;