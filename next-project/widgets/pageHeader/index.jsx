import React from 'react';
import Link from 'next/link'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        marginBottom: "10px"
    },
    typographyStyles: {
        flex: 1,
        cursor: "pointer"
    }
}));

const Header = () => {
    const classes = useStyles();
    
    return(
        <AppBar position="static" className={classes.root} color="inherit">
        <Toolbar>
            <Link href="/">
               <Typography className={classes.typographyStyles} variant="h6">
                    Blogs 
                </Typography>
            </Link>
            <Link href='/contact'><Button color="inherit">Contact</Button></Link>
        </Toolbar>
        </AppBar>
    )
}

export default Header;