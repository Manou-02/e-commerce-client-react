import { Edit } from "@material-ui/icons";
import { IconButton, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllUser, updateUser } from "../../../actions/UserAction";


const EditUser = ({user}) => {

    const [open, setOpen] = useState(false);
    const [info, setInfo] = useState({
        _id : user._id,
        nameUser : user.nameUser,
        emailUser : user.emailUser
    })
    const dispatch = useDispatch()

    const handleOpen = () => {
        setOpen(!open)
    }
    const handleChange = e => {
        const {name, value} = e.target;

        setInfo(prev => ({
            ...prev,
            [name] : value
        }))

    }
    const handleOnSubmit = async e => {
        e.preventDefault();
        
        await dispatch(updateUser(info))
        dispatch(getAllUser());
        handleOpen();
    }

    return (
        <>
            <IconButton>
                <Edit color="primary" onClick={handleOpen} />
            </IconButton>

            <Dialog open={open} onClose={handleOpen}>
                <DialogTitle>
                    <Typography variant="subtitle1">Modification d'un utilisateur </Typography>
                </DialogTitle>
                <DialogContent>
                    <TextField 
                        id="nameUser"
                        name="nameUser"
                        type="text"
                        label="Nom d'utilisateur"
                        margin="dense"
                        fullWidth
                        className="mb-4"
                        defaultValue={user.nameUser}
                        onChange={handleChange}
                    />
                    <TextField 
                        id="emailUser"
                        name="emailUser"
                        type="email"
                        label="E-mail"
                        margin="dense"
                        fullWidth
                        className="mb-4"
                        defaultValue={user.emailUser}
                        onChange={handleChange}
                    />
                    
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={handleOpen}>Annuler</Button>
                    <Button color="primary" onClick={handleOnSubmit}>Sauvegarder</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default EditUser