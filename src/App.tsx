import React from 'react'
import { TodoContext } from './context'
import { TodoActions } from './context/todoActions'
import Components from './components'

function App() {
  const {
    actions,
    todos
  } = TodoActions()

  return (
    <TodoContext.Provider 
      value={{ 
        ...actions,
        todos, 
      }}
    >
      <Components.Sidebar />
      <Components.Workspace />
      <Components.TodoList />
    </TodoContext.Provider>
  )
}

export default App
