import React from 'react'
import {Snackbar, Alert, AlertColor, Typography} from '@mui/material'

type NotifiactionTypeProps = {
    open: boolean,
    msg: string,
    severity: AlertColor | undefined,
    handleClose: () => void
}


export const Notification: React.FC<NotifiactionTypeProps> = ({handleClose, msg, open, severity}) => {
  return (
    <Snackbar 
        anchorOrigin={{vertical: 'top', horizontal: 'center'}} 
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
    >
        <Alert onClose={handleClose} severity={severity}>
            <Typography>
                {msg}
            </Typography>
        </Alert>
    </Snackbar>
  )
}
