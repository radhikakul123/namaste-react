import React, { Component } from 'react';
import User from './User';
import UserClass from './UserClass';


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