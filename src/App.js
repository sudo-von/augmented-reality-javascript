import React, { Component } from 'react'
import './App.css'
class App extends Component {
  render() {
    return (
      <div className="App">
          <model-viewer
            src="https://modelviewer.dev/examples/loading/../../shared-assets/models/reflective-sphere.gltf"
            ios-src=".https://modelviewer.dev/examples/loading/../../shared-assets/models/Astronaut.glb"
            alt='model name'
            ar
            loading='lazy'
            camera-controls
            autoplay>
          </model-viewer>
      </div>
    );
  }
}

export default App;
