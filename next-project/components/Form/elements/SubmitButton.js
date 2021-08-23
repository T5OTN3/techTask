import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3,0,2)
    }
}));

export const SubmitButton = ({ children, ...props }) => {
    const styles = useStyles();

    return (
        <Button className={styles.root} type="submit" fullWidth variant="contained" color="primery" {...props} >
            {children}
        </Button>
    )
};