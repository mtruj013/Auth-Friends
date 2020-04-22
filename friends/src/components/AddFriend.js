import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'



class AddFriend extends React.Component {

    state = {
        friend: {
            name:"",
            age: "",
            email: "",
            id: Date.now()
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
        // e.preventDefault();
        // const data = {
        //     name: this.state.friend.name,
        //     age: this.state.age.name,
        //     email: this.state.email.name,
        //     id: Date.now()
        // }
        axiosWithAuth()
        .post('/api/friends', this.state.friend)
        .then(res => {
            console.log("new friend res", res)
            this.setState({
                friend: {
                    ...this.state.friend
                }
            })
            this.props.history.push("/Friends")
        })
        .catch(err => console.log({err}));
    }


    render(){
    return(
        <div>
            <h1>ADD YOUR FRIEND!</h1>
            <form onSubmit={this.newFriend}>
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