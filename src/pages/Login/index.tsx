import React from 'react'
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import { useNotification } from '../../context/notifiaction.context'
import { LoginValidate } from '../../utils/validateForm'
import { useFormik } from 'formik'


type LoginType = {
  username: string,
  password: string
}

export const LoginPage: React.FC = () => {

  // const {getError, getSuccess} = useNotification()
  // const [loginData, setLoginData] = useState<LoginType>({
  //   username: '',
  //   password: ''
  // })

  // const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setLoginData({...loginData, [e.target.name]: e.target.value})
  // }

  // const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
  //   e.preventDefault()
  //   // getSuccess(JSON.stringify(loginData))
  //   LoginValidate.validate(loginData).then(()=> {
  //     getSuccess(JSON.stringify(loginData))
  //   }) .catch((error) => {
  //     getError(error.message)
  //   })
  // }

  const {getSuccess} = useNotification()
  const formik = useFormik<LoginType>({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: LoginValidate,
    onSubmit: (value: LoginType) => {
      getSuccess(JSON.stringify(value))
    }
  })
  

  return (
    <div>
        <Container  maxWidth='sm'>
            <Grid 
              container 
              direction='column' 
              alignItems='center' 
              justifyContent='center'
              sx={{minHeight: '100vh'}}
            >
              <Grid item>
                <Paper sx={{padding: '2em', borderRadius: '0.5em'}}>
                  <Typography sx={{mt:1, mb:1}}  variant='h4'>Iniciar Session</Typography>
                  <Box component='form' onSubmit={formik.handleSubmit}>
                      <TextField
                        name='username'
                        margin='normal' 
                        fullWidth 
                        label='Email | Username' 
                        sx={{mt:2, mb:1.5}} 
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                      />
                      <TextField
                        name='password'
                        type='password' 
                        margin='normal'
                        fullWidth 
                        label='Password' 
                        sx={{mt:1.5, mb:1.5}} 
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                      />
                    <Button 
                      fullWidth 
                      type='submit' 
                      variant='contained' 
                      sx={{mt:1.5, mb:3}}
                    > Iniciar Session
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
        </Container>
    </div>
  )
}
