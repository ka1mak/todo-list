import React from 'react'
import { useForm } from 'react-hook-form'
import { TodoProps } from '../types'
import { TodoContext } from '../context'
import { Form } from '../helpers'

import {
  Box,
  Button,
  TextField,
} from '@mui/material'

const Workspace: React.FC = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<TodoProps>()

  const { addNewTodo } = React.useContext(TodoContext)

  const onSubmit = (data: TodoProps) => {
    addNewTodo(data)
    reset({
      title: '',
      desc: '',
    })
  }
  
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '30px'
      }}
    >
      <form
        style={{
          width: 400,
          borderRadius: 8,
          boxShadow: '0 0px 4px rgb(0 0 0 / 10%), 0 0px 16px rgb(0 0 0 / 10%)',
          display: 'flex',
          flexDirection: 'column',
          padding: 20
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField 
          id='standard-basic' 
          label='Title' 
          variant='standard'
          {...register('title', Form.Options.title)}
          error={!!errors.title}
          helperText={errors.title && errors.title.message}
        />

        <TextField
          id='standard-basic' 
          label='Description' 
          variant='standard' 
          sx={{
            margin: '20px 0px'
          }}
          {...register('desc', Form.Options.desc)}
          error={!!errors.desc}
          helperText={errors.desc && errors.desc.message}
        />

        <Button 
          variant='contained'
          type='submit'
        >Add</Button>
      </form>

    </Box>
  )
}

export default Workspace
