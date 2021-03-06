import React from 'react'
/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import Navbar from '../../components/Navbar/'
import StoreDescription from './Components/StoreDescription/'
import StoreServices from './Components/StoreServices/'
import Advantages from './Components/Advantages/'
import Catalogue from './Components/Catalogue/'
/* Custom hooks. */
import { useFile } from '../../hooks/useFile'

const styles = {
    grid: {
        item: {
            h1: {
                textAlign: 'center'
            },
            textAlign: 'left'
        }
    }
}

const AugmentedReality = ( { theme, themeToggler } ) => {

    const [ data ] = useFile('catalogue.json')
    const avatarURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNTN2xMhJeimPqTtxfHfWsW6QDFi-VqRYisw&usqp=CAU'
    const youtubeURL = 'https://www.youtube.com/embed/ixxaoJpWB_0'

    return(
        <div>
            <Navbar theme={theme} themeToggler={themeToggler}/>
            <Grid container direction='row' justify='center' alignItems='center'>
                <Grid item xs={12} sm={10} md={8} style={styles.grid.item}>
                    <StoreDescription avatarURL={avatarURL}/>
                    <StoreServices/>
                    <Advantages youtubeURL={youtubeURL}/>
                    <Catalogue furniture={data}/>
                </Grid>
            </Grid>
        </div>    
    )
}

export default AugmentedReality