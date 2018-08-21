import React, { Component } from 'react';
import RefrigeratorDrawerContainer from './RefrigeratorDrawerContainer';

import { connect } from 'react-redux';
import * as actions from '../modules';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    Refrigerator
                </div>
                <div>
                    Freezer
                </div>
                <div>
                    <RefrigeratorDrawerContainer />
                </div>
            </div>
        )
    }
}

// 액션함수 준비
const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create()),
    onRemove: (index) => dispatch(actions.remove(index))
});

// 리덕스에 연결을 시키고 내보낸다
export default connect(null, mapToDispatch)(App);