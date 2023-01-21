import * as React from 'react';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { TodoCard } from './components/TodoCard'
import { TodoList } from './components/TodoList'
import { NewTodo } from './components/NewTodo'

import type { ITodo, ITodoList } from './components/TodoList'

function App() {

  const [todoText, setTodoText] = React.useState<string>('')
  const [todos, setTodo] = React.useState<ITodoList>([])

  const handleAddTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    const td: ITodo = { todoText: todoText }
    todos.push(td)
    setTodo(todos)
    setTodoText('')
  }

  const handleType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value)
  }



  return (
    <div className="App">

      <TodoList todoList={todos} />
      <NewTodo value={todoText} onButtonPress={handleAddTodo} onType={handleType} />
    </div>
  )
}

export default App