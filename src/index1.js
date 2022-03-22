import React from "react";
import { render } from "react-dom";
import "./styles.css";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: { id: "", title: "" },
      todos: [],
      nextId: 1
    };
  }

  render() {
    return (
      <div>
        <h2>TodoApp</h2>

        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.newTodo.title}
        />
        <button onClick={this.onClickAdd}>Add to todo list</button>

        <ul>
          {this.state.todos.map((todo) => {
            return (
              <li key={todo.id}>
                #{todo.id} {todo.title}{" "}
                <button
                  onClick={() => {
                    this.setState({
                      todos: this.state.todos.filter(
                        (output) => output.id !== todo.id
                      )
                    });
                  }}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({
      newTodo: {
        title: event.target.value
      }
    });
  };

  onClickAdd = () => {
    this.setState({ nextId: this.state.nextId + 1 });
    this.setState({
      todos: [
        ...this.state.todos,
        { id: this.state.nextId, title: this.state.newTodo.title }
      ]
    });
  };
}

render(<TodoApp />, document.getElementById("root"));
