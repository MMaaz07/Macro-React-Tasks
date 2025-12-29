import { useReducer, useState } from "react";

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false,
        },
      ];

    case "TOGGLE":
      return state.map(todo =>todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);

    case "REMOVE":
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
}

export function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim() === "") return;
    dispatch({ type: "ADD", payload: text });
    setText("");
  };

  return (
    <div>
      <h2>Todo App</h2>

      <input type="text" placeholder="Enter todo" value={text} onChange={e => setText(e.target.value)}/>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span onClick={() =>dispatch({ type: "TOGGLE", payload: todo.id })} style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer",}}>
              {todo.title}
            </span>
            <button onClick={() =>dispatch({ type: "REMOVE", payload: todo.id })}>❌ Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
