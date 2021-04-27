import React from 'react'
/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import Navbar from '../../components/Navbar/'

const AugmentedReality = ( { theme, themeToggler } ) => 
    <React.Fragment>
        <Navbar theme={theme} themeToggler={themeToggler}/>
        <Grid container style={{height: '100vh'}}>
            <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <model-viewer
                    src="https://modelviewer.dev/examples/loading/../../shared-assets/models/reflective-sphere.gltf"
                    ios-src="https://modelviewer.dev/examples/loading/../../shared-assets/models/Astronaut.glb"
                    alt='model name'
                    ar
                    loading='lazy'
                    camera-controls
                    autoplay>
                </model-viewer>
            </Grid>
        </Grid>
    </React.Fragment>    

export default AugmentedReality