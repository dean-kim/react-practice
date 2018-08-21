import React from 'react';
import RefrigeratorDrawer from './RefrigeratorDrawer';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import './RefrigeratorDrawerList.css';

const RefrigeratorDrawerList = ({refrigeratorDrawers}) => {

    const refrigeratorDrawerList = refrigeratorDrawers.map(
        (refrigeratorDrawer, i) => (
            <RefrigeratorDrawer
                key={i}
                index={i}
                {...refrigeratorDrawer.toJS()}
            />
        )
    );

    return (
        <div className="RefrigeratorDrawerList">
            {refrigeratorDrawerList}
        </div>
    );
};

RefrigeratorDrawerList.propTypes = {
    refrigeratorDrawers: PropTypes.instanceOf(List)
};

RefrigeratorDrawerList.defaultProps = {
    refrigeratorDrawers: []
};

export default RefrigeratorDrawerList;