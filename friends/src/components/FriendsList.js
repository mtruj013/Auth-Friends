import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import AddFriend from './AddFriend'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class FriendsList extends React.Component {

    state ={
        friends: []
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            this.setState({
                friends : res.data
            })
        })
        .catch(err =>{
            console.log(err)
        } )
    }

    render(){
        return(
            <div>
                <Route component={AddFriend}/>
                <h1>FRIENDS</h1>
                {this.state.friends.map(friend => {
                    return <div>
                        <h2>{friend.name}</h2>
                        <h3>{friend.age}</h3>
                        <h3>{friend.email}</h3>
                        </div>
                })}
            </div>
        )
    }

}

export default FriendsList;