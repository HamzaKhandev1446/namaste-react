import React from "react";
import "./UserClass.scss";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };

  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/hamzakhan1446");
    const response = await data.json();
    this.setState({ user: response });
  }

  render() {
    const { login, url } = this.state.user;
    return (
      <div className="user">
        <h1>Name : {login}</h1>
        <h3>Location: {url}</h3>
        <h5>Contact: hamzakhan.dev1446@gmail.com</h5>
      </div>
    );
  }
}

export default UserClass;
