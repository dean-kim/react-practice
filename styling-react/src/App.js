import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './App.scss';
const cx = classNames.bind(styles);

console.log(styles);
console.log(cx('box', 'blue'));


class App extends Component {
  render() {
      const isBlue = true;

    return (
        <div className={cx('box', {
            blue: isBlue
        })}>
            <div className={cx('box-inside')}/>

        </div>
    );
  }
}

export default App;