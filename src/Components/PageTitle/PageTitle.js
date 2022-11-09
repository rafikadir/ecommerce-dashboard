import React from 'react';
import'./PageTitle.scss';

const PageTitle = ({title}) => {
    return (
        <div className="page_title">
            <h2>{title}</h2>
        </div>
    );
};

export default PageTitle;