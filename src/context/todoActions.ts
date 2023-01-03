import React from 'react'
import { TodoProps } from '../types'

export const TodoActions = () => {
  const [todos, setTodos] = React.useState<TodoProps[]>([])

  const addNewTodo = (data: TodoProps) => {
    setTodos(prev => [
      ...prev,
      {
        id: new Date().getTime(),
        title: data.title,
        desc: data.desc,
        completed: false
      }
    ])
  }

  const toggleCompleted = (id: number) => {
    setTodos((prev: TodoProps[]) => {
      return prev.map((item) => {
        if (item.id !== id) return item

        return {
          ...item,
          completed: !item.completed
        }
      })
    })
  }

  const editTodo = (data: TodoProps) => {
    setTodos((prev: TodoProps[]) => {
      return prev.map((item) => {
        if (item.id !== data.id) return item
        
        return {
          ...item,
          ...data,
        }
      })
    })
  }

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(item => item.id !== id))
  }

  return {
    actions: {
      addNewTodo,
      toggleCompleted,
      deleteTodo,
      editTodo,
    },
    todos: todos,
  }
}
