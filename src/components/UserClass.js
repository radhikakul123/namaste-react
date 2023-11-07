import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        Location: "Default",
        avatar_url:"https://dummyphoto.com",
      },
    };
  }

  async componentDidMount() {
    // console.log("child componentDidMount called");
    const data = await fetch("https://api.github.com/users/radhikakul123");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
   
    const {login, type,avatar_url} = this.state.userInfo;
    return (
      <div className="User-card">
        <img src={avatar_url}/>
        <h2>Name: {login}</h2>
        <h3>Location: {type}</h3>
        <h4>Contact: {"radhika.svyas@gmail.com"}</h4>
      </div>
    );
  }
}

export default UserClass;
