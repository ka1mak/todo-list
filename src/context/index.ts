import { createContext } from 'react'
import { TodoProps } from '../types'

type Prop = {
  addNewTodo: (data: TodoProps) => void
  toggleCompleted: (id: number) => void
  editTodo: (data: TodoProps) => void
  deleteTodo: (id: number) => void
  todos: TodoProps[]
}

const Action: Prop = {
  addNewTodo: (data) => {},
  toggleCompleted: (id) => {},
  editTodo: (id) => {},
  deleteTodo: (id) => {},
  todos: [],
}

export const TodoContext = createContext(Action)
