import React, {useState, useEffect} from 'react'
import {Card, CardMedia, CardContent, Typography, CardActions, Button, Divider} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { addToCart } from '../../redux/slices/car.tslice'
import { setItem } from '../../utils/localStorage'

type CardProps = {
    image: string,
    name: string,
    status: string,
    species: string, 
    id: number,
}

export const CardComponent: React.FC<CardProps> = ({image, name, species, status, id}) => {

    const [disableBtn, setDisableBtn] = useState<boolean>(false)
    const nagigate = useNavigate()
    const dispatch = useAppDispatch()
    const itemExiste = useAppSelector((state) => state.cartReducer)

    useEffect(() => {
        setDisableBtn(itemExiste.some((item) => item.id === id))
        setItem('cart', itemExiste)
    }, [itemExiste, id])

    const handleAddToCart = () => {
        dispatch(addToCart({
            id,
            name,
            image,
            info: status
        }))
    }

  return (
    <Card>
        <CardMedia component='img' 
            height='194'
            image={image}
            alt={name}
        />
        <CardContent>
            <Typography variant='h4' sx={{mb: 1.5}}> {name}</Typography>
            <Divider />
            <Typography sx={{mt: 1.5}}> Especie: {species}</Typography>
            <Typography sx={{mt: 1.5}}> Estado: {status}</Typography>
        </CardContent>
        <CardActions>
            <Button 
                size='small' 
                variant='contained' 
                fullWidth
                onClick={() => nagigate(`/character/${id}`)} 
            >
                {name}
            </Button>
            <Button
                fullWidth
                variant='outlined'
                size='small'
                disabled={disableBtn}
                onClick={handleAddToCart}
            >
                Add To cart
            </Button>
        </CardActions>
    </Card>
  )
}
