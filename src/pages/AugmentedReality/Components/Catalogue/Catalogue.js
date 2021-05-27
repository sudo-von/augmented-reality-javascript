import React from 'react'
/* Custom components. */
import ModelViewerCard from '../ModelViewer'
/* Material-ui. */
import Grid from "@material-ui/core/Grid"
/* Styled-components. */
import { useTheme } from 'styled-components'

const Catalogue = ( { furniture } ) => {

    const currentTheme = useTheme()
    const styles = {
        header: {
            lineHeight: .3,
            marginBottom: 20,
            small: {
                fontSize: 10
            },
        },
        body: {
            fontSize: 14
        },
        grid: {
            container: {
                background: currentTheme.card.background_color,
                marginTop: 60,
                marginBottom: 60,
                padding: 15,
                paddinBottom: 0,
                textAlign: "center",
                boxShadow: "0 2px 2px 0 rgb(0 0 0 / 2%), 0 3px 1px -2px rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 8%)"
            }
        },
        img: {
            width: "100%",
            borderRadius: 3,
            boxShadow: "0 2px 2px 0 rgb(0 0 0 / 10%), 0 3px 1px -2px rgb(0 0 0 / 10%), 0 1px 5px 0 rgb(0 0 0 / 20%)"
        }
    }

    return(
        <Grid container direction="row" justify="center" alignItems="center" style={styles.grid.container}>
            <Grid item xs={12} style={styles.header}>
                <h2>Catálogo</h2>
                <small style={styles.header.small}>Explora nuestro catálogo de muebles.</small>
            </Grid>
            <Grid item xs={12} style={styles.body}>
                <p>Todos nuestros muebles cuentan con un <b>modelo de realidad aumentada</b> que te permitirá ver el mueble desde <b>diferentes perspectivas</b>.
                <br/>Lo único que necesitas hacer es seleccionar la opción <b>"Ver modelo en 3D"</b> del mueble que te gustó para poder visualizarlo.</p>
            </Grid>
            {furniture && furniture.map( pieceOfFurniture => 
                <Grid key={pieceOfFurniture.id} xs={12} sm={6} md={4} item style={{padding: 10}}>
                    <ModelViewerCard pieceOfFurniture={pieceOfFurniture}/>
                </Grid>
            )}
        </Grid>
    )
}

export default Catalogue