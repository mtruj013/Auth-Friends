import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'


class AddFriend extends React.Component {

    state = {
        friend: {
            name:"",
            age: "",
            email: "",
            id: ""
        }
    }

    handleChanges = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    newFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', this.state.friend)
        .then(res => {
            console.log("new friend res", res)
        })
        .catch(err => console.log({err}));
    }


    render(){
    return(
        <div>
            <h1>ADD YOUR FRIEND!</h1>
            <form>
               <label htmlFor="name">
                Name:
                   <input
                        type="text"
                        name="name"
                        value={this.state.friend.name}
                        onChange={this.handleChanges}
                   />
               </label>
               <label htmlFor="age">
                Age:
                   <input
                    type="number"
                    name="age"
                    value={this.state.friend.age}
                    onChange={this.handleChanges}
                   />
               </label>
               <label htmlFor="email">
                Email:
                   <input
                    type="email"
                    name="email"
                    value={this.state.friend.email}
                    onChange={this.handleChanges}
                   />
               </label>
               <button>Add</button>
            </form>
        </div>
        )
    }

}

export default AddFriend;