import React, {useState, useContext} from 'react'
import { Notification } from '../components'
import {AlertColor} from '@mui/material'

type ContextProps = {
    getError: (msg: string) => void
    getSuccess: (msg: string) => void
}

const NotificationContext = React.createContext<ContextProps | null>(null)


export const NotificationProvider: React.FC<{children: JSX.Element}> = ({children}) => {

    
    const [msg, setMsg] = useState('')
    const [open, setOpen] = useState(false)
    const [severety, setSeverety] = useState<AlertColor | undefined>(undefined)
    
    const getError = (msg: string) => {
        setSeverety('error')
        setOpen(true)
        setMsg(msg)
    }

    const getSuccess = (msg: string) => {
        setSeverety('success')
        setOpen(true)
        setMsg(msg)
    }

    const handleClose = () => setOpen(false)
    
    
    
    const value = {
        getError,
        getSuccess
    }

    return (
        <NotificationContext.Provider value={value}>
            <Notification 
                handleClose={handleClose}
                open={open}
                severity={severety}
                msg={msg}
            />
                {children}
        </NotificationContext.Provider>
    )
}


export const useNotification = () => {
    const context = useContext(NotificationContext)
    if(!context) throw new Error('No existe contexto')
    return context
}