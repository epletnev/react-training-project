import React, { Component } from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = { name: "", email: "" };
    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
  }

  nameChange(e) {
    this.setState({ name: e.target.value });
  }

  emailChange(e) {
    this.setState({ email: e.target.value });
  }

  onSubmit(e) {
    console.log(this.state.name);
    console.log(this.state.email);
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <label for="name">NAME:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.nameChange}
          />

          <label for="email">EMAIL:</label>
          <input type="email" id="email" name="email" value="Email" />

          <label for="phone">PHONE:</label>
          <input type="tel" id="phone" name="phone" value="Phone" />

          <label for="state">STATE:</label>
          <input type="text" id="state" name="state" value="State" />

          <label for="city">CITY:</label>
          <input type="text" id="city" name="city" value="City" />

          <label for="country">COUNTRY:</label>
          <input type="text" id="country" name="country" value="Country" />
        </form>
      </div>
    );
  }
}

export default Form;
