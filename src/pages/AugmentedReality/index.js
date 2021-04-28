import React, { useState } from 'react'
/* Material-ui. */
import Grid from '@material-ui/core/Grid'
import Carousel from 'react-material-ui-carousel'
/* Custom components. */
import Navbar from '../../components/Navbar/'
import ModelViewer from './Components/ModelViewer/'
/* Assets. */
import androidJelly from '../../assets/android/jelly.gltf'
import iosJelly from '../../assets/ios/jelly.glb'
import androidFurniture from '../../assets/android/furniture.gltf'
import iosFurniture from '../../assets/ios/furniture.glb'
import androidArmchair from '../../assets/android/armchair.gltf'
import iosArmchair from '../../assets/ios/armchair.glb'

const styles = {
    grid: {
        container: {
            height: '90vh',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'
        },
        item: {
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'
        }
    }
}

const AugmentedReality = ( { theme, themeToggler } ) => {

    /* Hook. */
    const list = [
        {
            name: "Mesa con gelatina", 
            android: androidJelly,
            ios: iosJelly
        },
        {
            name: "Estante con televisión", 
            android: androidFurniture,
            ios: iosFurniture
        },
        {
            name: "Sillón", 
            android: androidArmchair,
            ios: iosArmchair
        },
    ]
    const [assets, _ ] = useState(list)

    return(
        <React.Fragment>
            <Navbar theme={theme} themeToggler={themeToggler}/>
            <Grid container style={styles.grid.container}>
                <Grid xs={12} item style={styles.grid.item}>
                    <Carousel swipe={false} autoPlay={false} navButtonsAlwaysVisible={true}>
                        {
                            assets.map( (asset, i) => <ModelViewer key={i} name={asset.name} src={asset.android} iossrc={asset.ios}/> )
                        }
                    </Carousel>
                </Grid>
            </Grid>
        </React.Fragment>    
    )
}

export default AugmentedReality