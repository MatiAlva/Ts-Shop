import { AppBar, Box, Toolbar , Badge, Container, Grid, Button, IconButton, Typography, Stack} from '@mui/material'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { CartComponent } from './Cart'
import { useAppSelector } from '../redux/hooks'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const Navbar:React.FC = () => {

   const navigate = useNavigate()
   const items = useAppSelector((state) => state.cartReducer)
   const [open, setOpen] = useState<boolean>(false) 

   const handleStateViewDrawer = () => {
    setOpen((state) => !state)
   }

  return (
    <Box sx={{flexGrow:1}} >
        <AppBar position='sticky'>
            <Toolbar>
                <Container maxWidth= 'xl'>
                    <Grid 
                        container 
                        direction='row' 
                        justifyContent='space-between' 
                        alignItems='center'
                    >
                        <Grid item>
                            <Typography>
                                Matias
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Stack direction='row' spacing={2}>
                                <IconButton
                                    color='primary'
                                    onClick={() => handleStateViewDrawer()}
                                >
                                    <Badge
                                        color='error'
                                        badgeContent={items.length}
                                    >
                                        <ShoppingCartOutlinedIcon />
                                    </Badge>
                                </IconButton>
                                <Button variant='contained' onClick={() => navigate('login')}>Login</Button>
                                <Button variant='outlined' onClick={() => navigate('login')}>Register</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
        <CartComponent
        open={open}
        handleStateViewDrawer={handleStateViewDrawer}
      />
    </Box>
  )
}
