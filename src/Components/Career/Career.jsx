import React, { Component } from "react";
import Form from "../Form/Form.jsx";

class Career extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <form className="form" action="/">
          <label for="skill">SKILL:</label>
          <select id="skill" name="skill">
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="react">REACT</option>
            <option value="javascript">JAVASCRIPT</option>
          </select>

          <label for="degree">DEGREE:</label>
          <select id="degree" name="degree">
            <option value="bachelors">Bachelors</option>
            <option value="masters">Masters</option>
            <option value="phd">PhD</option>
          </select>

          <label for="experience">EXPERIENCE:</label>
          <select id="experience" name="experience">
            <option value="intern">Intern</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Career;
