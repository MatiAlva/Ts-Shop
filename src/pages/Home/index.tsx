import React, {useEffect, useState} from 'react'
import { Box, Button, CircularProgress, Container, Grid, Pagination } from '@mui/material'
import { CardComponent, HeaderComponents } from '../../components'
import { characters } from '../../api/characters'
import { TypeCharacter } from './interface/character.interface'


export const HomePage: React.FC = () => {

  const [count, setCount] = useState<number>(1)
  const [page, setPage] = useState<number>(1)
  const [allcharacters, setAllCharacters] = useState<TypeCharacter[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    characters.getAll({page}).then((r)=> {
      setCount(r.data.info.pages)
      setAllCharacters(r.data.results)
      setTimeout(() => setLoading(false), 1000)
    }).catch((error) => {
      console.log(error)
    })

  }, [page])
  
  const handleChange= (e:React.ChangeEvent<unknown> ,value:number) => {
    console.log(e)
    setPage(value)
  }

  return (
    <div>
        <Container maxWidth='xl'>
          <HeaderComponents 
            title='Hola Mundo' 
            description='  STACK: React, Ts, Redux Toolkit, Axios, MUI, Yup, LocalStorage, Formik'
            element= {<Button fullWidth variant='contained'>Bienvenido al Shopp de Rick and Morty</Button>}
            />
            {loading ? (
                <Box sx={{display: 'flex', justifyContent:'center', mt: 4}}>
                  <CircularProgress />
                </Box>
              ): (
              <>
            <div>
              {
                allcharacters?.length !== 0 ? (
                <Grid container sx={{my:3}} spacing={2} direction='row'>
                  {allcharacters!.map((character) => (
                    <Grid key={character.id}  item xs={12} sm={4}>
                        <CardComponent
                          id={character.id}
                          image={character.image} 
                          name={character.name} 
                          species={character.species} 
                          status={character.status}
                        />
                      </Grid>
                    ))}
                  </Grid>
                ) : <div>No Existe Data</div>
              }
            </div>
            <Box sx={{width: '100%', display:'flex', justifyContent: 'center'}}>
            <Pagination 
              count={count} 
              page={page} 
              onChange={handleChange}
              variant='outlined'
              color='primary'
              sx={{mb:3}}
              size='medium'
            />
            </Box>
            </>
            )} 
        </Container>
    </div>
  )
}
