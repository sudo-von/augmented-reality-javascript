import React from 'react'
/* Custom components. */
import Modal from './Modal'
/* Material-ui components. */
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'

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
  
const ModelViewerCard = ( { pieceOfFurniture } ) => {

    /* Hook to handle each modal. */
    const [ open, setOpen ] = React.useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    /* Destructuring props. */
    let { img, name, cost, description } = pieceOfFurniture

    return(
        <Card>
            <CardActionArea>
                <CardMedia
                component="img" 
                    style={styles.img}
                    src={img}
                    title={name}
                />
                <CardContent>
                    <p style={{fontWeight: "bold", fontSize: 14}}>{name}</p>
                    <p style={{fontSize: 12}}><b>Costo</b>: $ {cost}</p>
                    <p><b>Descripción</b>:</p>
                    <ul style={{textAlign: "left"}}>
                        {description.map((val, i) => 
                            <li key={`${i}-${val}`}>{val}</li>)}
                    </ul>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={handleOpen}>
                    Ver modelo en 3D
                </Button>
            </CardActions>
            <Modal pieceOfFurniture={pieceOfFurniture} open={open} handleClose={handleClose}/>
        </Card>
    )
}
export default ModelViewerCard