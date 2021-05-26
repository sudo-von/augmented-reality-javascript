import React from 'react'

const styles = {
    img: {
        width: "100%",
        heigth: 200
    },
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
  
const ModelViewer = ( { name, img, android_model, ios_model } ) =>
    <div style={styles.div}>
        <model-viewer
            style={styles.modelViewer}
            loading="eager"
            poster={img} 
            src={ android_model ? android_model : "https://modelviewer.dev/shared-assets/models/reflective-sphere.gltf"}
            ios-src={ ios_model ? ios_model : "https://modelviewer.dev/shared-assets/models/Astronaut.glb"}
            ar
            atl={ name ? `${name}-model` : "model"}
            camera-controls
            auto-rotate
            autoplay>
        </model-viewer>
        <h2>{name}</h2>
    </div>


export default ModelViewer