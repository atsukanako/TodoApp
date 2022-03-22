import React from "react";

import "./styles.css";
import { AddTodo } from "./components/AddTodo";
import { List } from "./components/List";

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 0
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>TodoApp</h2>
        <AddTodo addTodos={this.addTodos} />
        <List todos={todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }

  addTodos = (title) => {
    const { todos, nextId } = this.state;
    this.setState({
      todos: [...todos, { id: nextId + 1, title: title }],
      nextId: nextId + 1
    });
  };

  deleteTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => {
        return todo.id !== id;
      })
    });
  };
}
