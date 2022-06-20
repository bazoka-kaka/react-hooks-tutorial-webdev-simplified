import React, { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, addTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

const addTodo = (name) => {
  return { id: Date.now(), name: name, completed: false };
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  };
  const toggleTodo = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: id } });
  };
  const deleteTodo = (id) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id } });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {todos.map((todo) => {
        return (
          <pre
            key={todo.id}
            style={{ color: !todo.completed ? "#000" : "#999" }}
          >
            {todo.name}{" "}
            <button onClick={() => toggleTodo(todo.id)}>toggle</button>{" "}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </pre>
        );
      })}
    </>
  );
};

export default App;
