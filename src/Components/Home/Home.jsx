import React, { Component } from "react";
import Title from "./Title.jsx";
import Headers from "./Headers.jsx";
import dataObject from "../data";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dataObject,
    };
  }
  render() {
    return (
      <div>
        <Title />
        <table>
          <Headers />
          {this.state.data.map((player) => (
            <tr>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.medal}</td>
              <td>{player.type}</td>
              <td>{player.sports}</td>
              <td>{player.country}</td>
              <td>{player.age}</td>
              <td>{player.gender}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Home;
