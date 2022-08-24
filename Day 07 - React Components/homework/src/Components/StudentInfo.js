import React, { Component } from "react";

class ListClass extends Component {
  render() {
    return (
      <table class="table">
        <thead>
          <tr class="d-flex border">
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        {this.props.listStudent.map((item, index) => {
          return (
            <tbody>
              <tr class="d-flex border">
                <th> {index + 1} </th>
                <td> {item.name} </td>
                <td> {item.age} </td>
                <td> {item.address} </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    );
  }
}
export default ListClass;
