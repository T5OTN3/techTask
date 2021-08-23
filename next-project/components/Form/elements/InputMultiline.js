import React, { forwardRef } from 'react';
import { TextField } from '@material-ui/core/';


export const InputMultiline = forwardRef((props, ref) => {
    return(
        <TextField multiline margin="normal" fullWidth rows={8} variant="outlined" inputRef={ref} {...props} />
    )
});