import React from 'react';
import InputMask from 'react-input-mask';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90px',
  },
}));
 
// Will work fine
export const VerifyInput = (props) => {
    const classes = useStyles();

    return(
        <InputMask mask="99-99-99" value={props.value} onChange={props.onChange}>
            {() => <TextField className={classes.root} label="SMS code" type="search" />}
        </InputMask>
    )
};