import React, { Component } from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      country: "",
    };
    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.stateChange = this.stateChange.bind(this);
    this.cityChange = this.cityChange.bind(this);
    this.countryChange = this.countryChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  nameChange(e) {
    this.setState({ name: e.target.value });
  }

  emailChange(e) {
    this.setState({ email: e.target.value });
  }

  phoneChange(e) {
    this.setState({ phone: e.target.value });
  }

  stateChange(e) {
    this.setState({ state: e.target.value });
  }

  cityChange(e) {
    this.setState({ city: e.target.value });
  }

  countryChange(e) {
    this.setState({ country: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.phone);
    console.log(this.state.state);
    console.log(this.state.city);
    console.log(this.state.country);
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
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.emailChange}
          />

          <label for="phone">PHONE:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={this.state.phone}
            onChange={this.phoneChange}
          />

          <label for="state">STATE:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={this.state.state}
            onChange={this.stateChange}
          />

          <label for="city">CITY:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={this.state.city}
            onChange={this.cityChange}
          />

          <label for="country">COUNTRY:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={this.state.country}
            onChange={this.countryChange}
          />
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default Form;
