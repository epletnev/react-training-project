import React, { Component } from "react";

class Headers extends React.Component {
  render() {
    return (
      <tr>
        <th>SNo.</th>
        <th>Player name</th>
        <th>Medal</th>
        <th>Type(O/P)</th>
        <th>Sports</th>
        <th>Country</th>
        <th>Age</th>
        <th>Gender</th>
      </tr>
    );
  }
}

export default Headers;
