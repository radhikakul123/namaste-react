import React, { Component } from 'react';
import User from './User';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

class About extends Component{
  constructor(props){
    super(props);

   console.log("parent constructor");

    }

    componentDidMount(){
      console.log("parent componentDidMount called");
  }
  render(){
    return (
      <div>
          <h1>About</h1>

          <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>

          <h2> This is About us page.</h2>
          {/* <User name={"Radhika Vyas(Function)"}/> */}
          <UserClass name={"Radhika Vyas(Class)"} location={"Pune (Class)"}/>
      </div>
    )
  }
}
// const About = () => {
  
  
// }

export default About;