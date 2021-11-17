import { Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { Delete } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import db from '../../../reducers/InitialeIDB';
import { useDispatch } from "react-redux";
import { getPanier, removeLignePanier } from "../../../actions/PanierAction";

const RemovePanier = ({id}) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(!open)
    }
    const onSubmit = async (id) => {
        await dispatch(removeLignePanier(id))
        handleOpen()
    }

    return (
        <>
            <Delete color="secondary" onClick={handleOpen} />

            <Dialog open={open} onClose={handleOpen}>
                <DialogTitle>
                    <Typography variant="subtitle1">Confirmation</Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="subtitle2">Voulez-vous vraiment enlever cette produit de votre panier ? </Typography>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleOpen}>Annuler</Button>
                    <Button color="secondary" onClick={() => onSubmit(id)}>Supprimer</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default RemovePanier