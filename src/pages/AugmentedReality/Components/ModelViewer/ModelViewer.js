import React from 'react'
import Loader from '../../../../components/Loader/'

const ModelViewer = ( { src, iossrc, alt, reveal, loading } ) => 
    <model-viewer
        src={ src ? src : "https://modelviewer.dev/shared-assets/models/reflective-sphere.gltf"}
        ios-src={ iossrc ? iossrc : "https://modelviewer.dev/shared-assets/models/Astronaut.glb"}
        alt={alt ? alt : "model"}
        reveal={reveal ? reveal : 'auto'}
        ar
        loading={loading ? loading : 'auto'}
        camera-controls
        auto-rotate
        autoplay>
        <Loader slot="progress-bar"/>
    </model-viewer>

export default ModelViewer