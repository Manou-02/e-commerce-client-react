import React, {useState} from 'react';
import { Delete } from '@material-ui/icons'
import {Slide, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Button} from "@material-ui/core";
import { deleteCategory, getAllCategory } from '../../../actions/CategoryAction';
import { useDispatch } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteCategory = ({id}) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(!open)
    }

    const deleteCateg = async (id) => {
        await dispatch(deleteCategory(id));
        dispatch(getAllCategory());
    }
    return (
        <>
            <Delete color="secondary" onClick={handleOpen} />
            <Dialog open={open} onClose={handleOpen}  TransitionComponent={Transition} keepMounted>
                <DialogTitle>
                    <Typography variant="subtitle1">Confirmation</Typography> 
                </DialogTitle>
                <DialogContent>
                   <Typography>Voulez-vous vraiment supprimer cette categorie?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="text" color="primary" onClick={handleOpen}>Annuler</Button>
                    <Button variant="text" color="secondary" onClick={() =>deleteCateg(id)}>Supprimer</Button>
                </DialogActions>
             </Dialog>
        </>
    )
}

export default DeleteCategory