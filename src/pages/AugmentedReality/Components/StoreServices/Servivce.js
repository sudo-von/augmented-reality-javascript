import React from 'react'
/* Material-ui. */
import Grid from "@material-ui/core/Grid"

const Service = ( { icon, description } ) =>
    <Grid item xs={12} sm={6} md={3}>
        { icon }
        <h5>{ description }</h5>
    </Grid>

export default Service