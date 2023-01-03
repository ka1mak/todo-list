import React from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from '../context'

import Box from '@mui/material/Box'
import { TextField } from '@mui/material'

const TodoList: React.FC = () => {
  const { todos } = React.useContext(TodoContext)
  const [search, setSearch] = React.useState<string>('')
  console.log(search)

  return (
    <div>
      <TextField 
        id='standard-basic' 
        label='Search...' 
        variant='standard'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          marginLeft: '50%',
          transform: 'translate(-50%)',
          width: '40%',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '20px 100px',
        }}
      >
        {
          todos
          .filter((todo) => todo.title.toLocaleLowerCase().includes(search.toLowerCase()) && todo)
          .map((todo) => (
            <TodoItem 
              key={todo.id}
              {...todo}
            />
          ))
        }
      </Box>
    </div>
  )
}

export default TodoList
