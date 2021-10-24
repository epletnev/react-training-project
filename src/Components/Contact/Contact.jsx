import React, { Component } from "react";
import Form from "../Form/Form.jsx";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <form className="form">
          <label for="contact">CONTACT:</label>
          <input type="text" id="contact" name="contact" value="Contact" />
        </form>
      </div>
    );
  }
}

export default Contact;
