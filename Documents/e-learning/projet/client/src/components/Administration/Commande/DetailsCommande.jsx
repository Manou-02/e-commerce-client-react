import React, { useEffect } from "react";
import { Info, CheckCircle } from "@material-ui/icons";
import { IconButton, Typography,Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useState } from "react";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const DetailsCommande = ({commande}) => {

    const [open, setOpen] = useState(false);


    const handleOpen = () => {
        setOpen(!open)
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <IconButton>
                <Info color="primary" onClick={handleOpen} />
            </IconButton>
            <Dialog 
                open={open} 
                onClose={handleOpen} 
                TransitionComponent={Transition}
                keepMounted
                fullWidth="lg"
            >
                <DialogTitle>
                    <Typography variant="subtitle1"></Typography>
                </DialogTitle>
                <DialogContent>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="subtitle1" color="primary">Commande</Typography>


                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" color="primary">Client</Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" variant="contained" onClick={handleOpen}> <CheckCircle /> &nbsp;&nbsp; Marquer comme effectuer</Button>
                    <Button color="secondary" onClick={handleOpen}>Fermer</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DetailsCommande