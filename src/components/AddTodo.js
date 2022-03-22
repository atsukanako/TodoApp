import React from "react";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <div>
        <h2>AddTodo</h2>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add to todo list</button>
      </div>
    );
  }

  handleChange = (event) => {
    const title = event.target.value;
    this.setState({ title: title });
  };

  handleClick = (event) => {
    this.props.addTodos(this.state.title);
    this.setState({ title: "" });
  };
}
