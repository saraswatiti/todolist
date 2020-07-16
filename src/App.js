import React, { useState, useEffect } from 'react';
import { AppWrapper, AppWrap } from './Component/style';
import TodoForm from './Component/TodoForm';
import TodoList from './Component/TodoList';
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);

  const LOCAL_STORAGE_KEY = '';
  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodo) {
      setTodos(storageTodo);
    }
  }, [])
  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const handleDelete = (key) => {
    console.log(key);
    const filterItems = todos.filter(item => item.key !== key)
    setTodos(filterItems);
  }
  const updateHandle = (text, key) => {

    const updateTodos = todos.map(todo => {
      if (todo.key === key) {
        todo.text = text;
      }
      return todo;
    })
    setTodos(updateTodos);
  }

  return (
    <AppWrapper>
      <h2>Todo List</h2>
      <AppWrap>

        <TodoForm addTodo={addTodo} />
        <TodoList items={todos}
          handleDelete={handleDelete}
          updateHandle={updateHandle} />
      </AppWrap>
    </AppWrapper>
  );
}

export default App;
