import React from 'react'
import Loader from 'react-loader-spinner'
import { axiosWithAuth } from '../utils/axiosWithAuth'


class Login extends React.Component {

    state = {
        credentials: {
            username: '',
            password: ''
        },
        isLoading: false
    }

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            isLoading: true
        });
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", JSON.stringify(res.data.payload))
                this.setState({
                    isLoading: false
                })
                this.props.history.push('/protected')
            })
            .catch(err => console.log({ err }));
    }

    render() {
        return (

            <div>
                {this.state.isLoading ? <Loader type="TailSpin" color="#00BFFF" height={80} width={80} /> : 
                <form onSubmit={this.login}>
                    <label htmlFor="username">
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={this.state.credentials.username}
                            onChange={this.handleChanges}
                        />
                    </label>

                    <label htmlFor="password">
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={this.state.credentials.password}
                            onChange={this.handleChanges}
                        />
                    </label>
                    <button>Log in</button>
                </form>}
            </div>
        )
    }

}

export default Login;