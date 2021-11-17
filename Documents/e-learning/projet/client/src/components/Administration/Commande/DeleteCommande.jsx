import { Delete } from "@material-ui/icons";
import { IconButton, Dialog, DialogActions, DialogTitle, DialogContent, Typography, Button } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCommande } from "../../../actions/CommandeActions";

const DeleteCommande = ({id}) => {

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(!open);
    }
    const onDeleteCommande = async (id) => {
        await dispatch(deleteCommande(id));
        handleOpen();
    }

    return (
        <>
            <IconButton>
                <Delete  color="secondary" onClick={handleOpen} />
            </IconButton>
            
            <Dialog open={open} onClose={handleOpen}>
                <DialogTitle>
                    <Typography variant="subtitle1" color="primary">Confirmation</Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="subtitle2">Voulez-vous vraiment supprimer cette commande ? </Typography>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleOpen}>Annuler</Button>
                    <Button color="secondary" onClick={() => onDeleteCommande(id)}>Supprimer</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DeleteCommande