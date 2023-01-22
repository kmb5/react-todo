import './App.css'

import { TodoList } from './components/TodoList'

function App() {

  return (
    <div className="container">
      <h1 className="headline-primary">My first React-TS TODO App</h1>

      <TodoList />
    </div>
  )
}

export default App
