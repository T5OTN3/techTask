import React, { forwardRef } from 'react';
import { InputAdornment, TextField } from '@material-ui/core/';


export const InputPhone = forwardRef((props, ref) => {
    return(
        <TextField variant="outlined" margin="normal" InputProps={{startAdornment: <InputAdornment position="start">+995</InputAdornment>,}} inputRef={ref} fullWidth {...props} />
    )
});