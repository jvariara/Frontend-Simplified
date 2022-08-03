import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Conditional from "./Conditional";

// function App() {
//   const date = new Date()
//   return (
//     <div>
//       <h1>Code here</h1>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favColor: "red",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
        </label>
        <br />
        <textarea value={"Some default value"} onChange={this.handleChange} />
        <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />{" "}
          Is friendly?
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />{" "}
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />{" "}
          Female
        </label>
        <br />
        <label>Favorite Color: </label>

        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
        </select>

        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <h2>You are a {this.state.gender}</h2>
        <h2>Your favorite color is {this.state.favColor}</h2>
      <button>Submit</button>
      </form>
    );
  }
}

export default App;
