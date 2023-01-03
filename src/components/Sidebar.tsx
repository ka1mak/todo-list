import React from 'react'

import { 
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material'

import {
  LightbulbOutlined,
  DeleteOutline,
  CloseOutlined,
  MenuRounded,
} from '@mui/icons-material'

interface LinkProps {
  id: number
  primary: string
  icon: JSX.Element
}

const links: LinkProps[] = [
  {
    id: 1,
    icon: <LightbulbOutlined />,
    primary: 'Заметки',
  },
  {
    id: 2,
    icon: <DeleteOutline />,
    primary: 'Корзина',
  },
  {
    id: 3,
    icon: <LightbulbOutlined />,
    primary: 'Заметки',
  },
  {
    id: 4,
    icon: <DeleteOutline />,
    primary: 'Корзина',
  },
]

const Sidebar: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false)

  const modalClose = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "Escape") {
      setOpen(false)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <Box 
      onKeyDown={modalClose}
      role="presentation"
      sx={{
        borderBottom: '1px solid rgba(0, 0, 0, 0.3)'
      }}
    >
      <Drawer
        open={open}
        onClose={modalClose}
        onClick={handleClose}
        ModalProps={{
          onBackdropClick: () => handleClose()
        }}
      >
        <List
          sx={{
            width: 250,
            textAlign: 'right',
          }}
        >
          <Button
            onClick={handleClose}
            sx={{
              textAlign: 'right'
            }}
          ><CloseOutlined /></Button>
          {
            links.map(({ id, icon, primary }) => (
              <ListItem key={id} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={primary} />
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 40px',
        }}
      >
        <Button onClick={handleOpen}>
          <MenuRounded sx={{ color: 'black', fontSize: 32 }} />
        </Button>
        <img src="./logo.png" alt="logo" />
        <h1 style={{ marginLeft: '20px' }}>Keep</h1>
      </Box>
    </Box>
  )
}

export default Sidebar
