import { Grid } from '@material-ui/core';
import React from 'react';
import MediaCard from './card'

const Cards = ({ data }) => {

    return (
        <Grid container spacing={2}>
            {
                data.map((el, index) => (
                    <Grid key={index} item md={4} sm={6} xs={12}>
                        <MediaCard id={el.id} title={el.title} body={el.body}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Cards;