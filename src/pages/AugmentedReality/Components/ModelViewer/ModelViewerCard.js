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

    return(
        <Card>
            <CardActionArea>
                <CardMedia
                component="img" 
                    style={styles.img}
                    src={pieceOfFurniture.img}
                    title={pieceOfFurniture.name}
                />
                <CardContent>
                    <p style={{fontWeight: "bold", fontSize: 14}}>{pieceOfFurniture.name}</p>
                    <p style={{fontSize: 12}}><b>Costo</b>: $ {pieceOfFurniture.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    <p><b>Descripción</b>:</p>
                    <ul style={{textAlign: "left"}}>
                        {pieceOfFurniture.description.map((i, description) => 
                            <li key={`${i}-${description}`}>{description}</li>)}
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