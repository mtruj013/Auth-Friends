import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

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
                <h1>FRIENDS</h1>
                {this.state.friends.map(friend => {
                    return (
                        <h2>{friend.name}</h2>
                        // <h3>{friend.age}</h3>
                    )
                })}
                {/* add friend goes here */}
            </div>
        )
    }

}

export default FriendsList;