import React from 'react'
/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import Navbar from '../../components/Navbar/'
import ModelViewer from './Components/ModelViewer/'

const styles = {
    grid: {
        container: {
            height: '100vh'
        },
        item: {
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'
        }
    }
}

const AugmentedReality = ( { theme, themeToggler } ) => 
    <React.Fragment>
        <Navbar theme={theme} themeToggler={themeToggler}/>
        <Grid container style={styles.container}>
            <Grid item xs={12} style={styles.item}>
                <ModelViewer/>
            </Grid>
        </Grid>
    </React.Fragment>    

export default AugmentedReality