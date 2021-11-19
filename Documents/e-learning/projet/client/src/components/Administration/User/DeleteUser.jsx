import { IconButton,Dialog,DialogActions,DialogContent,DialogTitle, Button, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, getAllUser } from "../../../actions/UserAction";


const DeleteUser = ({id}) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleOnSubmit = async (id) => {
        await dispatch(deleteUser(id))
        dispatch(getAllUser());
        handleOpen();
    }

    return (
        <>
            <IconButton>
                <Delete color="secondary"  onClick={handleOpen} />
            </IconButton>

            <Dialog open={open} onClose={handleOpen}>
                <DialogTitle>
                    <Typography variant="subtitle1">Confirmation</Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="subtitle2">Voulez-vous vraiment supprimer cette utilisateur?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleOpen}>Annuler</Button>
                    <Button color="secondary" onClick={() => handleOnSubmit(id)}>Supprimer</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DeleteUser