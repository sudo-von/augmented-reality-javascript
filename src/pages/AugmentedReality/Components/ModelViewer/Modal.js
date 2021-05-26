import React from "react"
/* Custom components. */
import ModelViewer from "./ModelViewer"
/* Material-ui components. */
import { Modal as MaterialModal } from "@material-ui/core/"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 5,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))
  
const Modal = ( { pieceOfFurniture, open, handleClose } ) => {

  const classes = useStyles()
  const [ modalStyle ] = React.useState({
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  })

  return(
    <MaterialModal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <ModelViewer {...pieceOfFurniture}/>
      </div>
    </MaterialModal>
  )
}

export default Modal