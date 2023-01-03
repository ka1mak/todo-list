import React, { useContext } from 'react'
import { TodoProps } from '../types'
import { useForm } from 'react-hook-form'
import { Form } from '../helpers'
import { TodoContext } from '../context'

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
} from '@mui/material'

import {
  DeleteOutlineRounded,
  TaskOutlined,
  CreateOutlined,
  CheckOutlined,
} from '@mui/icons-material'

const TodoItem: React.FC<TodoProps> = ({ id, title, desc, completed }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<TodoProps>()

  const { toggleCompleted, editTodo, deleteTodo } = useContext(TodoContext)

  const [isShow, setIsShow] = React.useState<boolean>(false)

  const handleChange = () => {
    setIsShow(prev => !prev)
  }

  const onSubmit = (data: TodoProps) => {
    if (!id) return
    editTodo({
      ...data,
      id,
    })
    reset({
      title: '',
      desc: '',
    })
    handleChange()
  }

  return (
    <Card
      sx={{ 
        width: '320px', 
        margin: '30px auto',
        boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 0px 16px rgb(0 0 0 / 10%)',
        backgroundColor: `${completed && '#90ee90'}`,
        color: `${completed && '#fff'}`,
      }}
    >
      <CardContent>
          {
            isShow ? (
              <TextField
                sx={{
                  width: '100%'
                }}
                size="small"
                label={title}
                {...register('title', Form.Options.title)}
                error={!!errors.title}
                helperText={errors.title && errors.title.message}
              />
            ) : (
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
            )
          }
      </CardContent>
      <CardContent>
        {
          isShow ? (
            <TextField
              sx={{
                width: '100%'
              }}
              size="small"
              label={desc}
              {...register('desc', Form.Options.desc)}
              error={!!errors.desc}
              helperText={errors.desc && errors.desc.message}
            />
          ) : (
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{
                color: `${completed && '#fff'}`,
                fontWeight: '300'
              }}
            >
              {desc}
            </Typography>
          )
        }
      </CardContent>
      <CardActions>
        {
          !completed && (
            <Button 
              size="small" 
              color="primary"
              sx={{ marginLeft: 'auto' }}
            >
            {
              isShow ? (
                <CheckOutlined
                  onClick={handleSubmit(onSubmit)}
                />
              ) : (
                <CreateOutlined
                  onClick={handleChange}
                />
              )
            }
            </Button>
          )
        }
        <Button 
          size="small" 
          color="primary"
          sx={{ marginLeft: 'auto' }}
          onClick={() => deleteTodo(id)}
        >
          <DeleteOutlineRounded
            sx={{
              color: `${completed && '#fff'}`,
            }}
          />
        </Button>
        <Button 
          size="small" 
          color="primary"
          sx={{ marginLeft: 'auto' }}
          onClick={() => toggleCompleted(id)}
        >
          <TaskOutlined
            sx={{
              color: `${completed && '#fff'}`,
            }}
          />
        </Button>
      </CardActions>
    </Card>
  )
}

export default TodoItem
