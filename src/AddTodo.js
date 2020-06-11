import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    content: "",
  };
  handelSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    document.querySelector("input").value = "";
  };
  handelChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <label>Add new todo</label>
          <input type="text" onChange={this.handelChange} />
        </form>
      </div>
    );
  }
}
