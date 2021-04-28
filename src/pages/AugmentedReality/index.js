import React from 'react'
/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import Navbar from '../../components/Navbar/'
import ModelViewer from './Components/ModelViewer/'

const AugmentedReality = ( { theme, themeToggler } ) => 
    <React.Fragment>
        <Navbar theme={theme} themeToggler={themeToggler}/>
        <Grid container style={{height: '100vh'}}>
            <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ModelViewer/>
            </Grid>
        </Grid>
    </React.Fragment>    

export default AugmentedReality