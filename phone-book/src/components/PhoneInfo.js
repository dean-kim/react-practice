import React, { Component } from 'react';


class PhoneInfo extends Component {

    static defaultProps = {
        info: {
            name: 'NAME',
            phone: '010-0000-0000',
            id: 0
        },
    }

    state = {
        // change 버튼을 눌렀을 때 editing 값을 true 로 변경
        // 이 값이 true 이면 기존의 텍스트 형태로 보여주던 값들을 input 형태로 보여주게 됨
        editing: false,
        // input 값은 유동적이므로 input 값을 담기 위해 각 필드를 위한 값도 설정
        name: '',
        phone: '',
    }

    handleRemove = () => {
        // delete 버튼을 누르면 onRemove 에 id 를 담아서 호출
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    // editing 값을 반전시키는 함수
    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({
            editing: !editing
        });
    }

    // input 에서 onChange 이벤트가 발생할 때 호출되는 함수
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // 여기서는, editing 값이 바뀔 때 처리할 로직이 있음
        // change 를 눌렀을 때는, 기존의 값이 input 에 나타나고
        // change 를 적용할 때는, input 의 값들을 부모한테 전달함

        const { info, onUpdate } = this.props;

        if(!prevState.editing && this.state.editing) {
            // editing 값이 false -> true 로 전환될 때 info 의 값을 state 에 넣어줌
            this.setState({
                name: info.name,
                phone: info.phone
            });
        }

        if(prevState.editing && !this.state.editing) {
            // editing 값이 true -> false 로 전환될 때
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            })
        }
    }

    render() {

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        // 수정 모드
        const { editing} = this.state;

        if(editing) {
            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name='name'
                            placeholder='NAME'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name='phone'
                            placeholder='PHONE NUMBER'
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>save</button>
                    <button onClick={this.handleRemove}>delete</button>
                </div>
            )
        }

        // 일반 모드
        const { name, phone} = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>change</button>
                <button onClick={this.handleRemove}>delete</button>
            </div>
        );
    }

}

export default PhoneInfo