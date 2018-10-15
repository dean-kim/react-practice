import React, { Component } from 'react'
import TodoListTemplate from './components/TodoListTemplate'
import Form from "./components/Form";

class App extends Component {
    render() {
        return (
            <TodoListTemplate form={<Form/>}>
                템플릿 렌더 테스트!
            </TodoListTemplate>
        )
    }
}

export default App