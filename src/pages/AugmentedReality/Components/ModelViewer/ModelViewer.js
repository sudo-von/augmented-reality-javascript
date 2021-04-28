import React from 'react'
import Loader from '../../../../components/Loader/'

const ModelViewer = ( { src, iossrc, alt } ) => 
    <model-viewer
        src={ src ? src : "https://modelviewer.dev/shared-assets/models/reflective-sphere.gltf"}
        ios-src={ iossrc ? iossrc : "https://modelviewer.dev/shared-assets/models/Astronaut.glb"}
        alt={alt ? alt : "3D Model"}
        ar
        camera-controls
        auto-rotate
        autoplay>
    </model-viewer>

export default ModelViewer