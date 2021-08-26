import React, { useContext } from 'react';
import Link from 'next/link'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AuthContext from './../../store/auth-context';

const useStyles = makeStyles((theme) => ({
    root:{
        marginBottom: "10px"
    },
    typoStyles: {
        flex: 1,
        cursor: "pointer"
    }
}));

const Header = () => {
    const classes = useStyles();
    const authCtx = useContext(AuthContext)

    return(
        <AppBar position="static" className={classes.root} color="inherit">
        <Toolbar>
            <Typography className={classes.typoStyles} variant="h6">
                <Link href="/"><Button color="inherit">Blogs</Button></Link>
                {authCtx.isLoggedIn && (<Link href='/create'><Button color="inherit">create</Button></Link> )}
                <Link href='/contact'><Button color="inherit">Contact</Button></Link>
            </Typography>
            {!authCtx.isLoggedIn && (<Link href='/login'><Button color="inherit">Login</Button></Link>)}
            {authCtx.isLoggedIn && (<Link href='/login'><Button color="inherit" onClick={() => authCtx.logout()}>Logout</Button></Link>)}
        </Toolbar>
        </AppBar>
    )
}

export default Header;