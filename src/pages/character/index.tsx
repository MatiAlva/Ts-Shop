import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { characters } from '../../api/characters'
import { ICharacter } from './interface/character.interface'
import {Box, CircularProgress, Container, Grid, Typography, Divider, Chip} from '@mui/material'

export const CharacterPage:React.FC = () => {
    const {id} = useParams()
    const [loading, setLoading] = useState<boolean>(true)
    const [character, setCharacter] = useState<ICharacter | null>(null)

    useEffect(() => {
        characters.getById({id})
        .then((r)=> {
            setCharacter(r.data)
            setLoading(false)
        })
        .catch((error)=> console.log(error))
    }, [id])
    

  return (
    <Box sx={{width: '100%'}}>
        <Container maxWidth= 'xl'>
            {
                loading ? (
                    <Box sx={{display: 'flex', justifyContent:'center', mt: 4}}>
                        <CircularProgress />
                    </Box>
                ) 
                : (
                <Grid container columnSpacing={2} sx={{mt:2, display: 'flex', justifyContent:'space-around', flexDirection:'column'}}>
                    <Grid item xs={5} sm={12}>
                        <Typography variant='h1'>{character!.name}</Typography>
                        <Divider />
                        <Typography variant='h6'>{character!.origin.name}</Typography>
                        <Box sx={{mt:2}}>
                            <Chip 
                                color='primary'
                                variant='outlined' 
                                label={character?.status} 
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={3} sm={5} sx={{mt:3}}>
                        <img src={character!.image} alt={character!.name} style={{width: '100%', borderRadius: '0.5em'}}/>
                    </Grid>
                </Grid>
                )
            }
        </Container>
    </Box>
  )
}
