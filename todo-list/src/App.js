import React, { Component } from 'react'
import TodoListTemplate from './components/TodoListTemplate'

class App extends Component {
    render() {
        return (
            <TodoListTemplate>
                템플릿 렌더 테스트!
            </TodoListTemplate>
        )
    }
}

export default App