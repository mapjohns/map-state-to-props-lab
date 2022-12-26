import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {

  addUsers = () => {
    return Array.from(this.props.users).map(a => <li key={a.hometown} >{a.username}</li>)
  }

  render() {
    // debugger
    console.log( "There are", this.props.users)
    return (
      <div>
        {/* {this.props.users.map(a => a)} */}
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.addUsers()}
          {/* In addition, display the total number of users curently in the store */}
          <p>There are {this.props.userCount} users!</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length };
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
