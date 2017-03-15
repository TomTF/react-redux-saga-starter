import React, {Component} from 'react';

import {AppBar} from 'material-ui';
import {red500} from 'material-ui/styles/colors';
import {TextField, PasswordField, Button, LoadingIndicator} from '../common';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "info@smorder.at",
            password: "smorder"
        };
    }

    render() {
        const formGroupStyle = {
            width: '100%',
            textAlign: 'center'
        }

        const containerStyle = {
            width: '300px',
            margin: '0 auto',
            marginTop: 'calc(50vh - 125px)',
            boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)'
        }

        const errorContainerStyle = {
            backgroundColor: red500,
            textAlign: 'center',
            color: 'white'
        }

        const ErrorMessage = (props) => {
            if (!props.errorMessage) {
                return null;
            }

            return (
                <div style={errorContainerStyle}>
                    <span>{props.errorMessage}</span>
                </div>
            )
        }

        const LoginButton = (props) => {
            if(props.loading){
                return <LoadingIndicator />
            }

            return <Button label="Login" onClick={this.login} primary={true}/>
        }

        return (
            <div style={containerStyle} onKeyPress={this.keyPress}>
                <AppBar title="Login" showMenuIconButton={false}/>
                <ErrorMessage {...this.props}/>
                <div
                    style={{
                    ...formGroupStyle,
                    marginTop: 10
                }}>
                    <TextField
                        autoFocus
                        required
                        hintText="Username"
                        value={this.state.userName}
                        onChange={this.setUsername}/>
                </div>
                <div style={formGroupStyle}>
                    <PasswordField
                        required
                        hintText="Password"
                        value={this.state.password}
                        onChange={this.setPassword}/>
                </div>
                <div
                    style={{
                    ...formGroupStyle,
                    marginTop: 20,
                    paddingBottom: 10
                }}>
                    <LoginButton {...this.props} />
                   
                </div>
            </div>
        );
    }

    keyPress = (event) => {
        if (event.key === 'Enter') {
            this.login();
        }
    }

    setUsername = (event) => {
        this.setState({userName: event.target.value});
    }

    setPassword = (event) => {
        this.setState({password: event.target.value});
    }

    login = () => {
        if (this.state.userName && this.state.userName !== '' && this.state.password && this.state.password !== '') {
            this
                .props
                .login({userName: this.state.userName, password: this.state.password});
        }
    }
}

export default Login;