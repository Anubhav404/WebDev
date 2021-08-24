import React from "react"
import "../src/App.css"
import AddTodo from "./components/AddTodo"
import ListTodo from "./components/ListTodo"
import store from "./store"
import { Provider } from "react-redux"



const App = () => {
  return (
    <div className="App">
    <h2>Todo List</h2>
    <AddTodo />
    <ListTodo />
    </div>
  );
}

export default App;
