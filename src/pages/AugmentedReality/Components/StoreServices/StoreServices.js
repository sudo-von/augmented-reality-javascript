import React from 'react'
/* Material-ui. */
import Grid from "@material-ui/core/Grid"
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import PaymentIcon from '@material-ui/icons/Payment'
import CallIcon from '@material-ui/icons/Call'
import EventIcon from '@material-ui/icons/Event'

const styles = {
    grid: {
        container: {
            backgroundColor: "white",
            marginTop: 60,
            marginBottom: 60,
            padding: 15,
            paddinBottom: 0,
            textAlign: "center",
            boxShadow: "0 2px 2px 0 rgb(0 0 0 / 2%), 0 3px 1px -2px rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 8%)"
        }
    },
    h4: {
        marginBottom: 40
    }
}

const StoreDescription = () =>
    <Grid container direction="row" justify="center" alignItems="center" style={styles.grid.container}>
        <Grid item xs={12}>
            <h3 style={styles.h4}>Servicios</h3>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <LocalShippingIcon fontSize="large"/>
            <h5>LLEVAMOS TUS MUEBLES Y TE LOS INSTALAMOS</h5>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <PaymentIcon fontSize="large"/>
            <h5>ESQUEMAS FLEXIBLES DE FINANCIAMIENTO</h5>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <CallIcon fontSize="large"/>
            <h5>SERVICIO POST-VENTA ESPECIALIZADO</h5>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <EventIcon fontSize="large"/>
            <h5>AGENDA TU CITA EN SUCURSAL</h5>
        </Grid>
    </Grid>

export default StoreDescription