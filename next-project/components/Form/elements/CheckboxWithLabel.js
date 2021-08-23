import React, { forwardRef } from 'react';
import { Checkbox } from '@material-ui/core/';
import { Typography } from '@material-ui/core';


export const CheckboxWithLabel = forwardRef((props, ref) => {
    return(
      <div>
        <Checkbox inputRef={ref} {...props}/>
        <label htmlFor={props.id}>{props.label}</label>
        <Typography variant="subtitle1" component="div" color="error" >{props.helpertext}</Typography>
      </div>
    )
});