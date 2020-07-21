import React, { useState, useEffect } from 'react';
import { AppWrapper, AppWrap } from './Component/style';
import TodoForm from './Component/TodoForm';
import TodoList from './Component/TodoList';
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);
  const [editItems, setEditItems] = useState({});

  const LOCAL_STORAGE_KEY = 'todos';
  useEffect(() => {
    const loadHistory = () => {
      try {
        // fires when app component mounts to the DOM
        const storageTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodo) {
          setTodos([...todos, storageTodo]);
        }
      } catch{
        console.error("Not a JSON response");
      }
    }
    loadHistory();
  }, [])


  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }

  const handleDelete = (key) => {
    const filterItems = todos.filter(item => item.key !== key)
    setTodos(filterItems);
  }
  // const updateHandle = (text, key) => {
  //   const updateTodos = todos.map(todo => {
  //     if (todo.key === key) {
  //       todo.text = text;
  //     }
  //     return todo;
  //   })
  //   setTodos(updateTodos);
  // }

  const updateHandle = (key) => {
    const filterItems = todos.filter(item => item.key !== key)
    setTodos(filterItems);
    const selectItems = todos.find(todo => todo.key === key);

    setEditItems(selectItems);
  }

  const clearAll = () => {
    setTodos([]);
  }


  return (
    <AppWrapper>
      <h2>Todo List</h2>
      <AppWrap>

        <TodoForm addTodo={addTodo}
          clearAll={clearAll} editItems={editItems}
        />
        <TodoList items={todos}
          handleDelete={handleDelete}
          updateHandle={updateHandle} />
      </AppWrap>
    </AppWrapper>
  );
}

export default App;
