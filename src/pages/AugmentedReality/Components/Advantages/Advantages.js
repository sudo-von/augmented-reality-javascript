import React from 'react'
/* Material-ui. */
import Grid from "@material-ui/core/Grid"
import Avatar from '@material-ui/core/Avatar'

const styles = {
    grid: {
        container: {
            marginBottom: 60,
        },
        item: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
    },
    iframe: {
        width: "100%",
        height: 250,
        borderRadius: 3,
        boxShadow: "0 2px 2px 0 rgb(0 0 0 / 2%), 0 3px 1px -2px rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 8%)"
    },
    h4: {
        textAlign: "center"
    }
}

const Advantages = ( { avatarURL } ) =>
    <Grid container direction="row" justifyContent="center" alignItems="center" style={styles.grid.container}>
        <Grid xs={12} sm={6} item style={styles.grid.item}>
            <iframe style={styles.iframe} src="https://www.youtube.com/embed/ixxaoJpWB_0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Grid>
        <Grid xs={12} sm={6} item style={styles.grid.item}>
            <div>
                <h4 style={styles.h4}>¿POR QUÉ ELEGIR MUEBLES MAYORAL?</h4>
                <ul>
                    <li>Precios accesibles para todas las familias.</li>
                    <li>Entrega especializada.</li>
                    <li>Productos de alta calidad.</li>
                    <li>La mueblería más grande de México.</li>
                </ul>
            </div>
        </Grid>
    </Grid>


export default Advantages