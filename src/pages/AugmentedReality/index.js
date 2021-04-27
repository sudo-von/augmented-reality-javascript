import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const AugmentedReality = () => 
    <Container>
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
    </Container>    

export default AugmentedReality