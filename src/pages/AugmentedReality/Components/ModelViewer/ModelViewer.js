import React from 'react'

const ModelViewer = ( { src, iossrc, alt, loading } ) => 
    <model-viewer
        src={ src ? src : "https://modelviewer.dev/shared-assets/models/reflective-sphere.gltf"}
        ios-src={ iossrc ? iossrc : "https://modelviewer.dev/shared-assets/models/Astronaut.glb"}
        alt={alt}
        ar
        loading={loading ? loading : 'lazy'}
        camera-controls
        autoplay>
    </model-viewer>

export default ModelViewer