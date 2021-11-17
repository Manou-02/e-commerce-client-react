import { Delete } from '@material-ui/icons'
import { useState } from 'react'
import {Button, Dialog, DialogContent, DialogActions, DialogTitle, Typography} from '@material-ui/core'
import { deleteProduit } from '../../../actions/ProduitAction'
import { useDispatch } from 'react-redux'





const DeleteProduit = ({id}) => {

    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(!open)
    }

    const onDeleteHandler = async id => {
        await dispatch(deleteProduit(id)) 

    }
     return (
        <>
            <Delete color="secondary" onClick={handleOpen} />
            <Dialog open={open} onClose={handleOpen}>
                <DialogTitle>
                    <Typography variant="h6">Confirmation de la suppression</Typography>
                </DialogTitle>
                <DialogContent> 
                    <Typography variant="subtitle1">Voulez-vous vraiment supprimer ce produit?</Typography>

                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleOpen}>Annuler</Button>
                    <Button color="secondary" onClick={() => onDeleteHandler(id)}>Supprimer</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DeleteProduit