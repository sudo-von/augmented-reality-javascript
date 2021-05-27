import React from 'react'
/* Custom components. */
import Service from './Servivce'
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
        <Service description="LLEVAMOS TUS MUEBLES Y TE LOS INSTALAMOS" icon={<LocalShippingIcon fontSize="large"/>}/>
        <Service description="ESQUEMAS FLEXIBLES DE FINANCIAMIENTO" icon={<PaymentIcon fontSize="large"/>}/>
        <Service description="SERVICIO POST-VENTA ESPECIALIZADO" icon={<CallIcon fontSize="large"/>}/>
        <Service description="AGENDA TU CITA EN SUCURSA" icon={<EventIcon fontSize="large"/>}/>
    </Grid>

export default StoreDescription