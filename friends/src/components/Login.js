import React from 'react'


class Login extends React.Component {

    state={
        credentials: {
            username: '',
            password: ''
        }
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
    }

    render() {
        return (
            <div>
                <form>
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
                </form>
            </div>
        )
    }

}

export default Login;