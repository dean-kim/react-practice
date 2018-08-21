import React, { Component } from 'react';
import Buttons from '../components/Buttons';
import RefrigeratorDrawerContainer from './RefrigeratorDrawerContainer';

import { connect } from 'react-redux';
import * as actions from '../modules';

class App extends Component {
    render() {
        const { onCreate, onRemove } = this.props;
        return (
            <div>
                <div className="App">
                    <Buttons
                        onCreate={onCreate}
                        onRemove={onRemove}
                    />
                    <RefrigeratorDrawerContainer/>
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