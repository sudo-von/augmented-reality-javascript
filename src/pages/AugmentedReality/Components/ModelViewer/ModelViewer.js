import React from 'react'

const styles = {
    div: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modelViewer: {
        height: 350,
        width: 550
    }
}

const ModelViewer = ( { name, src, iossrc, alt } ) => 
    <div style={styles.div}>
        <model-viewer
            style={styles.modelViewer}
            src={ src ? src : "https://modelviewer.dev/shared-assets/models/reflective-sphere.gltf"}
            ios-src={ iossrc ? iossrc : "https://modelviewer.dev/shared-assets/models/Astronaut.glb"}
            alt={alt ? alt : "3D Model"}
            ar
            camera-controls
            auto-rotate
            autoplay>
        </model-viewer>
        <h2>{name}</h2>
    </div>

export default ModelViewer