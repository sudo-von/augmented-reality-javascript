import React from 'react'

const AugmentedReality = () => 
    <div className="App">
        <model-viewer
            src="https://modelviewer.dev/examples/loading/../../shared-assets/models/reflective-sphere.gltf"
            ios-src="https://modelviewer.dev/examples/loading/../../shared-assets/models/Astronaut.glb"
            alt='model name'
            ar
            loading='lazy'
            camera-controls
            autoplay>
        </model-viewer>
    </div>    

export default AugmentedReality