import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './App.css';
const cx = classNames.bind(styles);

console.log(styles);
console.log(cx('box', 'blue'));


class App extends Component {
  render() {
    return (
        <div className={cx('box', 'blue')}>

        </div>
    );
  }
}

export default App;