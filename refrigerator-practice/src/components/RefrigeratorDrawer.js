import React from 'react';
import PropTypes from 'prop-types';
import './RefrigeratorDrawer.css';

const RefrigeratorDrawer = ({number, index, drawerName}) => {
    return (
        <div
            className="RefrigeratorDrawer">
            {number}
            {drawerName}
        </div>
    );
};

RefrigeratorDrawer.propTypes = {
    index: PropTypes.number,
    number: PropTypes.number,
    drawerName: PropTypes.string
};

RefrigeratorDrawer.defaultProps = {
    index: 0,
    number: 0,
    drawerName: 'test'
};

export default RefrigeratorDrawer;