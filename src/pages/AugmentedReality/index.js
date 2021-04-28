import React from 'react'
/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import Navbar from '../../components/Navbar/'
import ModelViewer from './Components/ModelViewer/'

const styles = {
    grid: {
        container: {
            height: '80vh'
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
        <Grid container style={styles.grid.container}>
            <Grid item xs={12} style={styles.grid.item}>
                <ModelViewer/>
            </Grid>
        </Grid>
    </React.Fragment>    

export default AugmentedReality